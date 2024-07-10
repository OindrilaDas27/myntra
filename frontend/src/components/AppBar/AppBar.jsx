import React from 'react'
import styles from './AppBar.module.css';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';

const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <div className={styles.appbar_wrapper}>
      {!isHomePage && (
        <ArrowLeftIcon style={{ height: "2rem"}} onClick={() => navigate(-1)} />
      )}
      <h1>Myntra</h1>
    </div>
  )
}

export default AppBar