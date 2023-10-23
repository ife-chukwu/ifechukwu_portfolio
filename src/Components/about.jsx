import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Contact } from "./contact";

export const About = () => {
  return (
    <div className="w-full h-auto" id="about">
      <h1 className="ml-20 text-5xl font-bold">
        <span className="bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
          About
        </span>{" "}
        Me
      </h1>
      <p className="ml-20 mt-4 w-[45%] px-10 py-10 h-full backdrop-blur-lg bg-black/10 rounded-md  text-lg font-light flex text-justify">
        I am Ifechukwu Onyeka, a young adult with a passion for programming,
        especially in JavaScript (React). My interest in tech was sparked by my
        elder brother, and since then, I have been working hard to improve my
        programming skills. I develop websites and mobile apps, and I have
        completed several personal and internship projects. I take pride in
        delivering quality work.
      </p>
      <h1 className="ml-20 text-3xl font-medium mt-10">Work Experience</h1>
      <div className="ml-20 mt-5">
        <p className="font-light text-xl bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent mb-5">
          Front-end web development intern
        </p>

        <div className="border-b border-[#d3c1a0] w-[48%] flex justify-between items-center">
          <div className="w-2/5 flex">
            <div className="flex w-full mt-2 mb-3  justify-between">
              <Link
                to="https://www.genesystechhub.com/"
                className="font-light text-sm"
              >
                Genesys Tech Company
              </Link>
              <span className="flex h-full items-center gap-1 font-light text-sm">
                <Link
                  className="text-2xl"
                  to="https://www.google.com/maps/place/Genesys+Tech+Hub/@6.3913034,7.5339421,16.68z/data=!4m14!1m7!3m6!1s0x1044a728c2859721:0x36d000c156e333ae!2sGenesys+Tech+Hub!8m2!3d6.39099!4d7.5338409!16s%2Fg%2F11gfn_skq1!3m5!1s0x1044a728c2859721:0x36d000c156e333ae!8m2!3d6.39099!4d7.5338409!16s%2Fg%2F11gfn_skq1?authuser=0&entry=ttu"
                >
                  <CiLocationOn />
                </Link>
                Enugu
              </span>
            </div>
          </div>
          <div className="w-2/5 flex gap-10 items-center">
            <p className="font-medium flex justify-center text-sm bg-[#87724a] w-[30%] py-1 rounded-2xl px-2">
              Internship
            </p>
            <p className="text-sm font-light">Nov-2022 - Mar-2023</p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
