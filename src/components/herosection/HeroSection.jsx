import { useEffect, useState } from "react";
import { images } from "../data/data";
import { Link } from "react-router-dom";
import { showAllProducts } from "../../features/productsSlice/productsSlice";
import { useDispatch } from "react-redux";

const HeroSection = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const nextSlide = () => {
    if (value === images.length - 1) setValue(0);
    else setValue(value + 1);
  };

  const prevSlide = () => {
    if (value === 0) setValue(images.length - 1);
    else setValue(value - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <main className="relative w-full h-[30rem] overflow-hidden max-w-7xl m-auto onRenderAnimate max-[800px]:h-[15rem]">
      {images.map((image, index) => {
        const { src, heading, type } = image;
        let position = "nextSlide";
        if (index === value) {
          position = "currentSlide";
        }
        if ((index === images.length - 1 && value === 0) || index < value) {
          position = "prevSlide";
        }
        return (
          <div key={index} className="absolute top-0 left-0 w-full h-full">
            <img
              className={`w-full h-full object-contain transition-all duration-500 ${position}`}
              src={src}
              alt="image"
            />
            <h1
              className={`absolute top-[20%] right-[15%] text-3xl font-extrabold transition-all duration-500 z-[1] ${position} max-[800px]:text-xl max-[800px]:right-[5%] max-[500px]:text-sm max-[300px]:text-xs`}
            >
              {heading}
            </h1>
            <h2
              className={`absolute top-[30%] right-[15%] text-4xl text-gray-500 transition-all duration-500 z-[1] max-[800px]:text-xl max-[800px]:right-[5%] max-[500px]:text-sm max-[300px]:text-xs ${position}`}
            >
              {type}
            </h2>

            <Link
              onClick={() => dispatch(showAllProducts())}
              to={`allProducts`}
              className={`absolute top-[50%] right-[15%] bg-blue-500 py-2 px-6 rounded text-white text-xl font-extrabold transition-all duration-500 z-[1] max-[800px]:top-[60%] max-[800px]:right-[5%] max-[800px]:px-4 max-[800px]:text-sm ${position}`}
              type="button"
            >
              SHOW NOW
            </Link>
          </div>
        );
      })}
      <button
        onClick={() => nextSlide()}
        className="text-4xl font-extrabold absolute top-[50%] translate-y-[-50%] right-2"
        type="button"
      >
        &gt;
      </button>
      <button
        onClick={() => prevSlide()}
        className="text-4xl font-extrabold absolute top-[50%] translate-y-[-50%] left-2 rotate-180"
        type="button"
      >
        &gt;
      </button>
    </main>
  );
};

export default HeroSection;
