import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { SectionWrapperInterface } from "../Interfaces";

const SectionWrapper = (props : SectionWrapperInterface) : JSX.Element => {
    const { Component, idName } = props;

    const HOC  = () => {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto z-0`}
            >
                <span id={idName}>&nbsp;</span>
                <Component />
            </motion.section>
        );
    }

    return HOC();
};

export default SectionWrapper;