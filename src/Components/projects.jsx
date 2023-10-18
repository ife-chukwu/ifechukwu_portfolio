import "animate.css";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";

export const Projects = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="mx-auto w-[20%] text-5xl ml-20 font-bold text-white">
        Client
      </h1>
      <p className="w-[20%] mb-10 text-2xl pb-1 pl-10 ml-20 font-bold border-b-2 border-white/75 rounded-sm  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
        Projects
      </p>

      <div className="w-full flex justify-center mb-20 primary transition duration-500">
        <figure className="w-[45%] h-full flex ">
          {" "}
          <img
            src="/Projects/anwe.png"
            alt="Web Image"
            className="w-full h-full"
          />
        </figure>
        <div className="animate__animated animate__bounceInUp rounded-2xl  bg-black/70  h-2/5 w-[30%] absolute ml-[50%] mt-[12%]  mb-20 hovee ">
          <div className="w-full mt-8">
            <h2 className="font-semibold text-4xl flex pt-5 pb-1 justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
              ANWE
            </h2>
            <p className="w-full px-5 flex justify-center text-center mt-4 text-md ">
              The All-Africa Medical and Wellness Expo unites global healthcare
              providers and pharmaceuticals. I teamed up with Ifeanyi Onyeka to
              build this project.
            </p>
            <Link
              to="https://amwe.com.ng/"
              className="w-full flex justify-center mt-5 gap-3 items-center"
            >
              <span className="text-4xl">
                <AiOutlineLink />
              </span>
              <span className="underline pb-1 text-blue-700">Go to site.</span>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mx-auto w-[20%] text-5xl ml-20 font-bold text-white">
        Personal
      </h1>
      <p className="mx-auto w-[20%] mb-10 text-2xl pb-1 pl-20 ml-20 font-bold border-b-2 border-white/75 rounded-sm  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
        Projects
      </p>

      <div className="w-full grid grid-cols-2 px-10 gap-y-5 gap-x-5">
        <Atropos
          className="w-full bg-black/10 h-full primary relative atropos my-atropos"
          data-atropos-offset="-5"
        >
          <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute  hovee ">
            <div>
              <h1 className="font-semibold text-4xl  pt-20  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                PIZBUG
              </h1>

              <p className="w-full px-20 flex justify-center text-center mt-4 text-md ">
                PizBug is a successful personal project, an online pizza and
                burger store built to test my React skills.
              </p>
              <Link
                to="https://amwe.com.ng/"
                className="w-full flex justify-center mt-5 gap-3 items-center"
              >
                <span className="text-4xl">
                  <AiOutlineLink />
                </span>
                <span className="underline pb-1 text-blue-700">
                  Go to site.
                </span>
              </Link>
            </div>
          </div>
          <figure className="w-full h-full primary">
            {" "}
            <img
              src="/Projects/PIZBUG (1).png"
              alt="Web Image"
              className="w-full h-full"
            />
          </figure>
        </Atropos>
        <Atropos
          data-atropos-offset="-5"
          className="w-full h-full primary relative"
        >
          <div className=" bg-black/70  backdrop-blur-sm w-full h-full absolute hovee">
            <div>
              <h1 className="font-semibold text-4xl  pt-20  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                WUUSTORE
              </h1>

              <p className="w-full px-20 flex justify-center text-center mt-4 text-md ">
                WUUSTORE is An online furniture marketplace I built, currently
                paused due to my internship.
              </p>
              <Link
                to="https://amwe.com.ng/"
                className="w-full flex justify-center mt-5 gap-3 items-center"
              >
                <span className="text-4xl">
                  <AiOutlineLink />
                </span>
                <span className="underline pb-1 text-blue-700">
                  Go to site.
                </span>
              </Link>
            </div>
          </div>
          <figure className="w-full h-full primary">
            {" "}
            <img
              src="/Projects/WUUD.png"
              alt="Web Image"
              className="w-full h-full"
            />
          </figure>
        </Atropos>
        <Atropos
          data-atropos-offset="-5"
          className="w-full h-full primary relative"
        >
          <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee">
            <div>
              <h1 className="font-semibold text-4xl  pt-20  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                Toolkit Master
              </h1>

              <p className="w-full px-20 flex justify-center text-justify mt-4 text-md ">
                Unfortunately the name has nothing to do with the content of
                this site lol, I gave it that name because it is a personal
                project and I learned how to apply a state management called
                redux toolkit with this particular site.
              </p>
              <Link
                to="https://amwe.com.ng/"
                className="w-full flex justify-center mt-5 gap-3 items-center"
              >
                <span className="text-4xl">
                  <AiOutlineLink />
                </span>
                <span className="underline pb-1 text-blue-700">
                  Go to site.
                </span>
              </Link>
            </div>
          </div>
          <figure className="w-full h-full primary">
            {" "}
            <img
              src="/Projects/redux.png"
              alt="Web Image"
              className="w-full h-full"
            />
          </figure>
        </Atropos>
      </div>
      <div className="w-full  flex justify-center mt-[10%]">
        <h1 className="w-2/5 mb-10 text-5xl pb-2 font-bold border-b-2 border-white/75 rounded-sm  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
          Task <span className="text-white">Projects</span>
        </h1>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[85%] grid-cols-2 grid grid-flow-row-dense gap-x-10 gap-y-5">
          <Atropos
            data-atropos-offset="-5"
            className="w-full min-h-[60%] primary row-span-2 relative"
          >
            <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee flex justify-center  items-center">
              <div>
                <h1 className="font-semibold text-4xl   pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  PayME
                </h1>

                <p className="w-full px-20 flex justify-center text-center mt-4 text-md ">
                  PayME is a salary disbursement platform where employees are
                  paid at just a push of a button.
                </p>
                <Link
                  to="https://amwe.com.ng/"
                  className="w-full flex justify-center mt-5 gap-3 items-center"
                >
                  <span className="text-4xl">
                    <AiOutlineLink />
                  </span>
                  <span className="underline pb-1 text-blue-700">
                    Go to site.
                  </span>
                </Link>
              </div>
            </div>
            <figure className="w-full h-full primary">
              {" "}
              <img
                src="/Projects/payMe.png"
                alt="Web Image"
                className="w-full h-full"
              />
            </figure>
          </Atropos>

          <Atropos
            data-atropos-offset="-5"
            className="w-full  primary relative"
          >
            <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee flex justify-center  items-center">
              <div>
                <h1 className="font-semibold text-4xl items-center pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  Spotify
                </h1>

                <p className="w-full px-20 flex justify-center  mt-4 text-md text-justify ">
                  This is just a replicate of spotify design given to us as a
                  standardization test during my internship. In order to get
                  access to this site you will have to have a real spotify
                  account.
                </p>
                <Link
                  to="https://amwe.com.ng/"
                  className="w-full flex justify-center mt-5 gap-3 items-center"
                >
                  <span className="text-4xl">
                    <AiOutlineLink />
                  </span>
                  <span className="underline pb-1 text-blue-700">
                    Go to site.
                  </span>
                </Link>
              </div>
            </div>
            <figure className="w-full h-full primary">
              {" "}
              <img
                src="/Projects/spotify.png"
                alt="Web Image"
                className="w-full h-full"
              />
            </figure>
          </Atropos>
          <Atropos
            data-atropos-offset="-5"
            className="w-full h-full primary relative"
          >
            <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee flex justify-center  items-center">
              <div>
                <h1 className="font-semibold text-4xl   pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  SavvySaver
                </h1>

                <p className="w-full px-20 flex justify-center mt-4 text-md text-justify ">
                  This is an unfinished project, the purpose of this project is
                  to help people with budget making. It will help you keep track
                  of your savings and expenditures.
                </p>
                <Link
                  to="https://amwe.com.ng/"
                  className="w-full flex justify-center mt-5 gap-3 items-center"
                >
                  <span className="text-4xl">
                    <AiOutlineLink />
                  </span>
                  <span className="underline pb-1 text-blue-700">
                    Go to site.
                  </span>
                </Link>
              </div>
            </div>
            <figure className="w-full h-full primary">
              {" "}
              <img
                src="/Projects/savySaver.png"
                alt="Web Image"
                className="w-full h-full"
              />
            </figure>
          </Atropos>
          <Atropos
            data-atropos-offset="-5"
            className="w-full h-4/5 primary col-span-2 relative"
          >
            <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee flex justify-center items-center">
              <div>
                <h1 className="font-semibold text-4xl  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  Netflix
                </h1>
                <div className="w-full flex justify-center">
                  <p className="w-3/5 px-20  text-justify mt-4 text-md ">
                    This is a non action website, in other words there is no
                    javascript involved just HTML and CSS, this task was giving
                    to me during my internship to test us on a particular CSS
                    topic (Flex box and grid system).
                  </p>
                </div>
                <Link
                  to="https://amwe.com.ng/"
                  className="w-full flex justify-center mt-5 gap-3 items-center"
                >
                  <span className="text-4xl">
                    <AiOutlineLink />
                  </span>
                  <span className="underline pb-1 text-blue-700">
                    Go to site.
                  </span>
                </Link>
              </div>
            </div>
            <figure className="w-full h-full primary">
              {" "}
              <img
                src="/Projects/netflix2.png"
                alt="Web Image"
                className="w-full h-full"
              />
            </figure>
          </Atropos>
        </div>
      </div>
    </div>
  );
};
