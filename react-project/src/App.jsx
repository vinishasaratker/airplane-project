import Login from './pages/Login'
import Prism from './pages/animation-login'

function App() {
  return (
    <>
 <div style={{ width: '100%', height: '800px', position: 'relative' }} className='text-amber-400'>
  <Prism
    animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={3.6}
    hueShift={0}
    colorFrequency={1}
    noise={0}
    glow={1}
  />
</div>
        <Login />
     

    </>
  )
}

export default App
