import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div 
    animate={{opacity:[0,1]}}
    transition={{duration:1}}
    className='bubbleContainer'>
        <div className="speech">
        <TypeAnimation
      sequence={[
        1000,
        ' Same substring at the start will only be typed out once, initially',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nam?',
        1000,
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
      repeat={Infinity}
    />

        </div>
        <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech