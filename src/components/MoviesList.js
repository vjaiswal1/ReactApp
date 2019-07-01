import React, {Component} from 'react';
import MovieDetailed from './MovieDetailed'
import MovieApi from '../services/movie'
import MovieCard from './MovieCard'

class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            singleMovieData:"",
            isDetailedView: false,
            someData: this.props
        }
    }
    componentDidMount(){
        this.props.sortTitles();        
    }

    detailedMovieAPI =(id) =>{
        MovieApi(id)
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
                <MovieCard title={movie.title} release_date={movie.release_date} genres={movie.genres} />                                    
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