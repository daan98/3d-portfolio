import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { EmailInterface } from '../Interfaces';

const Contact = () => {
  const emailRegExp           : RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const formRef               : any    = useRef<any>();
  const [loading, setLoading] = useState<boolean>()
  const [form, setForm]       = useState<EmailInterface>({
                                                          name: '',
                                                          email: '',
                                                          message: ''
                                                        });
  const handleOnChange = (e : any) => {
    console.log(e); 
    setForm({...form, [e.target.name]: e.target.vakue})
  }

  const handleOnSubmit = (e : any) => {
    e.preventDefault();
    setLoading(true);
    
    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      console.log('All fields must be filled');
      return;
    }

    if (!emailRegExp.test(form.email)) {
      setLoading(false);
      console.log("Please write a valid email. Example: test@somehing.com");
      return;
    }

    setTimeout(() => {
      setLoading(false);
    }, 1500);

  }
  
  return (
    <div className="flex xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleOnSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor="name" className='text-white font-medium mb-4 flex flex-col'>
            <span className="mb-4 capitalize">Your name</span>

            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleOnChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-[12px] xs:text-[16px] rounded-lg outlined-none border-none w-full xs:w-auto"
            />
          </label>
          
          <label htmlFor="email" className='text-white font-medium mb-4 flex flex-col'>
            <span className="mb-4 capitalize">Your email</span>

            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleOnChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-[12px] xs:text-[16px] rounded-lg outlined-none border-none w-full xs:w-auto"
            />
          </label>
          
          <label htmlFor="message" className='text-white font-medium mb-4 flex flex-col'>
            <span className="mb-4 capitalize">Your message</span>

            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleOnChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-[12px] xs:text-[16px] rounded-lg outlined-none border-none w-full xs:w-auto"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl m-auto"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;