import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
    return (
        <div className={styles.searchbar_wrapper}>
            <div className={styles.searchBar}>
                <MagnifyingGlassIcon className={styles.icon} />
                <input type="text" placeholder='Search for an item...' className={styles.input_field} />
            </div>
            <div className={styles.container}>
                <ShoppingBagIcon className={styles.icon}/>
            </div>
            <div className={styles.container}>
                <HeartIcon className={styles.icon}/>
            </div>
        </div>
    )
}

export default SearchBar