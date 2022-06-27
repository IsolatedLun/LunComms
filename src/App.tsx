import { useEffect, useState } from 'react'
import AllWindows from './components/layouts/AllWindows'
import CommsControls from './components/layouts/CommsControls'
import CommsUser from './components/layouts/CommsUser'
import Navbar from './components/layouts/Navbar'
import WindowBar from './components/layouts/WindowBar'
import { Props_GlobalState } from './components/types'
import { LOCAL_ID, RTC_PEER_CONFIG } from './consts'

const PC = new RTCPeerConnection(RTC_PEER_CONFIG);
function App(props: Props_GlobalState) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(new MediaStream());

  const [callCode, setCallCode] = useState('');
  const [codeInput, setCodeInput] = useState('');

  async function startStreams(localId: string, remoteId: string) {
      const localEl = document.getElementById(localId) as HTMLVideoElement;
      const remoteEl = document.getElementById(remoteId) as HTMLVideoElement;

      setLocalStream(await navigator.mediaDevices.getUserMedia({ video: true, audio: true }));

      localStream?.getVideoTracks().forEach(track => PC.addTrack(track, localStream));

      PC.ontrack = (e) => {
        e.streams[0].getVideoTracks().forEach(track => remoteStream?.addTrack(track))
        alert('track received')
      }

      localEl.srcObject = localStream;
      remoteEl.srcObject = remoteStream;
  }

  return (
    <>
      <Navbar />
      <video hidden id={LOCAL_ID}></video>
      <main className='
        [ main-container ] 
        [ flex flex-direction-column align-items-center justify-content-space-between ]'
        >
        <CommsUser />
        <CommsControls startStreamFn={startStreams} />
        <WindowBar />
      </main>

      <AllWindows 
        PC={PC}
        fs={props.fs}

        callCode={callCode}
        callCodeSetter={setCallCode}

        callInput={codeInput}
        callInputSetter={setCodeInput}
      />
    </>
  )
}

export default App
