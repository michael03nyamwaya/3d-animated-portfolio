import { animate } from 'motion';
import ChoppaModalContainer from './Choppa/ChoppaModalContainer';
import ComputerModalContainer from './computer/ComputerModalContainer';
import Counter from './Counter';
import { motion, useInView } from "framer-motion";
import Ps5ModalContainer from './ps5/Ps5ModalContainer';
import './services.css';
import { useRef, useState } from 'react';

const textVariants = {
  initial: {
    x: -100,      // Position the element 100px to the left of its starting point on the x-axis
    y: -100,      // Position the element 100px above its starting point on the y-axis
    opacity: 0    // Initially make the element fully transparent
  },
  animate: {
    x: 0,         // Move the element back to its original position along the x-axis
    y: 0,         // Move the element back to its original position along the y-axis
    opacity: 1,   // Set the element to full opacity (visible)
    transition: {
      duration: 2  // The transition duration will be 2 seconds
    }
  }
};

const listVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2
    }
  },
};

const list = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Branding",
    counter: 35
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Product Design",
    counter: 35
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  
  // Using rootMargin instead of margin to correctly apply the offset when checking if element is in view
  const isInView = useInView(ref, { rootMargin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {list.map((item) => {
            return (
              <motion.div
                variants={listVariants}
                className="sItems"
                key={item.id}
                onClick={() => setCurrentServiceId(item.id)}
              >
                <div className="sIcon">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="sInfo">
                  <h2>{item.title}</h2>
                  <h3>{item.counter} Projects</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="counterList">
          <Counter from={0} to={48} text="Project Completed" />
          <Counter from={0} to={22} text="Happy Clients" />
        </div>
      </div>

      <div className="sSection right">
        {currentServiceId === 1 && <ComputerModalContainer />}
        {currentServiceId === 2 && <Ps5ModalContainer />}
        {currentServiceId === 3 && <ChoppaModalContainer />}
      </div>
    </div>
  );
};

export default Services;
