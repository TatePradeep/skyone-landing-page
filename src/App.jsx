import {Canvas,useFrame} from '@react-three/fiber'
import { Environment, OrbitControls,Scroll,ScrollControls,useScroll,Html } from '@react-three/drei'
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

     <Canvas
      id="secondcanvas"
      color="red"
      shadows
      gl={{ physicallyCorrectLights: true, preserveDrawingBuffer: true }}
      style={{ position: 'absolute', top: '100%' }}
    >
      <Environment background files={'./bg-vr.hdr'} />
      {/* <color args={['#a9996f']} attach={'background'}/> */}
      <OrbitControls enableZoom={false} makeDefault />
      <VR />

      
        <Html>
          <div style={{display:'flex',flexDirection:'column',width:'200rem',marginTop:'-200px',marginLeft:'-700px',color:'#E6D5B8', userSelect: 'none'}}>
            <h1 style={{fontSize:'40px'}}>Dive into reality through VR</h1>
            <h4>
      VR makes it easier to visualize a design than to create a presentation to<br />
       represent the same. This helps immensely achieve design cognizance<br />
      for all stakeholders.
    </h4>

          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              display: 'flex',
              pointer:'cursor',
             
            }}
          >
            <button style={{color: "#E6D5B8",background: "transparent",display:'flex',border: "1px solid #E6D5B8",cursor: "pointer",height:'40px',justifyContent:'center',alignItems:'center',position: 'relative',marginTop: '250px',marginLeft:'500px', userSelect: 'none'}}>Explore More
            <div style={{fontSize: '24px',paddingLeft:'5px',marginTop:'-3px'}}>&#8594;</div>
            </button>
            
          </div>
        </Html>
      
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

  // const [currentPage,setCurrentPage]=useAtom(currentPageAtom);
  // const sequenceLength=val(sheet.sequence.pointer.length)

  // function logCurrentPageCallback(scroll,callback)
  // {
  //   const currentPage=Math.floor(scroll.offset*scroll.pages)+1;
  //   console.log("current page:",currentPage)
  //   callback(currentPage);
  // }
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






