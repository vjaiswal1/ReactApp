import React, {Component} from 'react'
class MovieDetailed extends Component {
    constructor(props) {
        super(props)
    }
    render() {        
        const {singleMovieData} = this.props;
        return(
            <div className="media">
                <img className="mr-3" src={singleMovieData.poster_path} alt={singleMovieData.title} />
                <div className="media-body">
                <div className="clearfix">
                <h2 className="float-left mt-0">{singleMovieData.title}</h2> 
                <span className="border border-secondary rounded-circle mt-1 ml-4 pt-1 pr-2 pb-1 pl-2 float-left"><small>{singleMovieData.vote_average}</small></span></div>
                <p><strong className="detailedMovie_Text">{singleMovieData.release_date}</strong>  year <strong className="detailedMovie_Text">{singleMovieData.runtime}</strong> min </p>
                <p>{singleMovieData.overview}</p>
                </div>
            </div>
        )             
    }
}
export default MovieDetailed;




