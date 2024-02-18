import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import condition1 from "../assets/condition1.jpg";
import condition2 from "../assets/condition2.jpg";
import condition3 from "../assets/condition3.jpg";
import condition4 from "../assets/condition4.jpg";

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Set to 3 for three columns
    slidesToScroll: 1,

    dots: false,
    // Add any other settings you need
  };
  const conditionImages = [condition1, condition2, condition3, condition4];

  return (
    <div className="container  items-center">
      <Slider {...settings} className="flex justify-between">
        {conditionImages.map((image, index) => (
          <div key={index} className="w-1/3 p-2">
            <img src={image} alt="Slide 1" className="w-4/5 h-4/5 pl-2" />
          </div>
        ))}

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

function CallToAction() {
  const sectionStyle = {
    backgroundColor: "##FFF",
  };

  return (
    <section
      style={sectionStyle}
      className="text-white py-16 px-4 mx-auto items-center justify-center"
    >
      <div className="container mx-auto">
        {/* Add the Carousel component here */}
        <Carousel />
      </div>
    </section>
  );
}

export default CallToAction;
