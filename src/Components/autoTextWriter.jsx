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
    <>
      <div className="w-full h-[70%] hidden md:flex justify-between px-[5%] pt-[5%]">
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
          <h3 className="text-sm md:text-md  font-light text-[white] uppercase">
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
        <div className="w-2/5 h-full flex justify-center items-start md:mt-[15%] lg:mt-[7%]">
          <figure className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] rounded-full border border-white/60">
            <img
              src={profileImages[currentProfile]}
              className="w-full h-full rounded-full transition-all duration-500"
              alt={`Profile ${currentProfile}`}
            />
          </figure>
        </div>
      </div>
      <div className="w-full flex flex-col px-[5%] pt-[5%] md:hidden">
        <div className="w-full h-full flex justify-start items-start mt-20 md:mt-[10%]">
          <figure className="md:w-[45%] md:h-[57%] h-40 w-40 rounded-full border border-white/60">
            <img
              src={profileImages[currentProfile]}
              className="w-full h-full rounded-full transition-all duration-500"
              alt={`Profile ${currentProfile}`}
            />
          </figure>
        </div>

        <div className="w-full mt-10">
          <h1 className="font-medium primary-font text-3xl pb-1 text-white/80 uppercase">
            Hello👋,{" "}
          </h1>
          <h1 className="font-medium primary-font text-3xl pb-1 text-white/80 uppercase">
            My Name Is,{" "}
          </h1>
          <h2 className="font-medium secondary-font text-md bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent uppercase">
            Ifechukwu Onyeka.
          </h2>
          <h3 className="md:text-[12px] text-md font-light text-[white] md:secondary-font">
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
      </div>
    </>
  );
};
