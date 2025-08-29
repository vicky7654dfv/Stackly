import React from 'react'
import Style from './ServiceGrid.module.css'
import Img1 from '../../assets/ServiceGrid/1.jpg'
import Img2 from '../../assets/ServiceGrid/2.jpg'
import Img3 from '../../assets/ServiceGrid/3.jpg'
import Img4 from '../../assets/ServiceGrid/4.jpg'
import Img5 from '../../assets/ServiceGrid/5.jpg'
import Img6 from '../../assets/ServiceGrid/6.jpg'
import Img7 from '../../assets/ServiceGrid/7.jpg'
import Img8 from '../../assets/ServiceGrid/8.jpg'
import Img9 from '../../assets/ServiceGrid/9.jpg'

export default function ServiceGrid() {

const images = [
    { src: Img1, name: "Web Application Development" },
    { src: Img2, name: "Digital Marketing" },
    { src: Img3, name: "Mobile Application Developments" },
    { src: Img4, name: "Product & Branding Design" },
    { src: Img5, name: "AI and Automation" },
    { src: Img6, name: "Data and Content Management" },
    { src: Img7, name: "Data and Insights" },
    { src: Img8, name: "Online Form Filling" },
    { src: Img9, name: "Voice Process" },
  ];

  return (
    <div className={Style.gridWrap}>
        {images.map((item,i)=>(
            <div className={Style.gridItem} key={i}>
                <img src={item.src} alt="pic" />
                <p className={Style.imgName}>{item.name}</p>
            </div>
        ))}
    </div>
  )
}
