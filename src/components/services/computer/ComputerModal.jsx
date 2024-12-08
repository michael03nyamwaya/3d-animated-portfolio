

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ComputerModal(props) {
  const { nodes, materials } = useGLTF('/computerModal.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.MacBookPro} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MacBookPro} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  )
}

useGLTF.preload('/computerModal.glb')