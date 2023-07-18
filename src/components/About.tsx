import { Tilt } from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ServiceCardInterface } from "../Interfaces";

const About = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant(0.3)}>
        <p className={styles.heroSubText}>Introduction</p>

        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]" /* max-w-3xl */
      >
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers."
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  )
}

const ServiceCard = (props : ServiceCardInterface) => {
  let {title, icon, index} = props;

  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary eounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default About;