import React, { ReactNode } from "react";
import "./Slide.css";
import Slider from "infinite-react-carousel";

interface SlideProps {
  children: ReactNode;
  Show: number;
  Scroll: number;
}

const Slide = ({ children, Show, Scroll }: SlideProps) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={Show} arrowsScroll={Scroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
