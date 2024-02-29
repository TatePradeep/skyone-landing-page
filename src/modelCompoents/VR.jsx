import React from 'react'
import {Html, useGLTF} from '@react-three/drei'


const VR = () => {

    const VRmodel=useGLTF('./VR-set-v1.glb')
    console.log(VRmodel)

  return (
    <>
      <primitive object={VRmodel.scene} scale={9.35} position={[1,-6,1]}/>
    </>
  )
}

export default VR
