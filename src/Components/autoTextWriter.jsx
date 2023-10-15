import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useDispatch, useSelector } from "react-redux";
import {
  profileSlider,
  profileImages,
} from "../Redux/Features/backgroundSlider";

export const AutoTextWriter = () => {
  const { currentProfile } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    const slider = setInterval(() => {
      dispatch(profileSlider());
    }, 1 * 60 * 1000);
    return () => {
      clearInterval(slider);
    };
  }, [currentProfile]);

  return (
    <div className="w-full h-[70%] flex justify-between px-[5%] pt-[5%]">
      <div className="w-3/5 mt-40">
        <h1 className="font-medium primary-font text-5xl pb-1 text-white/80 uppercase">
          Hello👋,{" "}
        </h1>
        <h1 className="font-medium primary-font text-5xl pb-1 text-white/80 uppercase">
          My Name Is,{" "}
        </h1>
        <h2 className="font-medium secondary-font text-xl bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent uppercase">
          Ifechukwu Onyeka.
        </h2>
        <h3 className="text-[12px] font-light text-[white] secondary-font">
          <TypeAnimation
            sequence={[
              "I am 20 years old",
              2000,
              "I am a JavaScript Developer",
              2000,
              "I use JavaScript Frameworks like React",
              2000,
              "I use JavaScript Frameworks or NextJs",
              2000,
              "I enjoy styling with Tailwind CSS",
              2000,
              "I like to try out new frameworks ",
              2000,
              "That are better!",
              2000,
              "And more relevant!",
              2000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h3>
      </div>
      <div className="w-2/5 h-full flex justify-center items-start mt-[10%]">
        <figure className="w-[45%] h-[57%] rounded-full border border-white/60">
          <img
            src={profileImages[currentProfile]}
            className="w-full h-full rounded-full transition-all duration-500"
            alt={`Profile ${currentProfile}`}
          />
        </figure>
      </div>
    </div>
  );
};
