import { Html, useProgress } from '@react-three/drei'
import React from 'react'

function CanvasLoader() {
    const { progress } = useProgress()
    return (
        <Html>
            <p className='text-[#767b86] font-medium'>{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default CanvasLoader