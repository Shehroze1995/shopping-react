import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const Searchbar = () => {
  const { isSearchbarOpen } = useSelector((store) => store.searchbar);

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-gray-400 transition-all duration-300 ${
        isSearchbarOpen ? "max-h-16" : " max-h-0"
      }`}
    >
      <div className="relative w-11/12 max-w-2xl my-3">
        <FiSearch className="absolute left-2 top-[50%] translate-y-[-50%] text-2xl text-gray-400" />
        <input
          className="w-full border-2 rounded-xl py-2 pl-10 pr-2 outline-none focus:border-blue-500"
          type="search"
          name="search"
          id="search"
          placeholder="search here.."
        />
      </div>
    </div>
  );
};

export default Searchbar;
