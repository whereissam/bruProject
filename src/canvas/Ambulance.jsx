import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import React, { useEffect, useState  } from 'react'

const Ambulance = () => {
  const model = useLoader(GLTFLoader, './ambulance.glb')
  console.log(model)

  const [rotation, setRotation] = useState([0, 0, 0]) // Initial rotation (in radians)

  useEffect(() => {
    const handleRotation = () => {
      // Rotate the model 45 degrees around the Y-axis each time this function is called
      setRotation([6, rotation[1] - Math.PI / 4, 0])
    }

    handleRotation()
  }, [])

  return (
    <group>
        <mesh rotation={rotation}>
            <primitive object={ model.scene } scale={ 3 } />
        </mesh>
    </group>
  )
}
export default Ambulance;
