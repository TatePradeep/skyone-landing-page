import React from 'react'
import {Html, useGLTF} from '@react-three/drei'

const Model = () => {
    const model=useGLTF('./CHNGSKYONE-v1.glb')
    console.log(model)

    // let video=document.getElementById("video");

    // let videoTexture=new THREE.VideoTexture(video);

    // videoTexture.minFilter=THREE.LinearFilter;
    // videoTexture.magFilter=THREE.LinearFilter;

    // var movieMaterial=new THREE.MeshBasicMaterial({
    //   map:videoTexture,
    //   side:THREE.FrontSide,
    //   toneMapped:false
    // })

    

  return (
    <>
     <Html transform
    wrapperClass="htmlScreen"
    distanceFactor={ 1.17 }
    position={ [ 0, 1.56, - 1.4 ] }>

      <video playsInline autoPlay loop muted id='video' style={{ width: '400px', height: '300px',position:'fixed',zIndex:'1'}}>
      <source src="./skyone-demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      </Html>

    <primitive object={model.scene} scale={0.35}/>

    
    </>
  )
}

export default Model
