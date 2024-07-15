import React from 'react';
import styles from './ProductPage.module.css'
import { useLocation, useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

const ProductPage = () => {
    const location = useLocation();
    const { id } = useParams();
    const { image, title, brand, price, description } = location.state;

  return (
    <div className={styles.product_page}>
      <img src={image} alt={title} className={styles.product_image} />
      <div className={styles.product_details}>
        <h1>{brand}</h1>
        <h3>{title}</h3>
        <div 
          className={styles.description} 
          dangerouslySetInnerHTML={{ __html: description }} 
        />
      </div>
      <div className={styles.bottom_bar}>
        <div className={styles.price}>Price: Rs. <span>{price}</span></div>
        <button className={styles.cart_btn}>Add to Card</button>
        <button className={styles.wishlist}><HeartIcon className={styles.icon} /></button>
      </div>
    </div>
  )
}

export default ProductPage