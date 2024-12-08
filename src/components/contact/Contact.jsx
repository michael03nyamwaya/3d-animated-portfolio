import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    // Reset feedback messages
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY // Correct way to pass public key
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setError(true);
        }
      );
  };

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail} // Attach `onSubmit` to the form element
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="John Doe"
              required
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="john@gmail.com"
              required
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>
          </motion.div>
          <motion.button type="submit" variants={listVariant} className="formButton">
            Send
          </motion.button>
          {success && <span className="successMessage">Your message has been sent!</span>}
          {error && <span className="errorMessage">Something went wrong. Please try again!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
