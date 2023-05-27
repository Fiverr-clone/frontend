import React, { ReactNode } from "react";
import "./Slide.css";
import Slider from "infinite-react-carousel";

interface SlideProps {
	children: ReactNode;
	slidesToShow: number;
	arrowsScroll: number;
}

const Slide = ({ children, slidesToShow, arrowsScroll }: SlideProps) => {
	return (
		<div className="slide">
			<div className="container">
				<Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
					{children}
				</Slider>
			</div>
		</div>
	);
};

export default Slide;
