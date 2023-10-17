import { Canvas } from '@react-three/fiber';
import { Environment, Center, OrbitControls } from '@react-three/drei'

// import Backdrop from './Backdrop';
// import CameraRig from './CameraRig';
import Ambulance from './Ambulance'

const CanvasModel = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.5}/>
        <Environment preset="city" />

        <OrbitControls makeDefault />

        {/* <CameraRig>
            <Backdrop /> */}
            <Center>
                <Ambulance></Ambulance>
            </Center>
        {/* </CameraRig> */}
    </Canvas>
  )
}

export default CanvasModel;
