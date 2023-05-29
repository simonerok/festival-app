import React, { useState } from 'react';
import FestivalPage from '@/pages/map';
import styles from "@/styles/Home.module.css";


const FestivalMap = ({onTeltClick}) => {
    const [hoveredImg, setHoveredImg] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredImg(index);
    };
    
    const handleMouseOut = () => {
        setHoveredImg(null);
    };

  
    const getImageStyle = (index) => {
        const scale = hoveredImg === index ? 1.2 : 1;
        return {
            position: 'absolute',
            width: '100%',
            maxWidth: '180px',
            transform: `scale(${scale})`,
        };
    };


  return (
    <article className={styles.mapDiv} style={{ position: 'relative', height: '100%', }}>
      <img
        src="/telt1.svg"
        alt="Telt1"
        style={{
            ...getImageStyle(1),
          top: '4%',
          left: '3%',
        }}
        onMouseOver={() => handleMouseOver(1)}
        onMouseOut={handleMouseOut}
        onClick={() => onTeltClick('Telt1')}
      />

      <img
        src="/telt2.svg"
        alt="Telt2"
        style={{
            ...getImageStyle(2),
          top: '8%',
          left: '57%',
           
        }}
        onMouseOver={() => handleMouseOver(2)}
        onMouseOut={handleMouseOut}
        onClick={() => onTeltClick('Telt2')}
      />

      <img
        src="/telt3.svg"
        alt="Telt3"
        style={{
            ...getImageStyle(3),
          top: '37%',
          left: '63%',
          
        }}
        onMouseOver={() => handleMouseOver(3)}
        onMouseOut={handleMouseOut}
        onClick={() => onTeltClick('Telt3')}
      />  

     
    </article>



  );
};



export default FestivalMap;