import { useEffect, useState } from 'react'
import AllWindows from './components/layouts/AllWindows'
import CommsControls from './components/parts/Comms/CommsControls'
import CommsUser from './components/parts/Comms/CommsUser'
import Navbar from './components/layouts/Navbar'
import WindowBar from './components/layouts/WindowBar'
import { Props_GlobalState } from './components/types'
import { LOCAL_VIDEO_ID, REMOTE_VIDEO_ID, RTC_PEER_CONFIG } from './consts'
import { RTC_Init } from './utils/rtcFuncs'

const PC = new RTCPeerConnection(RTC_PEER_CONFIG);
function App(props: Props_GlobalState) {
  const [localStream, setLocalStream] = useState(new MediaStream());

  const [callCode, setCallCode] = useState('');
  const [codeInput, setCodeInput] = useState('');

  useEffect(() => {
    RTC_Init(PC, LOCAL_VIDEO_ID).then(stream => setLocalStream(stream));
  }, [])

  return (
    <>
      <Navbar />
      <main className='
        [ main-container ] 
        [ flex flex-direction-column align-items-center justify-content-space-between ]'
        >
        <section role='Video feed section' className='[ flex gap-1 ]'>
          <CommsUser streamId={LOCAL_VIDEO_ID} />
          <CommsUser streamId={REMOTE_VIDEO_ID} />
        </section>
        <CommsControls />
        <WindowBar />
      </main>

      <AllWindows />
    </>
  )
}

export default App
