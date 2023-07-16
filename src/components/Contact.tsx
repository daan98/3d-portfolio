import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn, textVariant } from '../utils/motion';
import { EmailInterface } from '../Interfaces';

const Contact = () => {
  const [form, setForm] = useState<EmailInterface>({
                                                    name: '',
                                                    email: '',
                                                    message: ''
                                                  });
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant(0.3)}>
          <p className={styles.sectionSubText}>Get in touch</p>

          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact