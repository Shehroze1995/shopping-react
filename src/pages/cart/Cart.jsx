import { useSelector } from "react-redux";
import EmptyCart from "../../components/emptyCart/EmptyCart";
import SingleCartItem from "./SingleCartItem";
import { useEffect } from "react";
import scrollToTop from "../../components/scroll/scrollToTop";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  const { cart, total, subTotal, amount } = useSelector((store) => store.cart);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main className="onRenderAnimate">
      <h1 className="text-center text-3xl my-12">Shopping Bag</h1>
      {cart.length == 0 ? (
        <EmptyCart />
      ) : (
        <>
          <p className="mb-8 px-4 text-xl">
            YOU HAVE
            <span className="text-blue-800">
              {" "}
              {amount} {amount == 1 ? " ITEM " : " ITEMS "}
            </span>
            IN YOUR SHOPPING BAG
          </p>
          <div className="flex mb-32 max-[800px]:items-center max-[800px]:flex-col">
            <section>
              {cart.map((item) => {
                return <SingleCartItem key={item.id} {...item} />;
              })}
            </section>
            <section className="flex flex-col gap-4 p-4 bg-gray-300 h-max mx-4 w-full max-w-sm max-[800px]:mb-8">
              <article className="flex items-center justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-extrabold">${subTotal}</p>
              </article>
              <article className="flex justify-between items-center">
                <div className="text-gray-600">
                  <p>Shipping</p>
                  <i>Delivery in 7-10 working days</i>
                </div>
                <span className="font-extrabold">$30</span>
              </article>
              <article className="flex items-center justify-between font-extrabold">
                <p>Total</p>
                <p>${total}</p>
              </article>
              <button
                className="bg-[black] text-white py-3 rounded hover:bg-gray-800"
                type="button"
              >
                Proceed to purchase
              </button>
              <article className="bg-white my-4 p-2 grid gap-4">
                <h3 className="text-2xl font-extrabold">EASY RETURNS</h3>
                <p className="text-gray-700">
                  We provide an easy return service: just ship your items back
                  to us using the UPS return label included in your package
                  within 30 days of delivery.
                </p>
                <p className="text-gray-700">
                  For further information, visit the <u>Customer Care</u> area.
                </p>
              </article>
            </section>
          </div>
        </>
      )}
      <Footer />
    </main>
  );
};

export default Cart;
