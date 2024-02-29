import React from 'react'
import { useGLTF,OrbitControls} from '@react-three/drei'



const VR = () => {

    const VRmodel=useGLTF('./VR-set-v1.glb')
    console.log(VRmodel)

    const VRbackground=useGLTF('./VR-background-v1.glb')

    

  return (
    <>
    <directionalLight intensity={0.5}/>
    <spotLight intensity={20} position={[0,2,3]}/>
      <primitive object={VRmodel.scene} scale={0.25} position={[2,-6.5,2]} rotation-y={0.3} rotation-x={-0.1}   />
      <primitive object={VRbackground.scene} scale={0.25} position={[1,-9,0.5]}/>

      {/* <OrbitControls enableZoom={false} target={VRmodel}/> */}

    </>
  )
}

export default VR
