import React, { useState } from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import { HeartIcon, MagnifyingGlassIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GET_PRODUCT_ENDPOINT, GET_INSPO_ENDPOINT } from '../../utils/endpoints';

const SearchBar = ({ onSearch }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    const isInspoPage = location.pathname === '/inspo'

    const handleSearch = async () => {
        try {
            const endpoint = isInspoPage ? GET_INSPO_ENDPOINT : GET_PRODUCT_ENDPOINT;
            
            if (!searchQuery.trim()) {
                // If search query is empty, fetch all products
                onSearch([]);
                return;
            }
            const res = await axios.get(endpoint, {
                params: {
                    query: searchQuery
                }
            });
            onSearch(res.data);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.searchbar_wrapper}>
            <div className={styles.searchBar}>
                <MagnifyingGlassIcon className={styles.icon} />
                <input t
                    ype="text"
                    placeholder='Search for an item...'
                    className={styles.input_field}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
            <div className={styles.container}>
                {isInspoPage ? <PlusIcon className={styles.icon} /> : <ShoppingBagIcon className={styles.icon} />}
            </div>
            <div className={styles.container}>
                <HeartIcon className={styles.icon} />
            </div>
        </div>
    )
}

export default SearchBar