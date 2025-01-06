import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useeGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  return (
    <div>Earth</div> 
  )
}
const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Earth