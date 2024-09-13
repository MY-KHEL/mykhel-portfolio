import { skills } from "../data/skills";

const About = () => {
  return (
    <div className="p-8 bg-lighterslate dark:bg-black dark:text-slate mb-8 lg:grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <h2 className="font-bold text-4xl md:text-4xl  underline text-center dark:text-lightslate">
          ABOUT ME
        </h2>
        <p className="mt-4">
          I'm not just a code-slinging developer, I'm a pixel alchemist,
          transforming designs into living, breathing online experiences. With
          Over Two years of conjuring front-end magic, I bring websites and web
          apps to life with a potent blend of technical prowess and artistic
          flair.
        </p>
        <p className="mt-4">
          My canvas? HTML, CSS, and JavaScript, the tools I wield to sculpt
          interactive interfaces that are as visually captivating as they are
          intuitively navigable. I obsess over pixel-perfect layouts,
          meticulously crafting user journeys that are smooth and seamless
          across devices. But my artistry goes beyond the surface. I breathe
          life into static designs with dynamic elements, weaving interactivity
          that engages users and tells stories.
        </p>

        <p className="mt-4">
          So, whether you're brewing a brand-new website or casting a spell on
          an existing one, I'm the alchemist you need to transform your vision
          into reality. Let's craft something extraordinary together.
        </p>
      </div>
      <div>
        {" "}
        <h2 className="font-bold text-4xl md:text-4xl  my-4 text-center dark:text-lightslate block">
          MY SKILLS
        </h2>{" "}
        <div className="flex flex-wrap h-fit m-auto">
          {skills.map((skill) => {
            return (
              <span
                key={skill.id}
                className="p-2 bg-black/20 text-black text-slate dark:border-2 dark:border-slate p-2 rounded-md m-2"
              >
                <p className="font-semibold">{skill.skill}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
