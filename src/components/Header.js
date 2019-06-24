import React, { Component } from 'react'
import MoviesList from './MoviesList'
import MoviesData from '../data/moviesList'
import Search from './Search'
import SortSearch from './SortSearch'
import SortByCategory from './SortByCategory'

class Header extends Component {
    constructor(props) {
        super(props);
        this.MoviesData = MoviesData.data;
        this.state = {
            results: this.MoviesData,
            updatedMovieList: this.MoviesData,
            inputs: ""
        };
    }

    onkeyHandle =(e) => {
        let inputVal = "";
        if (e.target.value !== '') {
            inputVal = e.target.value;
        }
        this.setState({
            inputs: inputVal
        })
    }

    resultsQuery = () => {
        const currentMovieList = this.state.updatedMovieList;
        let filteredItem = this.state.inputs;
        let movieList = "";
        if (filteredItem !== '') {
            movieList = currentMovieList.filter(movie => {
                filteredItem = filteredItem.toLowerCase();
                return movie.title.toLowerCase().includes(filteredItem);
            })

        } else {
            movieList = this.MoviesData.data;
        }
        this.setState({
            results: movieList
        });
    }

    //Sorting
    sortGenres = () => {
        const movieGenres = this.state.results
        let sortResult = movieGenres.sort((a, b) => {
            if (a.genres > b.genres) {
                return 1
            } else if (a.genres < b.genres) {
                return -1
            }
        })
        this.setState({
            results: sortResult
        })
    }
    sortTitles = () => {
        const movieTitles = this.state.results
        let sortResult = movieTitles.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            }
        })
        this.setState({
            results: sortResult
        })
    }

    sortRelease = () => {
        const movieReleaseDate = this.state.results
        let sortResult = movieReleaseDate.sort((a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        })
        this.setState({
            results: sortResult
        })
    }
    sortRating = () => {
        const movieRatings = this.state.results
        let sortResult = movieRatings.sort((a, b) => {
            return b.vote_count - a.vote_count
        })
        this.setState({
            results: sortResult
        })
    }
    render() {  
        const data = this.state.results;
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Find your Movie</h1>
                    <Search onkeyHandle={this.onkeyHandle} resultsQuery={this.resultsQuery}/>
                    <SortSearch sortTitles={this.sortTitles} sortGenres={this.sortGenres}/>      
                </div>
                <SortByCategory sortRelease={this.sortRelease} sortRating={this.sortRating} />              
                <div className="row justify-content-center mainContent">
                    <MoviesList data={data} sortTitles={this.sortTitles} /> 
                </div>                         
            </div>
        );
    }
}

export default Header;