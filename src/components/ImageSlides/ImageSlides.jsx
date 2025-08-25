import React, { useEffect, useState } from "react";
import Style from "./ImageSlides.module.css";
import Img1 from '../../assets/ImageSlides/1.jpg'
import Img2 from '../../assets/ImageSlides/2.jpg'
import Img3 from '../../assets/ImageSlides/3.jpg'
import Img4 from '../../assets/ImageSlides/4.jpg'


export default function ImageSlides() {
  const images = [
  Img1,Img2,Img3,Img4
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevImg = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImg = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={Style.slidesWrap}>
      <img src={images[index]} alt="slides" />
      <div className={Style.buttonWrap}>
        <button onClick={prevImg}>Prev</button>
        <button onClick={nextImg}>Next</button>
      </div>
      <h1>{index + 1}</h1>
    </div>
  );
}
