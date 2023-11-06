import { banner } from "../data/data";
import SingleBanner from "./SingleBanner";

function Banner() {
  return (
    <div className="gridBanner my-20 gap-4 p-4 items-center justify-center max-w-7xl m-auto">
      {banner.map((item) => {
        const { id, img, type, season } = item;
        return <SingleBanner key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Banner;
