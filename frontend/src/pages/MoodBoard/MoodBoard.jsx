import {useState} from 'react';
import styles from '../MoodBoard/MoodBoard.module.css';
import { CameraIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import ProductCardMini from '../../components/ProductCardMini/ProductCardMini';
import idea1 from '../../assets/idea1.png';
import idea2 from '../../assets/idea3.png';
import Draggable from 'react-draggable';
import imglyRemoveBackground from '@imgly/background-removal'

const Topbar = ({ handleCameraClick }) => {
  return (
    <div className={styles.topbar_wrapper}>
      <button className={styles.actn_btn}><Squares2X2Icon className={styles.icon} /> Created by You </button>
      <button className={styles.actn_btn} onclick={handleCameraClick}><CameraIcon className={styles.icon} /> Use Camera </button>
    </div>
  )
}

const BottomCarosoul = () => {
  return (
    <div className={styles.carosoul_wrapper}>
      <div className={styles.header_container}>
        <h4>Selected Items</h4>
        <button className={styles.actn_btn}> Add <PlusIcon className={styles.icon} style={{ marginLeft: "0.6rem" }} /></button>
      </div>
      <div className={styles.carosoul}>
        <div className={styles.prod_containr}>
          <ProductCardMini
            id={"1"}
            productImage={idea1}
            brandName={"hnm"}
            productName={"skirt"}
            productPrice={"rs 2000"}
          />
        </div>
        <div className={styles.prod_containr}>
          <ProductCardMini
            id={"1"}
            productImage={idea1}
            brandName={"hnm"}
            productName={"skirt"}
            productPrice={"rs 2000"}
          />
        </div><div className={styles.prod_containr}>
          <ProductCardMini
            id={"1"}
            productImage={idea1}
            brandName={"hnm"}
            productName={"skirt"}
            productPrice={"rs 2000"}
          />
        </div>
      </div>
    </div>
  )
}


const Canvas = () => {
  const [items, setItems] = useState([
    { id: 1, src: idea1, x: 50, y: 50 },
    { id: 2, src: idea2, x: 150, y: 150 },
  ]);

  const handleDrag = (e, data, index) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], x: data.x, y: data.y };
    setItems(newItems);
  };

  return (
    <div className={styles.canvas_wrapper}>
      {items.map((item, index) => (
        <Draggable
          key={item.id}
          scale={1}
          position={{ x: item.x, y: item.y }}
          onStop={(e, data) => handleDrag(e, data, index)}
        >
          <div className={styles.draggable_item}>
            <img src={item.src} alt={`item-${item.id}`} className={styles.draggable_image} />
          </div>
        </Draggable>
      ))}
    </div>
  )
}

const MoodBoard = () => {
  return (
    <div className={styles.moodboard_wrapper}>
      <Topbar />
      <Canvas />
      <BottomCarosoul />
    </div>
  )
}

export default MoodBoard