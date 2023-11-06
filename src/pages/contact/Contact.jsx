import contactImg from "../../assets/contact.jpg";
import { MdMarkEmailUnread } from "react-icons/md";
import Footer from "../../components/footer/Footer";
import { FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { useEffect } from "react";
import scrollToTop from "../../components/scroll/scrollToTop";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main className="onRenderAnimate">
      <div className="relative">
        <img
          className="w-full max-h-60 object-cover"
          src={contactImg}
          alt="contact image"
        />
        <div className="w-full h-full bg-[rgba(128,128,128,0.6)] absolute top-0 left-0 flex items-center justify-center text-white text-5xl font-extrabold">
          <p>Contact</p>
        </div>
      </div>
      <div className="grid grid-cols-2 p-4 my-12 max-w-7xl m-auto max-[800px]:block">
        <section className="flex flex-col items-start gap-4 max-[800px]:mb-12">
          <h1 className="text-2xl font-extrabold text-gray-700">
            Send Us A Message
          </h1>
          <div className="relative">
            <input
              className="border-2 border-gray-300 py-2 px-8 outline-none rounded focus:border-blue-400 max-[800px]:w-full"
              placeholder="Your Email Address.."
              type="email"
              name="email"
              id="email"
            />
            <MdMarkEmailUnread className="absolute top-[50%] translate-y-[-50%] left-2 text-xl text-gray-400" />
          </div>
          <textarea
            className="border-2 border-gray-300 rounded p-4 outline-none max-w-sm focus:border-blue-400 max-[800px]:w-full"
            placeholder="How Can We Help You"
            name="message"
            id="message"
            cols="25"
            rows="5"
          ></textarea>
          <button
            className="bg-[#222222] text-white py-2 px-8 rounded font-extrabold transition-all duration-300 hover:bg-blue-500 hover:text-white"
            type="button"
          >
            SUBMIT
          </button>
        </section>
        <section className="flex flex-col gap-4">
          <article className="flex items-start gap-4 relative pl-8">
            <FaLocationArrow className="w-4 h-4 text-2xl text-gray-500 absolute top-2 left-0" />
            <div>
              <h2 className="text-xl font-extrabold text-gray-700">Address</h2>
              <p className="opacity-40">
                Ahmad Store Center 2nd floor, 000 Revolution St, Lahore,
                Pakistan PK
              </p>
            </div>
          </article>
          <article className="flex items-start gap-4 relative pl-8">
            <FiPhoneCall className="w-4 h-4 text-2xl text-gray-500 absolute top-2 left-0" />
            <div>
              <h2 className="text-xl font-extrabold text-gray-700">
                Lets Talk
              </h2>
              <p className="text-blue-500">+92 123 0000000</p>
            </div>
          </article>
          <article className="flex items-start gap-4 relative pl-8">
            <MdMarkEmailUnread className="w-4 h-4 text-2xl text-gray-500 absolute top-2 left-0" />
            <div>
              <h2 className="text-xl font-extrabold text-gray-700">
                Sale Support
              </h2>
              <p className="text-blue-500">contact@email.com</p>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
