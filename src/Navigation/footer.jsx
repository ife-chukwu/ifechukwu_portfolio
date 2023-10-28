import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <div className="w-full flex  justify-center bg-black/50 backdrop-blur-sm h-20 items-center">
      <div className="w-full md:w-[89%] flex justify-between ">
        <ul className="hidden md:flex justify-start text-[12px] gap-8 font-medium w-3/5 lg:secondary-font uppercase">
          <HashLink
            to="#home"
            smooth
            className="w-[14%] h-full flex justify-center"
          >
            <li className="cursor-pointer    hover:text-[#c9bc4d] hover:font-light  transition duration-300">
              Home
            </li>
          </HashLink>
          <HashLink
            to="#about"
            smooth
            className="w-[14%] h-full flex justify-center"
          >
            <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light  transition duration-300">
              About
            </li>
          </HashLink>
          <HashLink
            to="#tech-stack"
            smooth
            className="w-[14%] h-full flex justify-center"
          >
            <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light  transition duration-300">
              Tech Stack
            </li>
          </HashLink>
          <HashLink
            to="#projects"
            smooth
            className="w-[14%] h-full flex justify-center"
          >
            <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light transition duration-300">
              Projects
            </li>
          </HashLink>
          <HashLink
            to="#contact"
            smooth
            className="w-[14%] h-auto flex justify-center"
          >
            <li className="cursor-pointer hover:text-[#c9bc4d] hover:font-light transition duration-300">
              Contact
            </li>
          </HashLink>
        </ul>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end tracking-wide md:secondary-font  text-md md:text-[12px]">
          <p className="text-light">
            Designed and built by{" "}
            <span className="bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
              Ifechukwu Onyeka
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
