import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import condition1 from "../assets/condition1.jpg";
import condition2 from "../assets/condition2.jpg";
import condition3 from "../assets/condition3.jpg";
import condition4 from "../assets/condition4.jpg";

// Define the Carousel component
const Carousel = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

// PhotoProps interface definition
const PhotoCard = ({ imageSrc, title, description, date, readTime }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-4">
      <div className="relative">
        <Link to="/product-details">
          <img className="w-full rounded-md" src={imageSrc} alt={title} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </Link>
      </div>
      <div className="px-6 py-4">
        <Link
          to="/product-details"
          className="font-semibold mx-2 text-2xl inline-block transition duration-500 ease-in-out items-center"
        >
          {title}
        </Link>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
          {readTime && <span>{readTime}</span>}
        </span>
      </div>
    </div>
  );
};

// ConditionsList component definition
const CondtionsList = () => {
  return (
    <section className="bg-gray-200">
      <div className="lg:max-w-lg text-center place-items-center mx-auto my-10">
        <h1
          className="text-2xl font-bold tracking-wide dark:text-white lg:text-4xl"
          style={{ color: "#007a37" }}
        >
          <span style={{ color: "#000" }}>Choose Herbs By </span> Conditions
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <Carousel>
          <PhotoCard imageSrc={condition1} title="Diabetics Treatments" />
          <PhotoCard imageSrc={condition2} title="Digestion Treatments" />
          <PhotoCard imageSrc={condition3} title="Kidney Stone Treatments" />
          <PhotoCard imageSrc={condition4} title="Migrane Treatments" />
        </Carousel>
      </div>
    </section>
  );
};

export default CondtionsList;
