
import { useGLTF } from '@react-three/drei'

export function ChoppaModal(props) {
  const { nodes, materials } = useGLTF('/choppa.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-97.729, 143.856, 19.04]}>
            <group position={[-270.142, -131.398, -74.565]} scale={0.4}>
              <mesh geometry={nodes['si��ge_d_si��ge_0'].geometry} material={materials.sige} />
              <mesh geometry={nodes.acoudoir_acoudoir_0.geometry} material={materials.acoudoir} position={[130.847, 201.204, -4.534]} scale={2.5} />
            </group>
            <group position={[-270.142, -131.398, 36.307]} scale={0.4}>
              <mesh geometry={nodes['si��ge_g_si��ge_0'].geometry} material={materials.sige} />
              <mesh geometry={nodes.acoudoir_2_acoudoir_0.geometry} material={materials.acoudoir} position={[130.847, 201.204, -4.534]} scale={2.5} />
            </group>
            <group position={[-274.115, -18.124, -19.04]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes['verri��re_vitre_1'].geometry} material={materials.vitre} />
              <mesh geometry={nodes['verri��re_metal_mat_clair_0'].geometry} material={materials.metal_mat_clair} />
            </group>
            <mesh geometry={nodes.engrenage_engrenage_0.geometry} material={materials.engrenage} position={[-11.852, 45.487, -62.086]} rotation={[Math.PI / 2, 0.175, -Math.PI]} />
            <mesh geometry={nodes.carcasse_1_carcasse_0.geometry} material={materials.carcasse} position={[97.729, -143.856, -19.04]} />
            <mesh geometry={nodes.rotator_moteur_rotator_moteur_0.geometry} material={materials.rotator_moteur} position={[-9.869, 126.972, -19.04]} />
            <mesh geometry={nodes.bombonnes_bombonnes_0.geometry} material={materials.bombonnes} position={[97.729, 131.664, -19.04]} />
            <mesh geometry={nodes.pale_4_pale_0.geometry} material={materials.pale} position={[97.647, 259.935, -19.362]} rotation={[0, -Math.PI / 2, 0]} />
            <mesh geometry={nodes.pale_3_pale_0.geometry} material={materials.pale} position={[97.647, 259.935, -19.362]} rotation={[0, Math.PI / 2, 0]} />
            <mesh geometry={nodes.pale_2_pale_0.geometry} material={materials.pale} position={[97.647, 259.935, -19.362]} rotation={[Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.pale_1_pale_0.geometry} material={materials.pale} position={[97.647, 259.935, -19.362]} />
            <mesh geometry={nodes.engrenage_2_engrenage_0.geometry} material={materials.engrenage} position={[-11.852, 45.487, 24.006]} rotation={[Math.PI / 2, 0.175, 0]} />
            <mesh geometry={nodes.skis_1_skis_0.geometry} material={materials.skis} position={[7.185, -304.333, -19.04]} />
            <mesh geometry={nodes.joystic_joystic_0.geometry} material={materials.joystic} position={[-368.201, -125.118, 35.095]} rotation={[Math.PI, 0, Math.PI / 6]} />
            <mesh geometry={nodes.poste_de_pilotage_1_poste_de_pilotage_0.geometry} material={materials.poste_de_pilotage} position={[-264.876, -131.53, -74.717]} />
            <mesh geometry={nodes['aileron_aileron_arri��re_0'].geometry} material={materials.aileron_arrire} position={[999.807, 190.926, -19.04]} />
            <mesh geometry={nodes.batterie_batterie_texture_0.geometry} material={materials.batterie_texture} position={[114.975, -66.402, 4.908]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.gyroscope_1_gyroscope_0.geometry} material={materials.gyroscope} position={[-407.467, -36.621, -19.305]} rotation={[Math.PI / 2, 0.308, 0]} scale={0.3} />
            <mesh geometry={nodes.compteur_compteur_0.geometry} material={materials.compteur} position={[-388.855, -88.807, -19.305]} rotation={[Math.PI / 2, 0.657, 0]} scale={0.3} />
            <mesh geometry={nodes.miles_miles_0.geometry} material={materials.miles} position={[-367.015, -116.602, -19.305]} rotation={[Math.PI / 2, 0.657, 0]} scale={0.3} />
            <mesh geometry={nodes.support_ski_support_ski_0.geometry} material={materials.support_ski} position={[86.02, -147.511, 113.843]} rotation={[0, 0.134, 0.093]} />
            <mesh geometry={nodes.verrins_verrins_0.geometry} material={materials.verrins} position={[97.729, 157.207, -19.04]} />
            <mesh geometry={nodes.toit_toit_0.geometry} material={materials.toit} position={[-184.082, 210.764, -19.04]} rotation={[-0.698, 0, 0]} />
            <mesh geometry={nodes.tuyau_grosse_alim_1_tuyau_grosse_alim_0.geometry} material={materials.tuyau_grosse_alim} position={[97.729, -143.856, -19.04]} />
            <mesh geometry={nodes.tuyyau_alim_1_tuyyau_alim_0.geometry} material={materials.tuyyau_alim} position={[97.729, -143.856, -19.04]} />
            <mesh geometry={nodes.bombonne_bombonne2_0.geometry} material={materials['bombonne.2']} position={[-455.214, -191.023, -19.04]} rotation={[0, 0, 1.92]} scale={0.6} />
            <mesh geometry={nodes.Cube_14_Cube_0.geometry} material={materials.Cube} position={[1009.067, 8.323, -19.04]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.pulsateur_pulsateur_0.geometry} material={materials.pulsateur} position={[-111.612, 103.282, -19.04]} rotation={[Math.PI, 0, -Math.PI / 6]} />
            <mesh geometry={nodes.batterie_2_batterie_texture_0.geometry} material={materials.batterie_texture} position={[114.975, -66.402, -42.988]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes['h��lice_arri��re_h��lice_arri��re_texture_0'].geometry} material={materials.hlice_arrire_texture} position={[1009.224, 7.71, 108.124]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
            <mesh geometry={nodes.ecran_ecran_pilote_0.geometry} material={materials.ecran_pilote} position={[-396.32, -75.022, 35.172]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/choppa.glb')
