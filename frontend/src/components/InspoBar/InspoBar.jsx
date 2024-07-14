import React from 'react';
import styles from './InspoBar.module.css'; 
import { useLocation } from 'react-router-dom';

const InspoBar = ({ selectedSection, setSelectedSection }) => {
  const location = useLocation();
  const isMoodBoard = location.pathname === '/inspo/moodboard' || selectedSection === 'moodBoard';
  return (
    <div className={`${styles.inspobar_wrapper} ${isMoodBoard ? styles.top_less : styles.top_more}`}>
      <div
        className={`${styles.inspo_tab} ${selectedSection === 'takeInspiration' ? styles.selected : ''}`}
        onClick={() => setSelectedSection('takeInspiration')}
      >
        Take some Inspirations
      </div>
      <div
        className={`${styles.inspo_tab} ${selectedSection === 'moodBoard' ? styles.selected : ''}`}
        onClick={() => setSelectedSection('moodBoard')}
      >
        Create your mood board
      </div>
    </div>
  );
}

export default InspoBar;
