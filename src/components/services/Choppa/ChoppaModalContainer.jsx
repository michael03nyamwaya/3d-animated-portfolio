import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ChoppaModal } from "./ChoppaModal"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ChoppaModalContainer = () => {
  return (
 <Canvas>
    <Suspense fallback="loading">
        <Stage environment="city">
        <ChoppaModal scale={2.5}/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
       <PerspectiveCamera position={[-1, 0, 1.2]} zoom={0.6} makeDefault />
    </Suspense>
 </Canvas>
  )
}

export default ChoppaModalContainer