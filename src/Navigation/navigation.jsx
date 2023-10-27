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
        scrolled
          ? "md:bg-black/50 md:backdrop-blur-sm duration-1000 transition-all"
          : "md:bg-transparent"
      } fixed w-full h-[10%] z-40 bg-black/60 `}
    >
      <div className="w-full h-full flex  pl-5 md:items-center justify-between md:px-[5%]">
        <h1 className="text-white text-2xl w-[15%] flex items-center">
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
          } md:hidden w-2/5 flex justify-end pr-5 text-white/80  items-center text-4xl`}
          onClick={handleMenu}
        >
          <IoIosMenu />
        </button>

        <div
          className={`flex  md:flex-row  md:items-center md:h-full text-[13px] font-light  ${
            menu
              ? "flex-col backdrop-blur-md md:backdrop-blur-0 "
              : "hidden md:flex"
          }  md:w-[85%] w-4/5 top-0 left-0`}
        >
          <button
            className="w-full h-full flex justify-end  pr-2 md:pl-5 text-white py-2  items-center text-3xl md:hidden"
            onClick={handleMenu}
          >
            <HiOutlineXMark />
          </button>

          <ul className="flex h-auto md:flex-row flex-col md:justify-center md:pt-0 text-[12px]  md:gap-8 font-medium md:w-[70%] secondary-font uppercase">
            <HashLink
              to="#home"
              smooth
              className={`${
                active === 0
                  ? "bg-black/50 md:bg-transparent border-t md:border-t-0 md:backdrop-blur-0 border-b border-yellow-100   backdrop-blur-sm   w-full"
                  : ""
              } md:w-[14%] flex justify-center items-center transition duration-700`}
              onClick={() => handleActive(0)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 md:h-auto flex items-center justify-center `}
              >
                Home
              </li>
            </HashLink>

            <HashLink
              to="#about"
              smooth
              className={`${
                active === 1
                  ? "bg-black/50 md:bg-transparent   backdrop-blur-sm md:border-t-0 md:backdrop-blur-0 border-t border-b border-yellow-100  w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(1)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300  h-20 md:h-auto flex items-center justify-center `}
              >
                About
              </li>
            </HashLink>

            <HashLink
              to="#tech-stack"
              smooth
              className={`${
                active === 2
                  ? "bg-black/50 md:bg-transparent  backdrop-blur-sm md:border-t-0 md:backdrop-blur-0 border-t border-b border-yellow-100  w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(2)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 md:h-auto flex items-center justify-center `}
              >
                Tech Stack
              </li>
            </HashLink>
            <HashLink
              to="#projects"
              smooth
              className={`${
                active === 3
                  ? "bg-black/50 md:bg-transparent   backdrop-blur-sm md:border-t-0 md:backdrop-blur-0 border-t border-b border-yellow-100 w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(3)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300  h-20 md:h-auto flex items-center justify-center `}
              >
                Projects
              </li>
            </HashLink>
            <HashLink
              to="#contact"
              smooth
              className={`${
                active === 4
                  ? "bg-black/50 md:bg-transparent  backdrop-blur-sm md:border-t-0 md:backdrop-blur-0 border-t border-b border-yellow-100 w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(4)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300  h-20 md:h-auto flex items-center justify-center `}
              >
                Contact
              </li>
            </HashLink>
          </ul>

          <p className="flex justify-center mt-10 mb-5 text-lg md:hidden">
            Socials
          </p>

          <div className="flex  w-full items-center justify-center md:w-[30%] ">
            <div className="md:flex md:w-full px-5 md:px-0  items-center justify-center md:gap-7 grid grid-cols-2 grid-flow-col-dense gap-10 shrink">
              <Link
                to="https://github.com/ife-chukwu"
                className="md:w-[11%] md:h-[10%] h-10 w-10  hover:translate-y-1 transition duration-300"
              >
                <figcaption className="md:hidden"> GitHub</figcaption>
                <img
                  src="/icons8-github-48 (1).png"
                  className="w-full h-full"
                />
              </Link>
              <Link
                to="https://twitter.com/ifee43080995"
                className="md:w-[11%] md:h-[10%] h-10 w-10 hover:translate-y-1 transition duration-300"
              >
                <figcaption className="md:hidden"> Twitter</figcaption>

                <img src="/icons8-twitter-48.png" className="w-full h-full" />
              </Link>
              <Link
                to=" https://instagram.com/dopeskiez?igshid=ZDc4ODBmNjlmNQ=="
                className="md:w-[11%] md:h-[10%] h-10 w-10 hover:translate-y-1 transition duration-300"
              >
                <figcaption className="md:hidden"> Instagram</figcaption>

                <img src="/icons8-instagram-48.png" className="w-full h-full" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ifechukwu-onyeka-4a2ba525a"
                className="md:w-[11%] flex flex-col md:h-[10%] h-10 w-10 hover:translate-y-1 transition duration-300"
              >
                <figcaption className="md:hidden"> Linkedin</figcaption>
                <img src="/icons8-linkedin-50.png" className="w-full h-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
