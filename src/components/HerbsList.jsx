import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import herb1 from "../assets/ginko.webp";
import herb2 from "../assets/flax-seed.webp";
import herb3 from "../assets/primrose.webp";
import herb4 from "../assets/tee-tree.webp";

const HerbsList = () => {
  // Sample data for the cards
  const cardsData = [
    {
      title: "Gineko",
      content: "Read more about this Herb",
      image: herb1,
    },
    {
      title: "Flax Seed",
      content: "Read more about this Herb",
      image: herb2,
    },
    {
      title: "PrimRose",
      content: "Read more about this Herb",
      image: herb3,
    },
    {
      title: "Tee Tree",
      content: "Read more about this Herb",
      image: herb4,
    },
  ];

  // Slick settings for the carousel
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200">
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full bg-gray-200 draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-10">
            <div className="w-full lg:w-1/3">
              <div className="lg:max-w-lg text-center">
                <h1
                  className="text-2xl font-bold tracking-wide dark:text-white lg:text-4xl"
                  style={{ color: "#007a37" }}
                >
                  <span style={{ color: "#000" }}>Revolutionary </span> Herbs
                </h1>
              </div>
            </div>

            <div className="w-full">
              <Slider {...slickSettings}>
                {cardsData.map((card, index) => (
                  <Link key={index} to={"/product-details"}>
                    <div className="px-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="mb-4 w-full h-32 object-cover rounded-lg"
                        />
                        <h2 className="text-lg font-semibold mb-2">
                          {card.title}
                        </h2>
                        <p>{card.content}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbsList;
