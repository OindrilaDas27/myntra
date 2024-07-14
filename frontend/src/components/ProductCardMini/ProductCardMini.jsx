import React from 'react';
import styles from './ProductCardMini.module.css';
import { HeartIcon } from '@heroicons/react/24/outline';
const ProductCardMini = ({ productImage, productName, productPrice, onClick, showButton }) => {
  return (
    <div className={styles.product_card} onClick={onClick ? onClick : undefined}>
      <img src={productImage} alt="image" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.item_name}>{productName}</div>
        <div className={styles.price}>{productPrice}</div>
        {showButton && (
          <div className={styles.buttons}>
            <button className={styles.add_to_cart}>Add to cart</button>
            <HeartIcon className={styles.icon}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCardMini