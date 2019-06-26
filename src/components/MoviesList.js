import React, {Component} from 'react';
import MovieDetailed from './MovieDetailed'; 

class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            singleMovieData:"",
            isDetailedView: false
        }
    }
    componentDidMount(){
        this.props.sortTitles();        
    }   

    detailedMovieAPI =(id) =>{
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
       .then(res => res.json())
       .then(result => {
           this.setState({
             isDetailedView: true,
             singleMovieData: result
           });
        },
        (error) => {
           this.setState({
             isDetailedView: true,
             error
           });
        })
    }

    render() {
        const {data} = this.props;
        const MovieList = () => data.map(movie => 
            <div className="card col-md-3 mx-3 my-3 px-0" key={movie.id}>
                <img className="card-img-top" src={movie.poster_path} onClick={this.detailedMovieAPI.bind(null, movie.id)} alt={movie.title} />
                <div className="card-body">                    
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text clearfix">
                    <span className="float-left">{movie.title}</span> 
                    <button type="button" className="btn btn-outline-secondary btn-sm float-right">{movie.release_date}</button>
                    </p> 
                    <p className="movieGenres">{movie.genres.join(" & ")}</p>                    
                </div>                       
            </div>
        )
        return (
            <div className="row justify-content-center mainContent">                
                {this.state.isDetailedView ? <MovieDetailed singleMovieData={this.state.singleMovieData} />: <MovieList /> }    
            </div>
        )       
    }
}
export default MoviesList;