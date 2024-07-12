import React from 'react';
import styles from '../TakeInspo/TakeInspo.module.css';
import BentoGrid from '../../components/BentoGrid/BentoGrid';
import InspoLandingPage from '../../components/InspoLandingPage/InspoLandingPage';

const TakeInspo = () => {
  return (
    <div className={styles.inspo_wrapper}>
        <BentoGrid />
        {/* <InspoLandingPage /> */}
    </div>
  )
}

export default TakeInspo