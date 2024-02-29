import {Canvas,useFrame} from '@react-three/fiber'
import { Environment, OrbitControls,Scroll,ScrollControls,useScroll } from '@react-three/drei'
import {getProject,val} from '@theatre/core'
import {editable as e, SheetProvider,PerspectiveCamera,useCurrentSheet} from '@theatre/r3f'
import Model from './modelCompoents/Model'
import ScrollPageContainer from './UI/Title/ScrollPageContainer.jsx'
import QualityContainer from './UI/Quality/QualityContainer.jsx'
import WorkContainer from './UI/Work/WorkConatiner.jsx'
import Video from './modelCompoents/Video.jsx'
import VR from './modelCompoents/VR'

import ProdAni from './ProdAni.json'




function App() {

  const sheet = getProject('product Animation',{state:ProdAni}).sheet('Scene');
  
  return (
    <>
  <div style={{ position: 'relative',width:'100%',height:'100%' }}>
     <Canvas
     shadows

     gl={{physicallyCorrectiLights:true,preserveDrawingBuffer:true}}>
      
      
      <ScrollControls pages={4}   >
        <SheetProvider sheet={sheet}>
        <Scene/>
        </SheetProvider>

        <Scroll html>
          <ScrollPageContainer/>
          <QualityContainer/>
          <WorkContainer />

            </Scroll>
       </ScrollControls>
    <Video/>
    
     </Canvas>

     <Canvas id='secondcanvas'
     color='red'
        shadows
        gl={{ physicallyCorrectiLights: true, preserveDrawingBuffer: true }}
    style={{ position: 'absolute', top: '100%' }}
      >

        <Environment  background files={'./bg-vr.hdr'}/>
        {/* <color args={['#a9996f']} attach={'background'}/> */}
        <OrbitControls enableZoom={false} makeDefault />
        <VR />
      </Canvas>

      </div>
     
    </>
  )
}

export default App

const Scene=()=>
{
  const sheet=useCurrentSheet();
  const scroll=useScroll();

  useFrame(()=>{
    const sequenceLength=val(sheet.sequence.pointer.length)
    sheet.sequence.position=scroll.offset * sequenceLength
  })

  return <>
  <PerspectiveCamera theatreKey='Camera' makeDefault position={[1,1,1]} fov={90} near={0.1} far={70} />
      <color attach='background' args={['#BFB394']}/>
      
      
      <hemisphereLight  intensity={2}/>
      <Model />
  </>
};






