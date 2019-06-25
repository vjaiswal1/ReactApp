import React, {Component} from 'react'

class MoviesList extends Component {
    componentDidMount(){
        this.props.sortTitles();
    }

    render() {
        const {data} = this.props;        
        return data.map(movie => 
                <div className="card col-md-3 mx-3 my-3 px-0" key={movie.id}>
                    <img className="card-img-top" src={movie.poster_path} alt={movie.title} />
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
    }
}
export default MoviesList;