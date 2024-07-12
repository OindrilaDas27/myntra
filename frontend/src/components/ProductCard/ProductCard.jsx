import React from 'react';
import styles from './ProductCard.module.css'

const ProductCard = ({ productImage,  brandName, productName, productPrice }) => {
  return (
    <div className={styles.product_card}>
        <img src={productImage} alt="image" className={styles.image} />
        <div className={styles.details}>
            <h3 className={styles.brand_name}>{brandName}</h3>
            <div className={styles.item_name}>{productName}</div>
            <div className={styles.price}>{productPrice}</div>
        </div>
    </div>
  )
}

export default ProductCard