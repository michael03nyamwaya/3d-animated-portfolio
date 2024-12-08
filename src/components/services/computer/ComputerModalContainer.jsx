import { Suspense } from "react"
import { ComputerModal } from "./ComputerModal"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const ComputerModalContainer = () => {
  return (
    <Canvas>
    <Suspense fallback="loading...">
      <Stage environment="night" >
        <ComputerModal scale={2.5} /> {/* Scale the object to make it bigger */}
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
      <PerspectiveCamera position={[-1, 0, 1.2]} zoom={0.6} makeDefault /> {/* Closer camera position for a larger view */}
    </Suspense>
  </Canvas>
  
  )
}

export default ComputerModalContainer