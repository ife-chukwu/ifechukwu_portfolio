import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
      console.log("Scrolled");
    } else {
      setScrolled(false);
      console.log("Not Scrolled");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled
          ? "bg-black/50 backdrop-blur-sm duration-1000 transition-all"
          : ""
      } fixed w-full h-[10%] z-40`}
    >
      <div className="w-full h-full flex items-center justify-between px-[5%]">
        <h1 className="text-white text-2xl w-1/5">
          IFECH
          <span className="bg-gradient-to-tr from-[white] via-[#f1eca1] to-[#fad73b] bg-clip-text text-transparent">
            UKWU
          </span>
        </h1>
        <div className="flex  items-center h-full text-[13px] font-light  w-4/5">
          <ul className="flex justify-center text-[12px] gap-8 font-medium w-[80%] secondary-font uppercase">
            <HashLink to="#home" smooth>
              <li className="cursor-pointer  hover:text-[#c9bc4d] hover:font-light hover:text-[14px] transition duration-300">
                Home
              </li>
            </HashLink>
            <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light hover:text-[14px] transition duration-300">
              About
            </li>
            <HashLink to="#tech-stack" smooth>
              <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light hover:text-[14px] transition duration-300">
                Tech Stack
              </li>
            </HashLink>
            <HashLink to="#projects" smooth>
              <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light hover:text-[14px] transition duration-300">
                Projects
              </li>
            </HashLink>
            <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light hover:text-[14px] transition duration-300">
              Contact
            </li>
          </ul>

          <div className="flex items-center gap-3 w-[20%]">
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
              to="https://instagram.com/dopeskiez?igshid=ZDc4ODBmNjlmNQ"
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
