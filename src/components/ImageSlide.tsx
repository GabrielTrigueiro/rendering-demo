"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img alt="img1" src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img alt="img2" src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img alt="img3" src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img alt="img4" src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
