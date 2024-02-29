import React from 'react'
import {Html, useGLTF} from '@react-three/drei'


const VR = () => {

    const model=useGLTF('./VR-set-v1.glb')

  return (
    <>
      <primitive object={model.scene} scale={0.35}/>
    </>
  )
}

export default VR
