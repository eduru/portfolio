import React from "react";
import "./Slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2> Projects:</h2>
      </div>
      <Carousel
        plugins={["arrows", "infinite", "centered"]}
        slidesPerPage={3}
        animationSpeed={200}
        offset={150}
        itemWidth={400}
        slides={Slides}
      />
      {/* <Carousel plugins={["arrows"]}>
          <img src="https://duckduckgo.com/i/733b586c.png" />
          <img src="https://duckduckgo.com/i/733b586c.png" />
          <img src="https://duckduckgo.com/i/733b586c.png" />
        </Carousel> */}
    </div>
  );
};

export default Slider;
