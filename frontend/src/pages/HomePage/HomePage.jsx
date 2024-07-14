import React, { useEffect, useState } from 'react';
import styles from '../HomePage/HomePage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import idea1 from '../../assets/idea1.png';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import { GET_PRODUCT_ENDPOINT } from '../../utils/endpoints';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(GET_PRODUCT_ENDPOINT);
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  }

  return (
    <div className={styles.homepage_wrapper}>
      <SearchBar onSearch={handleSearch} allProducts={products} />
      <div className={styles.main_container}>
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard
              id={product.productID}
              productImage={product.image}
              brandName={product.brandName}
              productName={product.name}
              productPrice={product.price}
            />
          ))}
          {filteredProducts.length === 0 && products.map((product) => (
            <ProductCard
              id={product.productID}
              productImage={product.image}
              brandName={product.brandName}
              productName={product.name}
              productPrice={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage