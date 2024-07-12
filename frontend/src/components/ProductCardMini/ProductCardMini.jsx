import React from 'react';
import styles from './ProductCardMini.module.css';

const ProductCardMini = ({ productImage, productName, productPrice }) => {
  return (
    <div className={styles.product_card}>
        <img src={productImage} alt="image" className={styles.image} />
        <div className={styles.details}>
            <div className={styles.item_name}>{productName}</div>
            <div className={styles.price}>{productPrice}</div>
        </div>
    </div>
  )
}

export default ProductCardMini