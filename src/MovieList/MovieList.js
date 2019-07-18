import React, { Component } from 'react';
import List from 'src/List';
import Search from 'src/Search';
import SearchByType from 'src/SearchByType';
import SortByCategory from 'src/SortByCategory';
import Header from 'src/Header';
import Footer from 'src/Footer';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieList.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestApiData,
  clickStoreData,
} from './MovieListActions';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  filterMovies = (searchText, activeSearch, allMovies) => {
    const currentMovieList = allMovies;
    let filteredItem = searchText || '';
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
    const { MovieListReducer, SearchReducer, SearchByTypeReducer, SortByCategoryReducer } = this.props;
    const activeSort = SortByCategoryReducer ? SortByCategoryReducer.activeSort : null;
    const activeSearch = SearchByTypeReducer ? SearchByTypeReducer.activeSearch : null;
    const searchText  = SearchReducer && SearchReducer.inputs ? SearchReducer.inputs : '';
    const MovieListReducerResponse = MovieListReducer ? MovieListReducer.response : [];
    let allMoviesdata = MovieListReducerResponse ? MovieListReducerResponse.data : [];
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
        <List data={data} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  MovieListReducer: state.MovieListReducer,
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
)(MovieList);
