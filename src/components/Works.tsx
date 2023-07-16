import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants/constants";
import { textVariant, fadeIn } from "../utils/motion";
import { ProjectCardInterface } from "../Interfaces";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.3)}>
        <p className={styles.heroSubText}>My work</p>

        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skils and experience through real-world examples of my work. Each project if briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            repositoryLink={project.source_code_link}
          />
        ))}
      </div>
    </>
  )
}

const ProjectCard = (props : ProjectCardInterface) => {
  const {
    index,
    name,
    description,
    tags,
    image,
    repositoryLink
  } = props;

  const handloeOnClickRepositoryUrl = (url : string) => {
    window.open(url, "_blank");
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
      >
        <div className="relative w-full w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => handloeOnClickRepositoryUrl(repositoryLink)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p
              key={`tag-${index}`}
              className={`${tag.color} text-[14px]`}
            >#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default Works