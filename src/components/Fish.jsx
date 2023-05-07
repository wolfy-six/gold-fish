/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/fish-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.09, 1.23, 0.5]} rotation={[-1.45, 0.1, -0.12]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.G_Fish67_G_Fish_tex_0.geometry} material={materials.G_Fish_tex} />
          <mesh geometry={nodes.G_Fish67_G_Fish_tex_0_1.geometry} material={materials.G_Fish_tex} />
          <mesh geometry={nodes.G_Fish67_G_Fish_tex_0_2.geometry} material={materials.G_Fish_tex} />
          <mesh geometry={nodes.G_Fish67_G_Fish_tex_0_3.geometry} material={materials.G_Fish_tex} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fish-transformed.glb')
