import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { PcModel } from './pcModel'

function ComputerModel() {
    return (
        <Canvas shadows camera={{ position: [0, 18, 18], fov: 10 }} >
            <ambientLight intensity={0.5} />
            <spotLight position={[300, 300, 300]} angle={0.15} penumbra={1} />
            <pointLight position={[-200, -200, -200]} />
            <PcModel />
            <OrbitControls
                enableZoom={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2.5}
            />
        </Canvas>
    )
}

export default ComputerModel