import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../features/sidebar/Sidebar";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSideBarOpen } = useSelector((store) => store.sidebar);
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ${
        isSideBarOpen ? "max-h-60" : "max-h-0 invisible"
      }`}
    >
      <aside className="flex flex-col items-start gap-3 p-4 bg-blue-500 text-white">
        <Link onClick={() => dispatch(closeSidebar())} to={`allProducts`}>
          All Products
        </Link>
        <Link onClick={() => dispatch(closeSidebar())} to={`login`}>
          Login
        </Link>
        <Link onClick={() => dispatch(closeSidebar())} to={`about`}>
          About Us
        </Link>
        <Link onClick={() => dispatch(closeSidebar())} to={`contact`}>
          Contact
        </Link>
      </aside>
      <button
        className="bg-[#222222] text-white w-full text-left px-4 py-1"
        type="button"
      >
        Help & FAQs
      </button>
    </div>
  );
};

export default Sidebar;
