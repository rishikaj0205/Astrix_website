import React from 'react'
import coll from './collection.module.css'
import winterImg from './images/single-image-2.jpg';
import { useNavigate } from 'react-router-dom';
const Collection = () => {
  const navigate = useNavigate();
  return (
    <div className={coll.wrapper}>
      <div className={coll.container}>
        
        <div className={coll.image}>
  <img src={winterImg} alt="Winter Collection" />
</div>
        <div className={coll.content}>
          <h3>CLASSIC WINTER COLLECTION</h3>
          <p>
            Our Classic Winter Collection blends timeless elegance with modern comfort.
            Designed with rich fabrics, warm textures and sophisticated silhouettes,
            each piece is crafted to keep you stylish through the cold season.
          </p>
          <button onClick={()=>navigate('/shop')}>Shop Collection</button>
        </div>

      </div>
    </div>
  )
}

export default Collection