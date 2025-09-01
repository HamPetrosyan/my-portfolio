import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", "97873368-626b-455b-bbc4-a1ee303d4c2e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resData = await response.json();

      if (resData.success) {
        setResult("Form submitted successfully!");
        reset();
      } else {
        setResult(resData.message || "Something went wrong.");
      }
    } catch (err) {
      setResult("Network error. Please try again later.");
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 uppercase font-poppins scroll-mt-20 lg:scroll-mt-40 text-gray"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-semibold"
      >
        Get In Touch
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-open-sans text-green font-bold"
      >
        Contact me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="normal-case max-w-2xl mx-auto text-center mt-5 mb-12"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto font-open-sans normal-case"
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
          <div className="relative flex flex-col">
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="flex-1 p-3 border border-green rounded-full rounded-tl-none outline-none focus:ring-1 focus:ring-green duration-100"
            />
            {errors.name && (
              <p className="absolute left-0 text-red-500 text-sm mt-1 -bottom-5">
                Name is required
              </p>
            )}
          </div>

          <div className="relative flex flex-col">
            <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="flex-1 p-3 border border-green rounded-full rounded-tl-none outline-none focus:ring-1 focus:ring-green duration-100"
            />
            {errors.email && (
              <p className="absolute left-0 text-red-500 text-sm mt-1 -bottom-5">
                {errors.email.message || "Email is required"}
              </p>
            )}
          </div>
        </div>

        <div className="relative flex flex-col mb-6">
          <motion.textarea
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            rows={6}
            placeholder="Enter your message"
            {...register("message", { required: true })}
            className="w-full p-4 outline-none border rounded-full rounded-tl-none border-green bg-[var(--color-bg)] focus:ring-1 focus:ring-green"
          />
          {errors.message && (
            <p className="absolute left-0 text-red-500 text-sm mt-1 -bottom-5">
              Message is required
            </p>
          )}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          type="submit"
          className="w-max flex items-center justify-center font-open-sans px-10 py-3 mx-auto rounded-full gap-2 font-medium normal-case shadow-green/50 transition duration-150 shadow-sm border-[0.5px] bg-[var(--color-bg)] text-green border-green hover:bg-green hover:text-white"
        >
          Send <FaPaperPlane />
        </motion.button>

        {result && (
          <p className="mt-4 text-center text-lg font-medium text-green">
            {result}
          </p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
