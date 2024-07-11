import React from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import styles from './BentoGrid.module.css';
import image1 from '../../assets/team.jpeg';
import image2 from '../../assets/certificate.png';
import image3 from '../../assets/bleh.png';
import image4 from '../../assets/test.png';
import image5 from '../../assets/test2.png';
import image6 from '../../assets/test3.jpg';
import image7 from '../../assets/image.png';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

const items = [
  { id: 1, image: image1, title: 'Item 1' },
  { id: 2, image: image2, title: 'Item 2' },
  { id: 3, image: image3, title: 'Item 3' },
  { id: 4, image: image4, title: 'Item 4' },
  { id: 5, image: image5, title: 'Item 5' },
  { id: 6, image: image6, title: 'Item 6' },
  { id: 7, image: image7, title: 'Item 7' },
];

const BentoGrid = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/inspo/${id}`);
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.myMasonryGrid}
      columnClassName={styles.myMasonryGridColumn}
    >
      {items.map(item => (
        <div key={item.id} className={styles.item} onClick={() => handleClick(item.id)}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <h2 className={styles.title}>{item.title}</h2>
        </div>
      ))}
    </Masonry>
  );
};

export default BentoGrid;
