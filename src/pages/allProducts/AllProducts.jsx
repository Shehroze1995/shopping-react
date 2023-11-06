import SingleCategory from "./SingleCategory";
import SingleProduct from "./SingleProduct";
import scrollToTop from "../../components/scroll/scrollToTop";
import { useSelector, useDispatch } from "react-redux";
import { showAllProducts } from "../../features/productsSlice/productsSlice";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { products, categories } = useSelector((store) => store.products);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 my-4 px-4 text-blue-800">
        <Link
          className={`border-b-2 ${value == null ? "border-b-blue-500" : "border-b-white"} hover:text-black `}
          onClick={() => {
            dispatch(showAllProducts());
            setValue(null);
          }}
        >
          All Products
        </Link>
        {categories.map((item, index) => {
          return (
            <SingleCategory
              key={index}
              item={item}
              value={value}
              setValue={setValue}
              index={index}
            />
          );
        })}
      </nav>
      <section className="gridBanner gap-x-6 gap-y-20 max-w-7xl m-auto my-8 px-4 transition-all duration-500 onRenderAnimate">
        {products.map((item) => {
          return <SingleProduct key={item.id} {...item} />;
        })}
      </section>
      <Footer />
    </main>
  );
};

export default AllProducts;
