import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React from 'react';
import { GLTFLoader } from 'three-stdlib'

export function PcModel() {
  const myMesh = React.useRef<any>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });
  const gltf = useLoader(GLTFLoader, '/model/the_night_owls_desk.glb')
  // const gltf = useLoader(GLTFLoader, './computer/scene.gltf')
  return (
    <mesh ref={myMesh}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}