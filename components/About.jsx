import { useState } from "react";
import { motion } from "motion/react";

import { assets, infoList } from "@/assets/assets";

import Image from "next/image";

const About = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 uppercase font-poppins scroll-mt-20 lg:scroll-mt-40 text-gray"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-semibold"
      >
        Intruduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-open-sans text-green font-bold"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 normal-case"
        >
          <p className="mb-10 max-w-2xl">
            I am a dedicated Front-End Developer with a robust foundation in
            HTML, CSS, and JavaScript, and extensive hands-on experience with
            modern libraries and frameworks, particularly React and Next.js. A
            recent graduate from Heroco Development School, I have specialized
            in crafting responsive and user-friendly web applications. <br /> I
            am enthusiastic about using React to build dynamic, high-performance
            web applications and continually strive to enhance my skills in this
            area.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon: Icon, title, description, details }, i) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={i}
                onClick={() => {
                  if (title === "Projects") {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                    return;
                  }
                  setSelected({ title, details });
                }}
                className="text-green rounded-xl p-6 cursor-pointer hover:scale-110 duration-400  shadow-lg shadow-green/50 hover:shadow-none hover:bg-green/50 hover:text-white"
              >
                <Icon className="text-[var(--color-gray)] text-4xl mb-4" />
                <h3 className="my-4 font-semibold">{title}</h3>
                <p className="text-sm text-[var(--color-gray)]">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelected(null)}
          />

          <div className="relative z-10 bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg w-[90%] max-w-2xl p-6 animate-fadeInUp shadow-xl">
            <h2 className="text-2xl font-bold text-green mb-4">
              {selected.title}
            </h2>

            <ul className="ml-5 space-y-2 text-[var(--color-text)] normal-case">
              {selected.details?.map((d, i) => {
                if (
                  selected.title === "Tech Skills" &&
                  typeof d === "string" &&
                  d.includes(":")
                ) {
                  const [label, rest] = d.split(/:(.+)/);

                  return (
                    <li className="list-none" key={i}>
                      <span className="font-semibold uppercase text-[var(--color-text)]">
                        {label}:
                      </span>
                      <span className="ml-1">{rest}</span>
                    </li>
                  );
                }

                if (
                  selected.title === "Education" &&
                  typeof d === "object" &&
                  d.edu
                ) {
                  return (
                    <li key={i} className="list-none">
                      <p className="font-semibold mb-1">{d.edu}</p>
                      <ul className="list-disc list-inside space-y-1">
                        {d.details?.map((detail, j) => (
                          <li key={j}>{detail}</li>
                        ))}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default About;
