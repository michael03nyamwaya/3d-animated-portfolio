import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Test3d = () => {
  return (
    <section style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      <Canvas>
      <mesh>
    <Sphere args={[1, 100, 200]} scale={2}>
    {/* <meshStandardMaterial color='red'/> */}
    <MeshDistortMaterial 
    color='pink' 
    attach="material" 
    distort={0.5} 
    speed={2}/>
    </Sphere>
    <ambientLight intensity={1} />
    <directionalLight color="pink" position={[1, 2, 3]} />
    {/* <OrbitControls /> */}
      </mesh>
      </Canvas>
    </section>
  )
}

export default Test3d