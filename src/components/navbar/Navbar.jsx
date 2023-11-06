import { Link } from "react-router-dom";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import Shipping from "../shipping/Shipping";
import Navlinks from "../navlinks/Navlinks";
import Sidebar from "../sidebar/Sidebar";
import { toggleSidebar, closeSidebar } from "../../features/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../searchbar/Searchbar";
import {
  toggleSearchbar,
  closeSearchbar,
} from "../../features/searchbar/Searchbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
      <Shipping />
      <nav className="border-b border-gray-400 bg-white sticky top-0 z-20">
        <section className="flex items-center justify-between p-4 max-[395px]:px-2">
          <Link
            to={`/shopping-react/`}
            className="uppercase text-3xl text-red-600 font-bold transition-all duration-300 max-[389px]:text-[20p] "
          >
            brand
          </Link>
          <ul className="flex items-center gap-2">
            <Navlinks />
            <div className="flex items-center gap-1">
              <FiSearch
                onClick={() => {
                  dispatch(toggleSearchbar());
                  dispatch(closeSidebar());
                }}
                className="text-2xl mx-4 cursor-pointer transition-all duration-300 hover:text-blue-500"
              />
              <Link className="flex items-center gap-1 transition-all duration-300 hover:text-blue-500" to={`cart`}>
                <FiShoppingCart className="text-2xl" />
                <span className="text-blue-700 font-bold">{amount}</span>
              </Link>
            </div>
            <VscThreeBars
              onClick={() => {
                dispatch(toggleSidebar());
                dispatch(closeSearchbar());
              }}
              className="text-3xl mx-2 cursor-pointer min-[800px]:hidden"
            />
          </ul>
        </section>
        <Sidebar />
        <Searchbar />
      </nav>
    </>
  );
};

export default Navbar;
