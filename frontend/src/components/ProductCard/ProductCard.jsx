import React from 'react';
import styles from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, productImage,  brandName, productName, productPrice, productDescription }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`, {
      state: {
        image: productImage, 
        title: productName, 
        brand: brandName, 
        price: productPrice,
        description: productDescription
      }
    });
  }

  return (
    <div className={styles.product_card} key={id} onClick={handleClick} >
        <img src={productImage} alt="image" className={styles.image}/>
        <div className={styles.details}>
            <h3 className={styles.brand_name}>{brandName}</h3>
            <div className={styles.item_name}>{productName}</div>
            <div className={styles.price}>Rs.{productPrice}</div>
        </div>
    </div>
  )
}

export default ProductCard