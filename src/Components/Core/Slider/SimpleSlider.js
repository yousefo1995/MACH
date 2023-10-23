import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow } from "./Arrow";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./style.css";

const SimpleSlider = ({
  children,
  infinite = true,
  autoplay = false,
  slidesToShow = 6,

  buttonHeight = "50px",
  ButtonsDisplay = { xs: "block", sm: "block" },
  currentSlide,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,

    nextArrow: (
      <Arrow
        buttonHeight={buttonHeight}
        ButtonsDisplay={ButtonsDisplay}
        slidesToShow={slidesToShow}
        isLeft={false}
      >
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    ),
    prevArrow: (
      <Arrow buttonHeight={buttonHeight} ButtonsDisplay={ButtonsDisplay}>
        <ArrowBackIosRoundedIcon />
      </Arrow>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="slider-container">
        {children}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
