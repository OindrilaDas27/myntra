import React from 'react';
import styles from '../TakeInspo/TakeInspo.module.css';
import BentoGrid from '../../components/BentoGrid/BentoGrid';
import InspoLandingPage from '../../components/InspoLandingPage/InspoLandingPage';

const TakeInspo = ({ searchResults }) => {
  return (
    <div className={styles.inspo_wrapper}>
      {searchResults.length > 0 ? <BentoGrid items={searchResults} /> : <InspoLandingPage />}
    </div>
  )
}

export default TakeInspo