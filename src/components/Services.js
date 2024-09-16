import { data } from "../data/services_data";
import { motion } from "framer-motion";
const Services = () => {
  const miniAnimation = {
    initial: {
      opacity: 0,
      y: -10,
      x: -3,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.5,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <>
      <div className="bg-lighterslate dark:bg-black py-4">
        <h2 className="font-bold text-3xl md:text-4xl  text-center dark:text-lightslate ">
          SERVICES I OFFER
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 mt-8 mb-6 text-slate ">
          {data.map((item, i) => {
            return (
              <motion.div
                variants={miniAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={i}
                key={item.id}
                className="border  rounded-md py-8 px-2 text-center "
              >
                <span className=" text-black dark:text-lightslate">
                  {item.point}
                </span>
                <p className="font-semibold text-center text-black dark:text-lightslate ">
                  {item.services}{" "}
                </p>
                <p className="mt-4 text-black dark:text-slate">{item.icon}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
