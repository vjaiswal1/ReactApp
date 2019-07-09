import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div>
    <h4 className={styles.mainHeading}>
      <strong>netflix</strong>
        roulette
    </h4>
    <h1 className={styles['display-4 searchMovies']}>Find your Movie</h1>
  </div>
);
export default Header;
