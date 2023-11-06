import { FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#222222]">
      <div className="grid grid-cols-2  text-white px-4 pt-20 pb-12 w-full max-w-7xl m-auto max-[800px]:block">
        <section className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-4">
            <FaLocationArrow className="text-2xl text-blue-500" />
            <div>
              <p>21 Revolution Street</p>
              <p className="font-extrabold">Lahore, Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FiPhoneCall className="text-2xl text-blue-500" />
            <div>
              <p>+92 000 0000000</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdMarkEmailUnread className="text-2xl text-blue-500" />
            <div>
              <p>support@email.com</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 mt-4">
            <h2 className="text-xl font-extrabold">NEWSLETTER</h2>
            <input
              className="bg-transparent border-b border-b-gray-500 outline-none max-[800px]:w-full"
              placeholder="email@email.com"
              type="email"
              name="email"
              id="email"
            />
            <button
              className="bg-blue-500 py-2 px-6 rounded font-extrabold transition-all duration-300 hover:bg-white hover:text-black"
              type="button"
            >
              SUBSCRIBE
            </button>
          </div>
        </section>
        <section className="grid gap-4">
          <h1 className="text-3xl font-extrabold">About The Company</h1>
          <p className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            labore assumenda dicta ipsum repudiandae porro beatae culpa illum,
            placeat, quas, sapiente quo totam corrupti repellendus. Facere at
            perferendis quis odit? Quasi sunt officia dicta doloribus deserunt
            mollitia quibusdam ab est vitae! Odio sed quas alias quae quasi amet
            perferendis ad.
          </p>
          <div className="flex items-center text-2xl gap-4">
            <FaFacebookF className="text-blue-500" />
            <FaTwitter className="text-blue-300" />
            <FaLinkedinIn className="text-blue-800" />
            <FaGithub />
          </div>
        </section>
      </div>
      <div className="bg-[#222222] text-white flex flex-col items-center justify-center text-sm pb-8">
        <p>Copyright &copy; 2023 All rights reserved</p>
        <p className="flex items-center gap-1">
          Made with <AiOutlineHeart /> by <a target="_blank" href="https://github.com/Shehroze1995" rel="noreferrer">Shehroze</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
