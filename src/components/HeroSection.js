import { motion } from "framer-motion";

const styles = {
  position: "fixed",
  display: "none",
  bottom: "40px",
  right: "20px",
  borderRadius: "50%",
};
const mainAnimation = {
  initial: { x: -200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const HeroSection = () => {
  return (
    <>
      {" "}
      <button
        className="bg-secColor to-top dark:bg-gradient-to-l from-purple to-pink text-white p-2"
        style={styles}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-1 md:px-4 mb-4 ">
        <motion.div
          variants={mainAnimation}
          initial="initial"
          animate="animate"
          className="p-2 "
        >
          <p className="text-6xl mb-2">👋</p>
          <h1 className="font-bold text-4xl md:text-6xl ">
            Hi, I'm Michael Ojo{" "}
          </h1>
          <h1 className="font-bold text-2xl md:text-3xl mt-4 underline ">
            Front-End Developer
          </h1>
          <p className="mt-4">
            Specialized in crafting beautiful, interactive web experiences using
            HTML, CSS, and JavaScript and their respective frameworks and
            libraries. I love the blend of architecture and artistry, ensuring
            stunning visuals, user-friendly layouts, and seamless interactivity
            across devices. I'm a strong communicator, tech-savvy, and always
            hungry to learn new ways to make users' lives easier and more
            enjoyable through engaging websites and web apps.
          </p>
          <div className="mt-6 md:mb-6 ">
            <a href="https://wa.me/2349082909072">
              <button className="md:mx-4 bg-secColor text-white dark:bg-gradient-to-l from-purple to-pink py-2 px-4  rounded-lg ">
                Chat with me{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline mr-2 md:mr-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              </button>
            </a>
            <a href="mykhel_cv.pdf" target="_blank" download>
              <button className=" bg-secColor sm:mx-2 mx-2 text-white dark:bg-gradient-to-r from-purple via-purple-500 to-pink py-2 px-4 rounded-lg mt-3  md:mt-0  md:mx-6">
                Download CV
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </a>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> */}
        </motion.div>
        <div className=" ">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className=" text-center image-pic p-4"
          >
            <img
              src="codingAvatar.png"
              alt="profile"
              className=" mx-auto "
              style={{
                borderRadius: "50%",
                width: "400px",
                height: "auto",
                backgroundSize: "cover",
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
