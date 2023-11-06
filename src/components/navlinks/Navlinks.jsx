import { Link } from "react-router-dom";
import { showAllProducts } from "../../features/productsSlice/productsSlice";
import { useDispatch } from "react-redux";

const Navlinks = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 mr-4 max-[800px]:hidden">
      <Link
        onClick={() => dispatch(showAllProducts())}
        to={`allProducts`}
        className="transition-all duration-300 active:text-blue-500 hover:text-blue-500"
      >
        All Products
      </Link>
      <Link
        to={`about`}
        className="transition-all duration-300 active:text-blue-500 hover:text-blue-500"
      >
        About
      </Link>
      <Link
        to={`contact`}
        className="transition-all duration-300 active:text-blue-500 hover:text-blue-500"
      >
        Contact
      </Link>
      <Link
        to={`login`}
        className="border border-blue-500 px-6 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white"
      >
        Login
      </Link>
    </div>
  );
};

export default Navlinks;
