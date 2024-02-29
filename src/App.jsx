import {Canvas,useFrame} from '@react-three/fiber'
import { OrbitControls,Scroll,ScrollControls,useScroll } from '@react-three/drei'
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



     {/* <Canvas id='secondcanvas'
     
        shadows
        gl={{ physicallyCorrectLights: true, preserveDrawingBuffer: true }}
      >
        <SheetProvider sheet={sheet}>
          <Scene2 />
        </SheetProvider>
      </Canvas> */}
     
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

// const Scene2 = () => {
  
//   // const sheet = useCurrentSheet();
//   // const scroll = useScroll();

//   // useFrame(() => {
//   //   const sequenceLength = val(sheet.sequence.pointer.length);
//   //   sheet.sequence.position = scroll.offset * sequenceLength;
//   // });

//   return (
//     <>
      
//       <PerspectiveCamera theatreKey='Camera' makeDefault position={[1, 2, 6]} fov={90} near={0.1} far={70} />
//       <color attach='background' args={['#BFB394']} />
//       <hemisphereLight intensity={2} />
//       <VR/>
//     </>
//   );
// };


