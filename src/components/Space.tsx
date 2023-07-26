import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React from 'react';
import { GLTFLoader } from 'three-stdlib'

export function Space(props: any) {
  const group = React.useRef<any>();


  const { nodes, animations, materials } = useLoader(GLTFLoader, '/model/test.glb')
  const { actions, names } = useAnimations(animations, group)
  console.log(nodes);

  return (
    <>
    <primitive object={nodes.Box22}/>
    </>
  )
}