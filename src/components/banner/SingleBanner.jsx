import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showAllProducts } from "../../features/productsSlice/productsSlice";

const SingleBanner = ({ id, img, type, season }) => {
  const [showLayer, setShowLayer] = useState(false);
  const dispatch = useDispatch();

  const displayLayer = () => {
    setShowLayer(true);
  };
  const hideLayer = () => {
    setShowLayer(false);
  };
  return (
    <Link
      onClick={() => dispatch(showAllProducts())}
      to={`allProducts`}
      onMouseOver={() => displayLayer()}
      onMouseLeave={() => hideLayer()}
      className="h-[19rem] border border-blue-300 rounded relative cursor-pointer transition-all duration-300 overflow-hidden over:scale-105"
      key={id}
    >
      <img
        className="w-full h-full object-cover"
        src={img}
        alt="banner image"
      />
      <div
        className={`absolute top-0 right-0 p-8 -z-[-2] ${
          showLayer && "text-red-500"
        }`}
      >
        <h2 className="text-2xl font-extrabold">{type}</h2>
        <p>{season}</p>
      </div>
      <span
        className={`absolute top-0 left-0 bg-[#87cfeba4] w-full h-full transition-all duration-300 ${
          showLayer ? "translate-y-" : "translate-y-[100%] invisible"
        }`}
      >
        <button
          className="bg-white py-1 px-6 text-xl rounded absolute right-[50%] translate-x-[50%] bottom-0 mb-4 font-extrabold"
          type="button"
        >
          Explore
        </button>
      </span>
    </Link>
  );
};

export default SingleBanner;
