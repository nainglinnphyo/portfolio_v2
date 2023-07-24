import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'

export function PcModel() {
  const gltf = useLoader(GLTFLoader, '/model/computer.glb')
  // const gltf = useLoader(GLTFLoader, './computer/scene.gltf')
  return <primitive object={gltf.scene} />
}