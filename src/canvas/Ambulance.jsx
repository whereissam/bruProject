import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import React from 'react'

const Ambulance = () => {
  const model = useLoader(GLTFLoader, './ambulance.glb')
    console.log(model)

  return (
    <group>
        <mesh>
            <primitive object={ model.scene } scale={ 3 } />
        </mesh>
    </group>
  )
}
export default Ambulance;
