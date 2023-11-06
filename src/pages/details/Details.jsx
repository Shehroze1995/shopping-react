import { Link, useParams } from "react-router-dom";
import { showSingleProduct } from "../../features/productsSlice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allProducts } from "../../components/data/data";
import { addToCart } from "../../features/cartSlice/cartSlice";
import { toast } from "react-toastify";
import { updateAmountAndPrice } from "../../features/cartSlice/cartSlice";
import { useEffect, useState } from "react";
import scrollToTop from "../../components/scroll/scrollToTop";
import Footer from "../../components/footer/Footer";

const Details = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemAdded, setItemAdded] = useState(false);
  const { singleProduct } = useSelector((store) => store.products);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (!allProducts.some((product) => product.id == productId)) {
    navigate("*");
    return null;
  }

  dispatch(showSingleProduct(productId));

  const { id, name, img, desc, details, price, category } = singleProduct;

  return (
    <>
      <main className="grid grid-cols-2 max-w-7xl m-auto mt-8 mb-28 onRenderAnimate max-[800px]:block">
        <div className="h-[550px] max-[500px]:h-[15rem] max-[800px]:mb-8">
          <img className="h-full w-full object-contain" src={img} alt={name} />
        </div>
        <div className="flex flex-col gap-6 px-4">
          <article>
            <h1 className="text-3xl font-extrabold capitalize">{name}</h1>
            <p className="text-xl text-gray-500 my-2">${price}</p>
          </article>
          <hr className="border-gray-300" />
          <article>
            <p className="text-xl font-extrabold">Description: </p>
            <p>{desc}</p>
          </article>
          <hr className="border-gray-300" />
          <article>
            <p className="text-xl font-extrabold">Details: </p>
            {details.map((detail, index) => {
              return <p key={index}>{detail}</p>;
            })}
          </article>
          {category === "women" ||
          category === "men" ||
          category === "shoes" ? (
            <article className="flex items-center">
              <label className="mx-4 text-gray-600 text-lg" htmlFor="size">
                Size
              </label>
              <select
                className="border border-gray-400 px-2 outline-none rounded"
                name="size"
                id="size"
              >
                <option value="">Choose an option</option>
                <option value="size s">Size S</option>
                <option value="size m">Size M</option>
                <option value="size l">Size L</option>
                <option value="size xl">Size XL</option>
              </select>
            </article>
          ) : null}
          {itemAdded ? (
            <Link
              to={`/cart`}
              className="bg-[#444444] text-white text-center text-xl py-2 w-11/12 max-w-sm m-auto rounded onRenderAnimate"
            >
              See your Shopping Bag
            </Link>
          ) : null}
          <button
            disabled={itemAdded}
            onClick={() => {
              dispatch(addToCart(id));
              toast.success("Item added to Cart successfully");
              dispatch(updateAmountAndPrice());
              setItemAdded(true);
            }}
            className={`bg-[#444444] text-white text-xl py-2 w-11/12 max-w-sm m-auto rounded ${
              itemAdded && "opacity-50"
            }`}
            type="button"
          >
            {itemAdded ? "Item added" : "ADD TO SHOPPING BAG"}
          </button>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Details;
