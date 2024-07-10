import React from 'react';
import styles from '../HomePage/HomePage.module.css';
import AppBar from '../../components/AppBar/AppBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import BottomNavBar from '../../components/BottomNavbar/BottomNavBar';

const HomePage = () => {
  return (
    <div className={styles.homepage_wrapper}>
        <SearchBar />
        <div className={styles.carosule}>
            {/* <ProductCard /> */}
        </div>
    </div>
  )
}

export default HomePage