import aboutImg from "../../assets/about.png";
import storyImg from "../../assets/about-1.png";
import missionImg from "../../assets/about-2.png";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import scrollToTop from "../../components/scroll/scrollToTop";

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="onRenderAnimate">
      <div className="relative">
        <img
          className="max-h-60 object-cover w-full"
          src={aboutImg}
          alt="about image"
        />
        <div className="w-full h-full bg-[rgba(128,128,128,0.8)] absolute top-0 left-0 flex items-center justify-center text-white text-5xl font-extrabold">
          <p>About</p>
        </div>
      </div>
      <div className="p-8 grid grid-cols-2 max-w-7xl m-auto max-[800px]:grid-cols-1">
        <div>
          <h1 className="text-2xl font-extrabold mb-2">Our Story</h1>
          <p className="opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            quibusdam deserunt quidem ipsam beatae in vitae aperiam quasi minus
            sed amet corrupti reiciendis porro itaque, repellendus quo dolorum
            velit tenetur pariatur non a deleniti error perferendis. Ipsam
            accusamus deserunt sint quae quisquam cupiditate molestiae. Quaerat
            amet tempore adipisci aspernatur aperiam? <br /> <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dignissimos accusantium
            nesciunt earum molestiae consectetur doloremque asperiores mollitia
            officia reiciendis hic fugit eligendi ex, magni ab eaque omnis
            temporibus ea? Consectetur, ipsum repellendus perferendis maiores
            repellat voluptatum, ab aperiam impedit in, perspiciatis vel
            molestiae inventore fugit. Quisquam eos cumque nobis reprehenderit
            maxime mollitia, natus porro dolores minus atque quam sunt numquam
            facilis placeat, soluta nisi! Dolores tempora repudiandae sunt
            architecto dolor natus non alias, laboriosam consequuntur quos, ipsa
            aspernatur saepe est sequi officia recusandae quas corrupti nobis
            soluta blanditiis voluptates quod expedita! Porro aperiam quod nemo
            fugit laboriosam? Delectus, labore. Adipisci.
          </p>
        </div>
        <div>
          <img
            className="w-full object-cover"
            src={storyImg}
            alt="story image"
          />
        </div>
      </div>
      <div className="p-8 grid grid-cols-2 max-w-7xl m-auto max-[800px]:flex max-[800px]:flex-col-reverse">
        <div>
          <img className="" src={missionImg} alt="mission image" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold mb-2">Our Mission</h1>
          <p className="opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            quibusdam deserunt quidem ipsam beatae in vitae aperiam quasi minus
            sed amet corrupti reiciendis porro itaque, repellendus quo dolorum
            velit tenetur pariatur non a deleniti error perferendis. Ipsam
            accusamus deserunt sint quae quisquam cupiditate molestiae. Quaerat
            amet tempore adipisci aspernatur aperiam? <br /> <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dignissimos accusantium
            nesciunt earum molestiae consectetur doloremque asperiores mollitia
            officia reiciendis hic fugit eligendi ex, magni ab eaque omnis
            temporibus ea? Consectetur, ipsum repellendus perferendis maiores
            repellat voluptatum, ab aperiam impedit in, perspiciatis vel
            molestiae inventore fugit.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
