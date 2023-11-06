import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({ id, name, img, price }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const showDetails = () => {
    setIsDetailsVisible(true);
  };
  const hideDetails = () => {
    setIsDetailsVisible(false);
  };

  return (
    <div
      onMouseOver={() => showDetails()}
      onMouseLeave={() => hideDetails()}
      className="boxShadow relative pb-4 md:pb-0 onRenderAnimate"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-96 object-contain transition-all duration-700 hover:scale-110 max-[500px]:h-[15rem]"
          src={img}
          alt={name}
        />
        <Link
          to={`/shopping-react/allProducts/${id}`}
          className={`bg-blue-500 text-white py-2 px-8 rounded-2xl text-xl absolute bottom-3 left-[50%] translate-x-[-50%] transition-all duration-300 ${
            isDetailsVisible ? "translate-y-0" : "translate-y-[150%] invisible"
          } max-[800px]:hidden`}
        >
          Details
        </Link>
      </div>
      <div className="px-4 py-10 flex flex-col gap-4">
        <h2 className="capitalize font-extrabold">{name}</h2>
        <p className="text-gray-600">${price}</p>
      </div>
      <Link
        to={`/shopping-react/allProducts/${id}`}
        className="bg-blue-500 w-11/12 py-2 text-white text-center absolute bottom-0 left-[50%] translate-x-[-50%] min-[800px]:hidden"
      >
        Details
      </Link>
    </div>
  );
};

export default SingleProduct;
