import { project_data } from "../data/projects_data";
import { motion } from "framer-motion";

const projectAnimation ={
    initial:{
        x:-200,
        opacity:0,
        
    },
    animate:{
       
            x:0,
            opacity:1,
            transition:{
                delay:0.7,
            }
    }
}

const Projects = () => {
    return ( 
    <>
    <h2 className="font-bold text-4xl md:text-4xl mt-4 underline text-center " id="projects">PROJECTS</h2>

    <div className=" px-4 md:px-8 mt-8 md:mt-16  ">
       {project_data.map((item)=>{
            return(
                <div className="grid md:grid-cols-2 px-4 mb-8 " key={item.id}>
                <motion.div className="md:col-span-1"
                variants={projectAnimation}
                initial='initial'
                animate = 'animate'
                >
                 <h2 className="font-semibold text-2xl mb-2 "> {item.title} </h2>
                 <p> {item.content}</p>
                 {item.hasDemo &&
                 <span>
                    <a href={item.link1} target="_blank" rel="noreferrer">
                 <button className="bg-secColor dark:bg-gradient-to-l from-purple to-pink py-2 px-6 text-white rounded">Demo 
                
                     </button></a>
                     <a href={item.link2} target="_blank" rel="noreferrer">
                 <button className="bg-secColor dark:bg-gradient-to-r from-purple to-pink mx-2 md:mx-4 mt-3 text-white  py-2 px-6 rounded">Github </button></a>
                 </span> }
                </motion.div>
                {/* <div className=" hidden md:grid md:col-span-1 "></div> */}
                < motion.div
                whileHover={{scale:1.1}}
                 className="text-center mt-4 md:mt-0 md:mx-16">
                    <img src={item.source} alt="project"  className="w-full shadow-md rounded-md" />
                </motion.div>
            </div>
            )
       }) }
        <hr/>
    </div>
    </>
     );
}

export default Projects;