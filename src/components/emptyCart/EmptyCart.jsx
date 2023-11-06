import { AiOutlineShopping } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { showAllProducts } from "../../features/productsSlice/productsSlice";
import { useDispatch } from "react-redux";

const EmptyCart = () => {
  const dispatch = useDispatch();
  return (
    <section className="mb-48">
      <div className="w-max m-auto flex flex-col items-center gap-6 my-8">
        <AiOutlineShopping className="text-8xl text-gray-500" />
        <h2>Your Shopping Bag is empty</h2>
      </div>
      <Link
        className="flex items-center font-extrabold text-xl w-max m-auto"
        to={`/shopping-react/allProducts/`}
        onClick={() => dispatch(showAllProducts())}
      >
        <FaAngleLeft />
        <p className="border-b-2 py-1 transition-all duration-300 hover:border-b-blue-500">
          Back to shopping
        </p>
      </Link>
    </section>
  );
};

export default EmptyCart;
