import "animate.css";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";

export const Projects = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="flex justify-center gap-2 py-5 lg:py-0 mx-auto lg:w-[20%] text-2xl md:text-3xl lg:text-5xl lg:ml-20 lg:font-bold md:font-semibold lg:text-white  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
        Client <span className="lg:hidden text-white ">Projects</span>
      </h1>
      <p className="lg:w-[20%] mb-10 text-2xl pb-1 pl-10 ml-20 font-bold md:border-b-2 border-white/75 rounded-sm  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent lg:flex hidden">
        Projects
      </p>
      <div className="w-full  h-full flex md:flex-row flex-col justify-center items-center md:mb-40 md:primary transition duration-500">
        <figure className=" w-4/5 md:w-3/5 lg:w-[45%] h-full flex ">
          {" "}
          <img
            src="/Projects/anwe.png"
            alt="Web Image"
            className="w-full h-full"
          />
        </figure>
        <div className="md:rounded-2xl  bg-black/70 w-4/5 h-2/5 md:h-2/5 md:w-[45%]  lg:h-2/5 lg:w-[30%] md:absolute md:ml-[50%] lg:mt-[12%] md:mt-[30%] ">
          <div className="md:w-full md:mt-8">
            <h2 className="font-semibold text-xl md:text-4xl flex pt-3 md:pt-5 pb-1 justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
              ANWE
            </h2>
            <p className="w-full px-5 flex justify-center overflow-x-auto text-center   md:mt-4 font-light md:font-normal text-sm md:text-md ">
              The All-Africa Medical and Wellness Expo unites global healthcare
              providers and pharmaceuticals. I teamed up with Ifeanyi Onyeka to
              build this project.
            </p>
            <Link
              to="https://amwe.com.ng/"
              className="w-full flex justify-center mt-2 mb-5 md:pb-3 md:mt-2 gap-3 items-center"
            >
              <span className="text-2xl md:text-4xl ">
                <AiOutlineLink />
              </span>
              <span className="underline pb-1 text-blue-700">Go to site.</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col flex-row mt-10 mb-10 md:mt-20  lg:my-0 justify-center gap-2">
        <h1 className="lg:mx-auto lg:w-[20%] text-2xl md:text-3xl lg:text-5xl lg:ml-20 md:font-semibold lg:font-bold text-white w-auto ">
          Personal
        </h1>
        <p className="lg:mx-auto lg:w-[20%] lg:mb-10 font-medium md:font-semibold   text-2xl md:text-3xl pb-1 lg:pl-20 lg:ml-20 lg:font-bold lg:border-b-2 border-white/75 rounded-sm  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
          Projects
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 px-10 gap-y-5 gap-x-5">
        <Atropos
          className="w-full bg-black/10 h-full primary relative atropos my-atropos"
          data-atropos-offset="-5"
        >
          <div className=" md:bg-black/70 bg-black  backdrop-blur-sm h-full w-full absolute  hovee ">
            <div>
              <h1 className="font-semibold text-xl pt-3 lg:text-4xl md:text-2xl  lg:pt-20  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                PIZBUG
              </h1>

              <p className="w-full px-4 font-light md:font-normal text-sm md:text-md md:px-5 lg:px-20 flex justify-center text-center lg:mt-4 text-md ">
                PizBug is a successful personal project, an online pizza and
                burger store built to test my React skills. Desktop responsive
                only.
              </p>
              <Link
                to="https://food-service-sandy.vercel.app/"
                className="w-full flex justify-center mt-2 md:mt-3 lg:mt-5 gap-3 items-center"
              >
                <span className="lg:text-4xl md:text-2xl">
                  <AiOutlineLink />
                </span>
                <span className="text-sm md:text-lg underline pb-1 text-blue-700">
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
          <div className=" md:bg-black/70 bg-black  backdrop-blur-sm w-full h-full absolute hovee">
            <div>
              <h1 className="font-semibold text-xl pt-3 lg:text-4xl md:text-2xl  lg:pt-20  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                WUUSTORE
              </h1>

              <p className="w-full px-4 font-light md:font-normal text-sm md:text-md md:px-5 lg:px-20 flex justify-center text-center lg:mt-4 text-md">
                WUUSTORE is An online furniture marketplace I built, currently
                paused due to my internship. Desktop responsive
              </p>
              <Link
                to="https://wuu-store.netlify.app/"
                className="w-full flex justify-center mt-2 md:mt-3 lg:mt-5 gap-3 items-center"
              >
                <span className="lg:text-4xl md:text-2xl">
                  <AiOutlineLink />
                </span>
                <span className="text-sm md:text-lg underline pb-1 text-blue-700">
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
          <div className=" md:bg-black/70 bg-black  backdrop-blur-sm h-full w-full absolute hovee">
            <div>
              <h1 className="font-semibold text-xl pt-3 lg:text-4xl md:text-2xl  lg:pt-20  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                Toolkit Master
              </h1>

              <p className="w-full px-4 font-light md:font-normal text-sm md:text-md md:px-5 lg:px-20 flex justify-center text-center lg:mt-4 text-md">
                Unfortunately the name has nothing to do with the content of
                this site lol, I gave it that name because it is a personal
                project and I learned how to apply a state management called
                redux toolkit with this particular site.
              </p>
              <Link
                to="https://checking-out-redux-tool-kit.vercel.app/"
                className="w-full flex justify-center mt-2 md:mt-2 lg:mt-5 gap-3 items-center"
              >
                <span className="lg:text-4xl md:text-2xl">
                  <AiOutlineLink />
                </span>
                <span className="text-sm md:text-lg underline pb-1 text-blue-700">
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
        <h1 className="md:w-2/5 mb-10 text-2xl md:text-3xl lg:text-5xl md:pb-2 font-medium md:font-bold border-b-2 border-white/75 rounded-sm  bg-gradient-to-tr from-[white] via-[rgb(211,192,132)] to-[#f7edc0] bg-clip-text text-transparent">
          Task{" "}
          <span className="text-white font-normal md:font-bold">Projects</span>
        </h1>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[85%] md:grid-cols-2 grid-cols-1 grid md:grid-flow-row-dense gap-x-10 gap-y-5">
          <Atropos
            data-atropos-offset="-5"
            className="w-full min-h-[60%] primary md:row-span-2 relative"
          >
            <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee flex justify-center  items-center">
              <div>
                <h1 className="font-semibold text-2xl lg:text-4xl   pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  PayME
                </h1>

                <p className="w-full px-5 md:px-5 lg:px-20 flex justify-center text-center mt-4 text-md ">
                  PayME is a salary disbursement platform where employees are
                  paid at just a push of a button.
                </p>
                <Link
                  to="https://www.behance.net/gallery/182291389/Payme-Payroll-Management-System"
                  className="w-full flex justify-center mt-5 gap-3 items-center"
                >
                  <span className="md:text-4xl text-xl">
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
                <h1 className="font-semibold text-2xl mt-[25%] md:mt-[10%] lg:text-4xl items-center md:pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  Spotify
                </h1>

                <p className="w-full px-5 md:px-5 lg:px-20 flex justify-center  mt-2 lg:mt-4 text-sm md:text-md text-justify ">
                  This is just a replicate of spotify design given to us as a
                  standardization test during my internship. In order to get
                  access to this site you will have to have a real spotify
                  account.{" "}
                </p>
                <Link
                  to="https://spotify-replicate-learnable.netlify.app/"
                  className="w-full flex justify-center mt-1 lg:mt-5 gap-3 items-center"
                >
                  <span className="lg:text-4xl md:text-2xl">
                    <AiOutlineLink />
                  </span>
                  <span className="underline pb-1 text-blue-700">
                    Go to site.
                  </span>
                </Link>
                <Link
                  className="w-full flex justify-center text-[12px] lg:text-sm text-blue-500"
                  to="https://developer.spotify.com/documentation/web-api"
                >
                  Open this api tool in order for this site to respond properly{" "}
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
                <h1 className="font-semibold text-2xl  lg:text-4xl mt-[25%] md:mt-[2%]  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  SavvySaver
                </h1>

                <p className="w-full px-5 lg:px-20 flex justify-center mt-1 lg:mt-4 text-sm md:text-md text-justify ">
                  This is an unfinished project, the purpose of this project is
                  to help people with budget making. It will help you keep track
                  of your savings and expenditures. Unfinished.
                </p>
                <Link
                  to="https://budget-app-five-lac.vercel.app/"
                  className="w-full flex justify-center mt-2 lg:mt-5 gap-3 items-center"
                >
                  <span className="text-xl lg:text-4xl md:2xl">
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
            className="w-full h-4/5 primary md:col-span-2 relative"
          >
            <div className=" bg-black/70  backdrop-blur-sm h-full w-full absolute hovee flex justify-center items-center">
              <div>
                <h1 className="font-semibold text-2xl md:text-2xl lg:text-4xl mt-5 md:mt-0  pb-1 w-full flex justify-center bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent">
                  Netflix
                </h1>
                <div className="w-full flex justify-center">
                  <p className="md:w-3/5 px-5  lg:px-20  text-justify md:mt-4 text-sm md:text-md ">
                    This is a non action website, in other words there is no
                    javascript involved just HTML and CSS, this task was giving
                    to me during my internship to test us on a particular CSS
                    topic (Flex box and grid system).
                  </p>
                </div>
                <Link
                  to="https://netflix-clone-orcin-nu.vercel.app/?"
                  className="w-full flex justify-center mt-2 md:mt-5 gap-3 items-center"
                >
                  <span className="text-xl md:text-2xl lg:text-4xl">
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
