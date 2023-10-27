import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slider } from "./Redux/Features/backgroundSlider";
import { images } from "./Redux/Features/backgroundSlider";
export const ImageSlider = () => {
  const dispatch = useDispatch();

  const { currentIndex } = useSelector((state) => state.slider);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(slider());
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div
      className="w-full flex h-full
  "
    >
      <div className="bg-[url('https://wallpapers.com/images/hd/buildings-and-city-lights-pixel-art-38iglbm66jgrq50h.webp')] ">
        <div className="w-full h-full bg-gradient-to-tr from-black via-black/40 to-black/80 fixed">
          {images.map((imageURL, index) => {
            return (
              <div
                key={index}
                className={`slide transform transition-transform duration-500 bg-left-top md:bg-center mix-blend-overlay ${
                  index === currentIndex
                    ? "translate-x-0"
                    : "flex -translate-x-full"
                } `}
                style={{ backgroundImage: `url(${imageURL})` }}
              >
                <div className="w-full h-full flex justify-center transition duration-500">
                  <div className="h-full w-[20%] parent1 bg-transparent items-end hover:items-start flex justify-center">
                    <div className="container1 mix-blend-overlay	bg-black/5"></div>
                  </div>
                  <div className="h-full w-[30%] parent2 bg-transparent items-center flex justify-center">
                    <div className="container2 mix-blend-overlay	bg-black/5"></div>
                  </div>
                  <div className="h-full w-[50%] parent3 hover:w-[20%] bg-transparent items-start flex justify-center">
                    <div className="container3 mix-blend-overlay	bg-black/5"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
