import React, { Component } from 'react';
import MovieDetailed from 'src/MovieDetailed';
import MovieApi from 'src/services/movie';
import MovieCard from 'src/MovieCard';
import styles from './MovieList.css';
import { Link } from 'react-router-dom';

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

    getYear(val) {
        return new Date(val).getFullYear();
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
            <div className={styles['card col-md-3 mx-3 my-3 px-0']} key={movie.id}>
            <Link to={`/film/${movie.id}`} onClick={this.detailedMovieAPI.bind(null, movie.id)}>
                <img className={styles['card-img-top']} src={movie.poster_path}  alt={movie.title} />
            </Link>
            <MovieCard title={movie.title} releaseDate={this.getYear(movie.release_date)} genres={movie.genres} />                                    
            </div>
        );
        return (
            <div className={styles['row justify-content-center mainContent']}>                
                {this.state.isDetailedView ? 
                    <>
                    <MovieDetailed singleMovieData={this.state.singleMovieData} />
                    <MovieList />
                    </>
                    :
                <MovieList /> }    
            </div>
        )
    }
}
export default MoviesList;