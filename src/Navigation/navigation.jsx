import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

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
          ? "bg-black/50 backdrop-blur-sm duration-1000 transition-all"
          : ""
      } fixed w-full h-[10%] z-40 `}
    >
      <div className="w-full h-full flex md:items-center justify-between md:px-[5%]">
        <h1 className="text-white text-2xl w-[15%]">
          IFECH
          <span className="bg-gradient-to-tr from-[white] via-[#f1eca1] to-[#fad73b] bg-clip-text text-transparent">
            UKWU
          </span>
        </h1>
        <button
          className={`${menu ? "hidden" : ""} md:hidden `}
          onClick={handleMenu}
        >
          Click
        </button>
        <div
          className={`flex  md:flex-row   md:items-center md:min-h-full text-[13px] font-light min-h-screen ${
            menu ? "flex-col" : "hidden md:flex"
          } md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 md:w-[85%]`}
        >
          <button className="w-full  flex justify-center text-5xl items-center py-5" onClick={handleMenu}>
            <HiOutlineMenuAlt4 />
          </button>
          <ul className="flex h-[60%] md:flex-row flex-col md:justify-center md:pt-0 text-[12px]  md:gap-8 font-medium md:w-[70%] secondary-font uppercase">
            <HashLink
              to="#home"
              smooth
              className={`${
                active === 0
                  ? "bg-black/50  backdrop-blur-sm  w-full  transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center`}
              onClick={() => handleActive(0)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 flex items-center justify-center `}
              >
                Home
              </li>
            </HashLink>

            <HashLink
              to="#about"
              smooth
              className={`${
                active === 1
                  ? "bg-black/50  backdrop-blur-sm  w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(1)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 flex items-center justify-center `}
              >
                About
              </li>
            </HashLink>

            <HashLink
              to="#tech-stack"
              smooth
              className={`${
                active === 2
                  ? "bg-black/50  backdrop-blur-sm  w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(2)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 flex items-center justify-center `}
              >
                Tech Stack
              </li>
            </HashLink>
            <HashLink
              to="#projects"
              smooth
              className={`${
                active === 3
                  ? "bg-black/50  backdrop-blur-sm  w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(3)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 flex items-center justify-center `}
              >
                Projects
              </li>
            </HashLink>
            <HashLink
              to="#contact"
              smooth
              className={`${
                active === 4
                  ? "bg-black/50  backdrop-blur-sm  w-full transition duration-500"
                  : ""
              } md:w-[14%] h-full flex justify-center items-center `}
              onClick={() => handleActive(4)}
            >
              <li
                className={`
                  cursor-pointer md:hover:text-[#c9bc4d] hover:font-light transition duration-300 h-20 flex items-center justify-center `}
              >
                Contact
              </li>
            </HashLink>
          </ul>

          <div className="flex items-center justify-center gap-3 w-[30%] ">
            <Link
              to="https://github.com/ife-chukwu"
              className="w-[17%] h-[10%] hover:translate-y-1 transition duration-300"
            >
              {" "}
              <img src="/icons8-github-48 (1).png" />
            </Link>
            <Link
              to="https://twitter.com/ifee43080995"
              className="w-[17%] hover:translate-y-1 transition duration-300"
            >
              <img src="/icons8-twitter-48.png" />
            </Link>
            <Link
              to=" https://instagram.com/dopeskiez?igshid=ZDc4ODBmNjlmNQ=="
              className="w-[17%] hover:translate-y-1 transition duration-300"
            >
              <img src="/icons8-instagram-48.png" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ifechukwu-onyeka-4a2ba525a"
              className="w-[17%] hover:translate-y-1 transition duration-300"
            >
              <img src="/icons8-linkedin-50.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
