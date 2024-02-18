import Slider from "react-slick";
import HeroImg1 from "../assets/Hero1.jpg";
import HeroImg2 from "../assets/Hero2.jpg";
import HeroImg3 from "../assets/Hero3.jpg";
// import SearchComponent from "./SearchComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../hero.css";

const Hero = () => {
  const carouselImages = [HeroImg1, HeroImg2, HeroImg3];

  const settings = {
    arrows: true, // Add this line to enable arrows
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen bg-gray-200">
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index} className="py-20 w-full h-full">
            <img
              src={image}
              alt={`Hero image ${index + 1}`}
              className="h-full w-full object-cover"
            />

            {/* <SearchComponent /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
