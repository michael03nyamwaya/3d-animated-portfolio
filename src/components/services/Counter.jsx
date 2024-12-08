import { animate, easeOut } from "motion"
import { easeInOut, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

const Counter = ({from, to, text}) => {
  const [count, setCount]= useState(from)
  const ref = useRef()
  const isInview = useInView(ref)

  useEffect(()=>{
  const animation = animate(from,to,{
    duration:4,
    ease:easeOut,
    onUpdate:(prev) =>{
      setCount(Math.floor(prev))
    }
  })
  return()=> animation.cancel()
  },[isInview,from, to ])
  return (
    <div className='counter' ref={ref}>
        <h1>{count}+</h1>
        <p>{text}</p>
    </div>
  )
}

export default Counter