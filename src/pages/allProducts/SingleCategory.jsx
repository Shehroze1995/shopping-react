import { useDispatch } from "react-redux";
import { showByCategory } from "../../features/productsSlice/productsSlice";

// eslint-disable-next-line react/prop-types
const SingleCategory = ({ item, value, setValue, index }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(showByCategory(item));
        setValue(index);
      }}
      className={`capitalize hover:text-black border-b-2 ${
        value == index ? "border-b-blue-500" : "border-b-white"
      }`}
    >
      {item}
    </button>
  );
};

export default SingleCategory;
