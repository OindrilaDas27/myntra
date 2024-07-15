import { useState, useCallback, useRef } from 'react';
import styles from '../MoodBoard/MoodBoard.module.css';
import { CameraIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import ProductCardMini from '../../components/ProductCardMini/ProductCardMini';
import jeanBg from '../../assets/tatvaBg.png';
import hnmBg from '../../assets/wallBg.png';
import cardiBg from '../../assets/wallBg2.png';
import cardigan from '../../assets/filler.jpg';
import jean from '../../assets/tatva.jpg';
import hnmTop from '../../assets/wall_piece.png';
import Draggable from 'react-draggable';
import filler2 from '../../assets/fillerBg.png';
import filler3 from '../../assets/filler3.png';
import imglyRemoveBackground from '@imgly/background-removal'
import Webcam from 'react-webcam';

const Topbar = ({ handleCameraClick }) => {
  return (
    <div className={styles.topbar_wrapper}>
      <button className={styles.actn_btn}><Squares2X2Icon className={styles.icon} /> Created by You </button>
      <button className={styles.actn_btn} onClick={handleCameraClick}><CameraIcon className={styles.icon} /> Use Camera </button>
    </div>
  )
}

const BottomCarosoul = () => {
  const products = [
    {
      id: "1",
      productImage: hnmTop,
      productName: "LORD BALAJI AND MURUGAN BRASS IDOL",
      productPrice: "Rs. 8999.00"
    },
    {
      id: "2",
      productImage: jean,
      productName: "TATTVA Brass Godess Wall Decor",
      productPrice: "Rs. 14900"
    },
    {
      id: "3",
      productImage: cardigan,
      productName: "TATTVA wood craved wall decor",
      productPrice: "Rs. 2000"
    }
  ];

  return (
    <div className={styles.carosoul_wrapper}>
      <div className={styles.header_container}>
        <h4>Selected Items</h4>
        <button className={styles.actn_btn}> Add <PlusIcon className={styles.icon} style={{ marginLeft: "0.6rem" }} /></button>
      </div>
      <div className={styles.carosoul}>
      {products.map((product) => (
          <div key={product.id} className={styles.prod_containr}>
            <ProductCardMini
              id={product.id}
              productImage={product.productImage}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          </div>
        ))}
      </div>
    </div>
  )
}


const Canvas = ({ background }) => {
  const [items, setItems] = useState([
    { id: 1, src: hnmBg, x: 50, y: 50, height: "7rem" },
    { id: 2, src: jeanBg, x: 150, y: 150, height: "6rem" },
    { id: 3, src: cardiBg, x: 70, y: 75, height: "7rem" },
    { id: 4, src: filler3, x: 125, y: 125, height: "3rem" },
    { id: 4, src: filler2, x: 100, y: 100, height: "3rem" },
  ]);

  const handleDrag = (e, data, index) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], x: data.x, y: data.y };
    setItems(newItems);
  };

  return (
    <div className={styles.canvas_wrapper} style={{ backgroundImage: background ? `url(${background})` : 'none', backgroundSize: 'cover' }}>
      {items.map((item, index) => (
        <Draggable
          key={item.id}
          scale={1}
          position={{ x: item.x, y: item.y }}
          onStop={(e, data) => handleDrag(e, data, index)}
        >
          <div className={styles.draggable_item}>
            <img src={item.src} alt={`item-${item.id}`} className={styles.draggable_image} style={{ height: item.height}} />
          </div>
        </Draggable>
      ))}
    </div>
  )
}

const MoodBoard = () => {
  const [showWebcam, setShowWebcam] = useState(false);
  const [photo, setPhoto] = useState(null);
  const webcamRef = useRef(null);

  const handleCameraClick = () => {
    setShowWebcam(true);
    console.log("is this workiing?")
  };

  const capturePhoto = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPhoto(pictureSrc);
    setShowWebcam(false);
    console.log("is this workiing?")
  }, [webcamRef]);

  return (
    <div className={styles.moodboard_wrapper}>
      <Topbar handleCameraClick={handleCameraClick} />
      {showWebcam && (
        <div className={styles.webcam_container}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <button onClick={capturePhoto}>Capture Photo</button>
        </div>
      )}
      <Canvas background={photo} />
      <BottomCarosoul />
    </div>
  )
}

export default MoodBoard