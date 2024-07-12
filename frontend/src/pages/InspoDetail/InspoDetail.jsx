import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './InspoDetail.module.css';
import ProductCardMini from '../../components/ProductCardMini/ProductCardMini';
import idea1 from '../../assets/idea1.png';

const InspoDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const { image, title } = location.state || {};

    return (
        <div className={styles.inspo_wrapper}>
            <img src={image} alt={title} className={styles.image} />
            <p className={styles.details}>{title}</p>
            <div className={styles.carasoul}>
                <ProductCardMini productImage={idea1} productName={'H&M Skirt'} productPrice={'2399'} />
            </div>
        </div>
    );
};

export default InspoDetail;
