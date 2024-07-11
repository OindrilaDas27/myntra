import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import { HeartIcon, MagnifyingGlassIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isInspoPage = location.pathname === '/inspo'
    return (
        <div className={styles.searchbar_wrapper}>
            <div className={styles.searchBar}>
                <MagnifyingGlassIcon className={styles.icon} />
                <input type="text" placeholder='Search for an item...' className={styles.input_field} />
            </div>
            <div className={styles.container}>
                {isInspoPage ? <PlusIcon className={styles.icon}/> : <ShoppingBagIcon className={styles.icon}/>}
            </div>
            <div className={styles.container}>
                <HeartIcon className={styles.icon}/>
            </div>
        </div>
    )
}

export default SearchBar