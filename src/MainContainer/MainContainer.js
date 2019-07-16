import React, { Component } from "react";
import MoviesList from "src/MoviesList";
// import MoviesData from "src/data/moviesList";
import Search from "src/Search";
import SearchByType from "src/SearchByType";
import SortByCategory from "src/SortByCategory";
import Header from "src/Header";
import Footer from "src/Footer";
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from "./MainContainer.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "src/redux/history";
import {
  requestApiData,
  clickStoreData,
} from "src/redux/actions";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputs: "",
      // titleActive: true,
      // genresActive: false,
      // releaseActive: false,
      // ratingActive: true
    };
  }

  // handleSearchText = e => {
  //   let inputVal = "";
  //   if (e.target.value !== "") {
  //     inputVal = e.target.value;
  //   }
  //   this.setState({
  //     inputs: inputVal
  //   });
  // };

  // handleSortTitleClick = () => {

  //   this.setState({ titleActive: true, genresActive: false});
  // }

  // handleSortGenreClick = () => {
  //   this.setState({ titleActive: false, genresActive: true});
  // }

  // handleReleaseDateSortClick = () => {
  //   this.setState({ releaseActive: true, ratingActive: false});
  // }

  // handleRatingSortClick = () => {
  //   this.setState({ releaseActive: false, ratingActive: true});
  // }

  filterMovies = (searchText, titleActive, genresActive, allMovies) => {
    const currentMovieList = allMovies;
    let filteredItem = searchText || "";
    let filteredMovieList = [];
    if (titleActive) {
      filteredMovieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        return movie.title.toLowerCase().includes(filteredItem);
      });
    } else if(genresActive) {
      filteredMovieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        const matchedGenre = movie.genres.find(item => item.toLowerCase().includes(filteredItem))
        return !!matchedGenre;
      });
    } else {
      // filteredMovieList = MoviesData.data;
    }
    return filteredMovieList;
  };

  sortRelease = (movies) => {
    const movieReleaseDate = movies;
    let sortResult = movieReleaseDate.sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });
    return sortResult;
  };
  
  sortRating = (movies) => {
    let sortResult = movies.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
    return sortResult;
  };

  getFilteredAndSortedData = (allMoviesdata, searchText, titleActive, genresActive, releaseActive, ratingActive) =>  {
    const filteredMoviesData = this.filterMovies(searchText, titleActive, genresActive, allMoviesdata);
    let filteredAndSortedData = [];
    if (releaseActive) {
      filteredAndSortedData = this.sortRelease(filteredMoviesData);
    } else if(ratingActive) {
      filteredAndSortedData = this.sortRating(filteredMoviesData);
    }
    return filteredAndSortedData;
  }

  render() {
    const { movieReducer } = this.props;
    const releaseActive = movieReducer ? movieReducer.releaseActive : null;
    const ratingActive = movieReducer ? movieReducer.ratingActive : null;
    const genresActive = movieReducer ? movieReducer.genresActive : null;
    const titleActive = movieReducer ? movieReducer.titleActive : null;
    const searchText  = movieReducer && movieReducer.inputs ? movieReducer.inputs : "";
    const movieReducerResponse = movieReducer ? movieReducer.response : [];
    let allMoviesdata = movieReducerResponse ? movieReducerResponse.data : [];
    // const { inputs : searchText, titleActive, genresActive } = this.state;
    const filteredAndSortedData = this.getFilteredAndSortedData(allMoviesdata, searchText, titleActive, genresActive, releaseActive, ratingActive);
    const data = filteredAndSortedData || [];
    return (
      <div>
        <div className={cx(globalStyles.jumbotron, styles.jumbotron)}>
          <Header />
          <Search
          handleSearchText={this.handleSearchText}
          />
          <SearchByType
                genresActive={genresActive}
                titleActive={titleActive}
                // handleSortTitleClick={this.handleSortTitleClick}
                // handleSortGenreClick={this.handleSortGenreClick}
                />
          <Router history={history}>
            <Switch>
                <Route path="/film/:id" component={MoviesList} />
            </Switch>
          </Router>      
        </div>
        <SortByCategory
          count={data.length}
          // handleReleaseDateSortClick={this.handleReleaseDateSortClick}
          releaseActive={releaseActive}
          ratingActive={ratingActive}
          // handleRatingSortClick={this.handleRatingSortClick}
        />
        <MoviesList data={data} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieReducer: state.movieReducer,
  params: [state.params],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestApiData, clickStoreData },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
