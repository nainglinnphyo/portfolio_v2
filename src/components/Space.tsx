import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React from 'react';
import { GLTFLoader } from 'three-stdlib'

export function Space() {
  const myMesh = React.useRef<any>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    console.log(a);
    
    myMesh.current.rotation.y = 0.5 * a;
  });
  const gltf = useLoader(GLTFLoader, '/model/space.glb')
  // const gltf = useLoader(GLTFLoader, './computer/scene.gltf')
  return (
    <mesh ref={myMesh}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}