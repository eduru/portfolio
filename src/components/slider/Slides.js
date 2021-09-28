import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://cdn.pixabay.com/photo/2014/06/21/20/09/violin-374096_960_720.jpg",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/01/27/22/50/piano-3112410_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    src: "https://cdn.pixabay.com/photo/2013/02/25/22/08/clarinet-86157_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.src} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
