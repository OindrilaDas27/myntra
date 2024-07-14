import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './InspoDetail.module.css';
import ProductCardMini from '../../components/ProductCardMini/ProductCardMini';
import hnmprod from '../../assets/hmgoepprod.jpeg';
import hnmprod1 from '../../assets/hmgoepprod1.jpeg';
import mango from '../../assets/bag.jpg';
import top from '../../assets/top.jpg';

const InspoDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const { image, title } = location.state || {};
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => setShowFullText(!showFullText);

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return `${text.substring(0, length)}...`;
    };

    const displayedText = showFullText ? title : truncateText(title, 100);

    return (
        <div className={styles.inspo_wrapper}>
            <img src={image} alt={title} className={styles.image} />
            <p className={styles.details}>
                {displayedText}
                {title.length > 100 && (
                    <span onClick={toggleText} className={styles.read_more}>
                        {showFullText ? ' Show less' : ' Read more'}
                    </span>
                )}
            </p>
            <div className={styles.carasoul}>
                <div className={styles.carasoul_content}>
                    <ProductCardMini productImage={hnmprod} productName={'H&M Linen-blend trousers'} productPrice={'₹ 1,609.00'} showButton={true} />
                </div>
                <div className={styles.carasoul_content}>
                    <ProductCardMini productImage={hnmprod1} productName={'H&M Double-breasted blazer'} productPrice={'₹ 3,999.00'} showButton={true} />
                </div>
                <div className={styles.carasoul_content}>
                    <ProductCardMini productImage={mango} productName={'MANGO Handheld Bag'} productPrice={'₹ 2690'} showButton={true} />
                </div>
                <div className={styles.carasoul_content}>
                    <ProductCardMini productImage={top} productName={'SAUNGKUAI V Neck Tank Top'} productPrice={'₹ '} showButton={true} />
                </div>
            </div>
        </div>
    );
};

export default InspoDetail;
