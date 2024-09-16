import { project_data } from "../data/projects_data";
import { motion } from "framer-motion";

const projectAnimation = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
};

const Projects = () => {
  return (
    <>
      <div className="bg-lighterslate dark:bg-black">
        
        <h2
          className="font-bold text-4xl md:text-4xl mt-4 font-text text-center dark:text-lightslate "
          id="projects"
        >
          PROJECTS
        </h2>
        <div className=" px-4 md:px-8 mt-8 md:mt-16  ">
          {project_data.map((item) => {
            return (
              <div
                className="hidden md:grid md:grid-cols-2 px-4 mb-8 "
                key={item.id}
              >
                <motion.div
                  className="md:col-span-1"
                  variants={projectAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <h2 className="font-semibold text-2xl mb-2 dark:text-lightslate">
                    {" "}
                    {item.title}{" "}
                  </h2>
                  <p className="dark:text-slate"> {item.content}</p>
                  {item.hasDemo && (
                    <span>
                      <a href={item.link1} target="_blank" rel="noreferrer">
                        <button className="bg-green hover:bg-green/90 dark:bg-plainpurple dark:hover:bg-plainpurple/70 py-2 px-6 text-white rounded">
                          Demo &nbsp;{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 inline"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                            />
                          </svg>
                        </button>
                      </a>
                      <a href={item.link2} target="_blank" rel="noreferrer">
                        <button className="bg-secColor hover:bg-secColor/90 dark:bg-plainpurple dark:hover:bg-plainpurple/70 mx-2 md:mx-4 mt-3 text-white  py-2 px-6 rounded">
                          Github{" "}
                        </button>
                      </a>
                    </span>
                  )}
                </motion.div>
                {/* <div className=" hidden md:grid md:col-span-1 "></div> */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center mt-4 md:mt-0 md:mx-16"
                >
                  <img
                    src={item.source}
                    alt="project"
                    className="w-full  rounded-md"
                  />
                </motion.div>
              </div>
            );
          })}
          <hr className=" m-0 "/>
        </div>
        {/* Mobile View */}
        <div className="md:hidden grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-8 mt-8 mb-6 ">
          {project_data.map((item) => {
            return (
              <div key={item.id} className="shadow-lg rounded-md  text-left ">
                <img
                  src={item.source}
                  alt="project"
                  className="w-full  rounded-t-md"
                />
                <h2 className="font-semibold text-2xl mb-2 p-2 ">
                  {" "}
                  {item.title}{" "}
                </h2>
                <p className="font-normal text-left p-2">{item.content} </p>
                {item.hasDemo && (
                  <span className="px-2">
                    <a href={item.link1} target="_blank" rel="noreferrer">
                      <button className="bg-green  dark:bg-plainpurple dark:hover:bg-plainpurple/70 py-2 px-6 text-white rounded">
                        Demo &nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 inline"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                          />
                        </svg>
                      </button>
                    </a>
                    <a href={item.link2} target="_blank" rel="noreferrer">
                      <button className="bg-secColor  dark:bg-plainpurple dark:hover:bg-plainpurple/70  mx-2 md:mx-4 mt-3 text-white  py-2 px-6 rounded">
                        Github{" "}
                      </button>
                    </a>
                  </span>
                )}
                <p className="mt-4">{item.icon}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
