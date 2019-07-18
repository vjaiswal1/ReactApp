import React, { Component } from 'react';
import MovieCard from 'src/MovieCard';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieList.css';

class MoviesList extends Component {
  getYear(val) {
    return new Date(val).getFullYear();
  }

  render() {
    const { data } = this.props;
    const MovieList = () => data.map(movie => (
      <div className={cx(globalStyles.card, globalStyles['col-md-3'], globalStyles['mx-3'], globalStyles['my-3'], globalStyles['px-0'])} key={movie.id}>
        <Link to={`/film/${movie.id}`}>
          <img className={globalStyles['card-img-top']} src={movie.poster_path} alt={movie.title} />
        </Link>
        <MovieCard title={movie.title} releaseDate={this.getYear(movie.release_date)} genres={movie.genres} />
      </div>
    ));
    return (
      <div className={cx(globalStyles.row, globalStyles['justify-content-center'], styles.mainContent)}>
        <MovieList />
      </div>
    );
  }
}
export default MoviesList;
