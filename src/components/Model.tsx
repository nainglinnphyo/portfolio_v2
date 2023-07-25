import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { PcModel } from './pcModel'
import CanvasLoader from './CanvasLoader'

function ComputerModel() {
    return (
        <Canvas shadows camera={{ position: [0, 120, 120], fov: 30 }} className='hover:cursor-pointer'>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 300, 300]} angle={0.15} penumbra={1} />
            <pointLight position={[-200, -200, -200]} />
            <Suspense fallback={<CanvasLoader />}>
                <PcModel />
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2.5}
                />
            </Suspense>
        </Canvas>
    )
}

export default ComputerModel