import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles";
import { experiences } from "../constants/constants";
import { textVariant } from "../utils/motion";
import { ExperienceCardInterface } from "../Interfaces";


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.3)}>
        <p className={styles.heroSubText}>Experience</p>

        <h2 className={styles.heroHeadText}>What I have done so far</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              companyIcon={experience.icon} 
              title={experience.title} 
              companyName={experience.company_name} 
              iconBg={experience.iconBg} 
              date={experience.date} 
              points={experience.points}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const ExperienceCard = (props : ExperienceCardInterface) => {
  const {companyIcon, iconBg, title, companyName, date, points} = props;

  return (
    <VerticalTimelineElement
      contentStyle={{background: "#1d1836", color: "#ffffff"}}
      contentArrowStyle={{borderRight: "7px solid #232631"}}
      date={date}
      dateClassName="text-secondary text-[16px] font-semibold"
      iconStyle={{background: iconBg}}
      icon={
        <div className="flex justify-center w-full h-full items-center">
          <img
            src={companyIcon}
            alt={companyName}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="font-bold text-white text-[24px]">{title}</h3>
      
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{companyName}</p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">{ point }</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default Experience