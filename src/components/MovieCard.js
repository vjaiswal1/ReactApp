import React from 'react'
const MovieCard = ({title, release_date, genres}) => 
        <div className="card-body">                    
            <h5 className="card-title">{title}</h5>
            <p className="card-text clearfix">
                <span className="float-left">{title}</span> 
                <span className="card-releaseDate float-right">{release_date}</span>
            </p> 
            <p className="movieGenres">{genres.join(" & ")}</p>                    
        </div>
export default MovieCard;
