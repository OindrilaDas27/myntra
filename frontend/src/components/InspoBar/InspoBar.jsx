import React from 'react';
import styles from './InspoBar.module.css'; 

const InspoBar = ({ selectedSection, setSelectedSection }) => {
  return (
    <div className={styles.inspobar_wrapper}>
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
