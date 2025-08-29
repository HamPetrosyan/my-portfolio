import { FiSend } from "react-icons/fi";
import { workData } from "@/assets/assets";
import { HiArrowNarrowRight } from "react-icons/hi";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 uppercase font-poppins scroll-mt-20 lg:scroll-mt-40 text-gray"
    >
      <h4 className="text-center mb-2 text-lg font-semibold">My Portfolio</h4>

      <h2 className="text-center text-5xl font-open-sans text-green font-bold">
        My latest projects
      </h2>

      <p className="normal-case max-w-2xl mx-auto text-center mt-5 mb-12">
        Welcome to my web development portfolio! Check out a collection of
        projects that showcase my experience in Front-End Development.{" "}
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5">
        {workData.map((project, i) => (
          <a
            key={i}
            href={project.url}
            rel="noopener noreferrer"
            target="_blank"
            style={{
              backgroundImage: `url(${project.bgImage})`,
            }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white backdrop-blur-lg w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-bold uppercase text-green">
                  {project.title}
                </h2>
                <p className="text-sm text-gray">{project.description}</p>
              </div>

              <div className="border rounded-full border-green text-green w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_var(--color-green)] group-hover:bg-green group-hover:text-white transition">
                <FiSend size={18} />
              </div>
            </div>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/HamPetrosyan"
        rel="noopener noreferrer"
        target="_blank"
        className="group w-max flex items-center justify-center font-open-sans px-10 py-3 my-20 mx-auto rounded-full gap-2 font-medium normal-case shadow-green/50 transition duration-150 shadow-sm border-[0.5px] text-green border-green bg-white hover:bg-green hover:text-white"
      >
        Show more
        <HiArrowNarrowRight
          size={20}
          className="transition-transform duration-150 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default Projects;
