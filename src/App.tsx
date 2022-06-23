import Navbar from './components/layouts/Navbar'
import ControlButton from './components/modules/Buttons/ControlButton'
import { ICON_MICROPHONE } from './consts'

function App() {

  return (
    <>
      <Navbar />
      <main className='
        [ main-container ] 
        [ flex flex-direction-column align-items-center justify-content-space-between ]'>
        <section role='User Section' className='
          [ comms-user ] 
          [ margin-block-3 border-radius-cubed padding-block-7 padding-inline-8 ]'>
          <img className='[ user__profile ] [ border-radius-round ]' src="" />

          <div className="user__controls">

          </div>
        </section>

        <section className='[ comms-controls ] [ padding-2 border-radius-100vw ]'>
          <ControlButton ariaLabel='Microphone'>
            { ICON_MICROPHONE }
          </ControlButton>
        </section>
      </main>
    </>
  )
}

export default App
