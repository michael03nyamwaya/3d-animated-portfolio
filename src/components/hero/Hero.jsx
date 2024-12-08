import { Suspense } from 'react';
import './hero.css';
import Shape from './Shape';
import Speech from './Speech';
import { motion } from "framer-motion"; // Correct framer-motion import
import { easeInOut } from "framer-motion"; // Import easing function
import { Canvas } from '@react-three/fiber';

const awardsVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
    staggerChildren: 0.2,
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
    staggerChildren: 0.2,
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* Title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hi there <br />
          <span>I'm Michael</span>
        </motion.h1>

        {/* Awards */}
        <motion.div
          variants={awardsVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h1 variants={awardsVariants}>Top rated designer</motion.h1>
          <motion.p variants={awardsVariants}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </motion.p>
          <motion.div className="awardList">
            <motion.img
              variants={awardsVariants}
              src="/award1.png"
              alt="Award 1"
            />
            <motion.img
              variants={awardsVariants}
              src="/award2.png"
              alt="Award 2"
            />
            <motion.img
              variants={awardsVariants}
              src="/award3.png"
              alt="Award 3"
            />
          </motion.div>
        </motion.div>

        {/* Scroll Link */}
        <motion.a
          animate={{
            y: [0, 5, 0], // Bouncing effect
            opacity: [0, 1, 0], // Fade in and out effect
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: easeInOut, // Correct easing function
          }}
          href="#service"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5, 0] }} // Bouncing animation on the arrow
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: easeInOut,
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hSection right">
        {/* Social Follow */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate" // Corrected here to animate to the 'animate' state
          className="follow"
        >
          <motion.a variants={followVariants} href="/" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.a variants={followVariants} href="/" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" />
          </motion.a>
          <motion.a variants={followVariants} href="/" aria-label="YouTube">
            <img src="/youtube.png" alt="YouTube" />
          </motion.a>
          <motion.div variants={followVariants} className="followContainer">
            <motion.div className="followText">FOLLOW ME</motion.div>
          </motion.div>
        </motion.div>

        {/* Speech Bubble */}
        <Speech />

        {/* Certificate */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }} 
          className="certificate"
        >
          <img src="/certificate.png" alt="Certificate" />
          I'M A CERTIFIED <br />
          PROFESSIONAL <br />
          UI DESIGN
        </motion.div>

        {/* Contact Button */}
        <motion.a href="#contact" className="contactLink" 
          animate={{ x: [200, 0] }} 
          transition={{ duration: 2 }}
        >
          <motion.div className="contactButton"
            animate={{ rotate: [0, 360] }} 
            transition={{
              duration: 10, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow" 
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      {/* Background and 3D Image */}
      
      <div className="bg">
      <Canvas className='sphere'>
        <Suspense fallback="loading...">
        <Shape/>
        </Suspense>
      </Canvas>
        <div className="hImg">
          <motion.img src="/hero.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
