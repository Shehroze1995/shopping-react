import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineDelete,
} from "react-icons/ai";
import {
  updateQuantity,
  updateAmountAndPrice,
  deleteItem,
} from "../../features/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SingleCartItem = ({ id, name, img, amount, price, desc }) => {
  const dispatch = useDispatch();
  return (
    <>
      <section className="flex max-[800px]:flex-col">
        <div className="">
          <img
            className="w-full h-[175px] object-contain"
            src={img}
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-2 px-6 flex-1">
          <h1 className="capitalize text-3xl text-gray-500">{name}</h1>
          <p className="font-extrabold">${price}</p>
          <p className="text-gray-500">{desc}</p>
          <div className="flex items-center gap-3">
            <p>Quantity</p>
            <button disabled={amount == 1}>
              <AiOutlineMinusSquare
                onClick={() => {
                  dispatch(updateQuantity({ id, type: "dec" }));
                  dispatch(updateAmountAndPrice());
                }}
                className={`text-2xl ${amount == 1 ? "opacity-20" : "opacity-60"}`}
              />
            </button>
            <span className="text-xl">{amount}</span>
            <button>
              <AiOutlinePlusSquare
                onClick={() => {
                  dispatch(updateQuantity({ id, type: "inc" }));
                  dispatch(updateAmountAndPrice());
                }}
                className="text-2xl opacity-60"
              />
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(deleteItem(id));
              dispatch(updateAmountAndPrice());
              toast.success("Item removed successfully");
            }}
            className="flex items-center self-end"
          >
            <AiOutlineDelete className="text-2xl" />
            <span className="text-">Remove</span>
          </button>
        </div>
      </section>
      <hr className="border-gray-400 w-11/12 max-w-6xl m-auto my-6" />
    </>
  );
};

export default SingleCartItem;
