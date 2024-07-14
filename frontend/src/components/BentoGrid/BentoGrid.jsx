import React from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import styles from './BentoGrid.module.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};


const BentoGrid = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/inspo/${item.id}`, {state: {image: item.image, title: item.description}});
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.myMasonryGrid}
      columnClassName={styles.myMasonryGridColumn}
    >
      {items.map(item => (
        <div key={item.id} className={styles.item} onClick={() => handleClick(item)}>
          <img src={item.image} alt={item.description} className={styles.image} />
          <h2 className={styles.title}>{item.description}</h2>
        </div>
      ))}
    </Masonry>
  );
};

export default BentoGrid;
