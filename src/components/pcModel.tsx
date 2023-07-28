import { useFrame, useLoader } from '@react-three/fiber'
import React from 'react';
import { GLTFLoader } from 'three-stdlib'

export function PcModel() {
  const myMesh = React.useRef<any>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();

    myMesh.current.rotation.y = 0.5 * a;
  });
  const gltf = useLoader(GLTFLoader, '/model/the_night_owls_desk.glb')
  return (
    <mesh ref={myMesh}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}