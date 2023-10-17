import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const Ambulance = () => {
  const model = useLoader(GLTFLoader, './ambulance.glb')
    console.log(model)

  return (
    <group>
        <mesh>
            <primitive object={ model.scene } scale={ 5 } />
        </mesh>
    </group>
  )
}
export default Ambulance;
