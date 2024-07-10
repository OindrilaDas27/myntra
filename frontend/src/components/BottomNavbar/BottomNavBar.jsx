import React from 'react';
import styles from '../BottomNavbar/BottomNavbar.module.css';
import { HomeIcon, SparklesIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
    {
        name: 'Home',
        icon: HomeIcon,
        id: 'home',
        path: '/'
    },
    {
        name: 'Categories',
        icon: Squares2X2Icon,
        id: 'categories',
        path: '/category'
    },
    {
        name: 'Inspo',
        icon: SparklesIcon,
        id: 'inspo',
        path: '/inspo'
    },
    {
        name: 'Account',
        icon: UserIcon,
        id: 'account',
        path: '/account'
    },
];

const BottomNavBar = () => {
    const [selected, setSelected] = useState('home');

  return (
    <div className={styles.navbar_wrapper}>
        {navItems.map((item) => (
            <Link to={item.path} key={item.id} className={`${styles.nav_item} ${selected === item.id ? styles.selected : ''}`} onClick={() => setSelected(item.id)}>
                <item.icon className={styles.icon} />
                <div className={styles.label}>{item.name}</div>
            </Link>
        ))}
    </div>
  )
}

export default BottomNavBar