
import { useGLTF } from '@react-three/drei'

export function Ps5Modal(props) {
  const { nodes, materials } = useGLTF('/ps5.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Box001_Material005_0.geometry} material={materials['Material.005']} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Handle001_Material003_0.geometry} material={materials['Material.003']} position={[0, 42.8, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/ps5.glb')
