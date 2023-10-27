import { AutoTextWriter } from "../Components/autoTextWriter";
import { Projects } from "../Components/projects";
import { StackFlowItems } from "../Components/stackFlowItems";
import { Footer } from "../Navigation/footer";
import { About } from "../Components/about";

export const Home = () => {
  return (
    <main className="w-full h-full absolute " id="home">
      <AutoTextWriter />
      <h1
        id="tech-stack"
        className="w-full secondary-font uppercase flex justify-center text-xl md:text-3xl font-bold bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent pb-1 mt-[14%] md:mt-10"
      >
        My Tech Stack
      </h1>
      <p className="w-full text-sm font-light md:font-normal tracking-wide md:-tracking-normal md:text-md flex justify-center pb-5">
        Technologies I have been working with recently!
      </p>
      <StackFlowItems />

      <h1
        id="projects"
        className="w-full flex justify-center text-xl md:text-3xl font-bold bg-gradient-to-tr from-[white] via-[#d3c084] to-[#f7edc0] bg-clip-text text-transparent secondary-font uppercase pb-1 pt-20"
      >
        Projects
      </h1>

      <p className="w-full text-sm font-light md:font-normal tracking-wide md:-tracking-normal md:text-md text-md flex justify-center pb-5">
        Projects I have worked on so far
      </p>

      <Projects />
      <About />

      <Footer />
    </main>
  );
};
