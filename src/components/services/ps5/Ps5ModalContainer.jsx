import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Ps5Modal } from "./Ps5Modal"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const Ps5ModalContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
            <Stage environment="forest">
            <Ps5Modal />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-1, 0, 1.2]} zoom={0.6} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default Ps5ModalContainer