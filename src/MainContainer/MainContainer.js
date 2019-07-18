import React, { Component } from "react";
import MoviesList from "src/MoviesList";
import Search from "src/Search";
import SearchByType from "src/SearchByType";
import SortByCategory from "src/SortByCategory";
import Header from "src/Header";
import Footer from "src/Footer";
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from "./MainContainer.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestApiData,
  clickStoreData,
} from "./MainContainerActions";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  filterMovies = (searchText, activeSearch, allMovies) => {
    const currentMovieList = allMovies;
    let filteredItem = searchText || "";
    let filteredMovieList = [];
    if (activeSearch === 'title') {
      filteredMovieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        return movie.title.toLowerCase().includes(filteredItem);
      });
    } else if(activeSearch === 'genre') {
      filteredMovieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        const matchedGenre = movie.genres.find(item => item.toLowerCase().includes(filteredItem))
        return !!matchedGenre;
      });
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

  getFilteredAndSortedData = (allMoviesdata, searchText, activeSearch, activeSort) =>  {
    const filteredMoviesData = this.filterMovies(searchText, activeSearch, allMoviesdata);
    let filteredAndSortedData = [];
    if (activeSort === 'release') {
      filteredAndSortedData = this.sortRelease(filteredMoviesData);
    } else if(activeSort === 'rating') {
      filteredAndSortedData = this.sortRating(filteredMoviesData);
    }
    return filteredAndSortedData;
  }

  render() {
    const { MainContainerReducer, SearchReducer, SearchByTypeReducer, SortByCategoryReducer, match } = this.props;
    const activeSort = SortByCategoryReducer ? SortByCategoryReducer.activeSort : null;
    const activeSearch = SearchByTypeReducer ? SearchByTypeReducer.activeSearch : null;
    const searchText  = SearchReducer && SearchReducer.inputs ? SearchReducer.inputs : "";
    const MainContainerReducerResponse = MainContainerReducer ? MainContainerReducer.response : [];
    let allMoviesdata = MainContainerReducerResponse ? MainContainerReducerResponse.data : [];
    const filteredAndSortedData = this.getFilteredAndSortedData(allMoviesdata, searchText, activeSearch, activeSort);
    const data = filteredAndSortedData || [];
    return (
      <div>
        <div className={cx(globalStyles.jumbotron, styles.jumbotron)}>
          <Header />
          <Search
          handleSearchText={this.handleSearchText}
          />
          <SearchByType activeSearch={activeSearch} />
        </div>
        <SortByCategory count={data.length} activeSort={activeSort} />
        <MoviesList data={data} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  MainContainerReducer: state.MainContainerReducer,
  SearchReducer: state.SearchReducer,
  SearchByTypeReducer: state.SearchByTypeReducer,
  SortByCategoryReducer: state.SortByCategoryReducer,
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
