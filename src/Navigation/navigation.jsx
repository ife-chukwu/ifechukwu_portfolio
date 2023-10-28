import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { Modal } from "../modal";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [active, setActive] = useState(0);

  const handleActive = (item) => {
    setActive(item);
  };

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((pre) => !pre);
  };

  return (
    <div
      className={`${
        scrolled ? "bg-black/70 shadow-xl shadow-white/10" : ""
      }  fixed w-full h-[10%] lg:h-[10%] z-40`}
    >
      <div className="w-full h-full flex  pl-5 lg:items-center justify-between lg:px-[3%]">
        <h1 className="text-white secondary-font md:text-xl w-[15%] flex items-center">
          IFECH
          <span className="bg-gradient-to-tr from-[white] via-[#f1eca1] to-[#fad73b] bg-clip-text text-transparent">
            UKWU
          </span>
        </h1>

        {menu ? (
          <button onClick={handleMenu}>
            <Modal />
          </button>
        ) : (
          ""
        )}

        <button
          className={`${
            menu ? "hidden" : ""
          } lg:hidden w-2/5 flex justify-end pr-5 text-white/80  items-center text-4xl`}
          onClick={handleMenu}
        >
          <IoIosMenu />
        </button>

        <div
          className={` ${
            menu
              ? "flex-col backdrop-blur-md  lg:backdrop-blur-0 md:w-3/5 shadow-2xl shadow-white/50"
              : "hidden lg:flex"
          } flex  lg:flex-row  lg:items-center  lg:h-full text-[13px] font-light   lg:w-[85%] h-screen  w-4/5 md:w-2/5 `}
        >
          <button
            className="w-full h-20 flex justify-end  pr-5 lg:pl-5 text-white py-2  items-center text-3xl lg:hidden"
            onClick={handleMenu}
          >
            <HiOutlineXMark />
          </button>

          <ul className="flex h-auto lg:flex-row flex-col lg:justify-center lg:text-[12px] lg:pt-0 text-sm md:text-sm  lg:gap-8 font-medium lg:w-[70%] secondary-fon uppercase ">
            <HashLink
              to="#home"
              smooth
              className={`${
                active === 0
                  ? "bg-black/50 lg:bg-transparent border-t lg:border-t-0 lg:backdrop-blur-0 border-b border-yellow-100   backdrop-blur-sm   w-full"
                  : ""
              } lg:w-[10%] flex justify-center items-center transition duration-700`}
              onClick={() => handleActive(0)}
            >
              <li
                className={`
                  cursor-pointer lg:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 lg:h-auto flex items-center justify-center `}
              >
                Home
              </li>
            </HashLink>

            <HashLink
              to="#about"
              smooth
              className={`${
                active === 1
                  ? "bg-black/50 lg:bg-transparent   backdrop-blur-sm lg:border-t-0 lg:backdrop-blur-0 border-t border-b border-yellow-100  w-full transition duration-500"
                  : ""
              } lg:w-[10%] h-full flex justify-center items-center `}
              onClick={() => handleActive(1)}
            >
              <li
                className={`
                  cursor-pointer lg:hover:text-[#c9bc4d] hover:font-light transition duration-300  h-20 lg:h-auto flex items-center justify-center `}
              >
                About
              </li>
            </HashLink>

            <HashLink
              to="#tech-stack"
              smooth
              className={`${
                active === 2
                  ? "bg-black/50 lg:bg-transparent  backdrop-blur-sm lg:border-t-0 lg:backdrop-blur-0 border-t border-b border-yellow-100  w-full transition duration-500"
                  : ""
              } lg:w-[20%] h-full flex justify-center items-center `}
              onClick={() => handleActive(2)}
            >
              <li
                className={`
                  cursor-pointer lg:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 lg:h-auto flex items-center justify-center `}
              >
                Tech Stack
              </li>
            </HashLink>
            <HashLink
              to="#projects"
              smooth
              className={`${
                active === 3
                  ? "bg-black/50 lg:bg-transparent   backdrop-blur-sm lg:border-t-0 lg:backdrop-blur-0 border-t border-b border-yellow-100 w-full transition duration-500"
                  : ""
              } lg:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(3)}
            >
              <li
                className={`
                  cursor-pointer lg:hover:text-[#c9bc4d] hover:font-light transition duration-300  h-20 lg:h-auto flex items-center justify-center `}
              >
                Projects
              </li>
            </HashLink>
            <HashLink
              to="#contact"
              smooth
              className={`${
                active === 4
                  ? "bg-black/50 lg:bg-transparent  backdrop-blur-sm lg:border-t-0 lg:backdrop-blur-0 border-t border-b border-yellow-100 w-full transition duration-500"
                  : ""
              } lg:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(4)}
            >
              <li
                className={`
                  cursor-pointer lg:hover:text-[#c9bc4d] hover:font-light transition duration-300  h-20 lg:h-auto flex items-center justify-center `}
              >
                Contact
              </li>
            </HashLink>
          </ul>

          <p className="flex justify-center mt-10 md:mt-10  text-lg lg:hidden">
            Socials
          </p>

          <div className="flex h-full  w-full items-center justify-center lg:w-[30%] ">
            <div className="lg:flex lg:w-full lg:h-full px-5 lg:px-0  items-center justify-center lg:gap-7 flex gap-[10%] sm:gap-[15%]  md:gap-[17%] shrink w-full h-full">
              <Link
                to="https://github.com/ife-chukwu"
                className="lg:w-[10%] lg:h-2/5 h-10 w-10  hover:translate-y-1 transition duration-300"
              >
                <figcaption className="lg:hidden"> GitHub</figcaption>
                <img
                  src="/icons8-github-48 (1).png"
                  className="w-full h-full"
                />
              </Link>
              <Link
                to="https://twitter.com/ifee43080995"
                className="lg:w-[11%] lg:h-2/5 h-10 w-10 hover:translate-y-1 transition duration-300"
              >
                <figcaption className="lg:hidden"> Twitter</figcaption>

                <img src="/icons8-twitter-48.png" className="w-full h-full" />
              </Link>
              <Link
                to=" https://instagram.com/dopeskiez?igshid=ZDc4ODBmNjlmNQ=="
                className="lg:w-[11%] lg:h-2/5 h-10 w-10 hover:translate-y-1 transition duration-300"
              >
                <figcaption className="lg:hidden"> Instagram</figcaption>

                <img src="/icons8-instagram-48.png" className="w-full h-full" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ifechukwu-onyeka-4a2ba525a"
                className="lg:w-[11%] flex flex-col lg:h-[35%] h-10 w-10 hover:translate-y-1 transition duration-300"
              >
                <figcaption className="lg:hidden"> Linkedin</figcaption>
                <img src="/icons8-linkedin-50.png" className="w-full h-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
