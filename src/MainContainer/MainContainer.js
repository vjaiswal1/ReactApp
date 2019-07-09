import React, { Component } from "react";
import MoviesList from "src/MoviesList";
import MoviesData from "src/data/moviesList";
import Search from "src/Search";
import SortSearch from "src/SortSearch";
import SortByCategory from "src/SortByCategory";
import Header from "src/Header";
import Footer from "src/Footer";
import styles from "./MainContainer.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "Components/history";
import {
  requestApiData,
  clickStoreData,
  filteredFunc
} from "Components/actions";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.dataFromStore = "";
    this.sortByTitle = {};
    this.state = {
      results: MoviesData.data,
      updatedMovieList: MoviesData.data,
      inputs: "",
      titleActive: true,
      genresActive: false,
      releaseActive: false,
      ratingActive: true
    };
  }

  onKeyHandle = e => {
    let inputVal = "";
    if (e.target.value !== "") {
      inputVal = e.target.value;
    }
    this.setState({
      inputs: inputVal
    });
  };

  resultsQuery = () => {
    const currentMovieList = this.state.updatedMovieList;
    let filteredItem = this.state.inputs;
    let movieList = "";
    if (filteredItem !== "") {
      movieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        return movie.title.toLowerCase().includes(filteredItem);
      });
    } else {
      movieList = MoviesData.data;
    }
    this.props.filteredFunc(movieList);
  };

  sortGenres = () => {
    const movieGenres = this.state.results;
    let sortResult = movieGenres.sort((a, b) => {
      if (a.genres > b.genres) {
        return 1;
      } else if (a.genres < b.genres) {
        return -1;
      }
    });
    this.props.filteredFunc(sortResult);
  };
  sortTitles = () => {
    const movieTitles = this.state.results;
    let sortResult = movieTitles.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
    });
    this.props.filteredFunc(sortResult);
    if (!this.props.filteredTitle) {
      return (this.sortByTitle = {});
    } else {
      this.sortByTitle = this.props.filteredTitle;
    }
  };

  sortRelease = () => {
    const movieReleaseDate = this.state.results;
    let sortResult = movieReleaseDate.sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });
    this.props.filteredFunc(sortResult);
  };
  sortRating = () => {
    const movieRatings = this.state.results;
    let sortResult = movieRatings.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
    this.props.filteredFunc(sortResult);
  };
  componentDidMount() {
    this.sortRating();
  }

  render() {
    let data = this.props.productReducer ? this.props.productReducer.data : [];
    data = this.props.filteredTitle ? this.props.filteredTitle : [];
    return (
      <div>
        <div className={styles.jumbotron}>
          <Header />
          <Search
            onKeyHandle={this.onKeyHandle}
            resultsQuery={this.resultsQuery}
          />
          <Router history={history}>
            <Switch>
                <Route path="/film/:id" component={MoviesList} />
                <SortSearch
                sortTitles={this.sortTitles}
                genresActive={this.state.genresActive}
                titleActive={this.state.titleActive}
                sortGenres={this.sortGenres}
            />
            </Switch>
            </Router>          
        </div>
        <SortByCategory
          sortRelease={this.sortRelease}
          releaseActive={this.state.releaseActive}
          ratingActive={this.state.ratingActive}
          sortRating={this.sortRating}
        />
        <MoviesList data={data} sortTitles={this.sortTitles} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productReducer: state.productReducer.response,
  params: [state.params],
  filteredTitle: state.productReducer.filteredTitle
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestApiData, clickStoreData, filteredFunc },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
