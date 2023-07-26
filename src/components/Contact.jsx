import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {PlanetCanvas } from "./canvas"


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_zsa4cr6',
        'template_ptrw8d1',
        {
          from_name: form.name,
          to_name: "Surbhi",
          from_email: form.email,
          to_email: "surbhi02016@gmailcom",
          message: form.message,
        },
        'XT_m9h3RIm-OrTerC'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (

    <>
    <div
      className={`mt-12 flex xl:flex-row gap-5 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("center", "tween", 0.2, 1)}
        className='xl:ml-0 w-[265px] flex-[0.55] xl:flex-[0.75]  bg-secondary bg-opacity-40 p-4 xl:p-12 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-[#03001C] font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-white py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#03001C] font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='bg-white py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium '
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#03001C] font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message'
              className='bg-white py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-white '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <PlanetCanvas/>
     
    </div>

    </>
    
  );
};

export default SectionWrapper(Contact, "contact");