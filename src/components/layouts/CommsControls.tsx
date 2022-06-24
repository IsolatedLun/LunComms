import React, { useEffect, useState } from 'react'
import { ICON_HEADPHONE, ICON_MICROPHONE, ICON_PHONE } from '../../consts'
import Button from '../modules/Buttons/Button'
import { Props_CommsControls } from './types'

const CommsControls = () => {
  const [recorder, setRecorder] = useState<MediaRecorder>();
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [isRecoring, setIsRecording] = useState(false)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({'audio': true, 'video': false})
      .then(stream => { 
        let recorder = new MediaRecorder(stream)
        setRecorder(recorder);

        recorder.ondataavailable = (e) => {
          setChunks(() => { return [...chunks, e.data] })
        }
      
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" })
        }
      })
  }, [])

  if(recorder)
    return (
      <section className='[ comms-controls ] [ flex padding-1 padding-inline-2 gap-1 border-radius-100vw ]'>
          <Button 
            ariaLabel='Microphone' 
            variant='control'
            onInteract={(e, isActive) => {
              if(isActive)
                recorder.start(1000)
              else
                recorder.stop()
            }}
            >
              { ICON_MICROPHONE }
          </Button>
          <Button ariaLabel='Headphone' variant='control'>
              { ICON_HEADPHONE }
          </Button>
          <Button utilClass='fs-400 margin-inline-start-2' ariaLabel='Close call' variant='close'>
              { ICON_PHONE }
          </Button>

          { isRecoring }
      </section>
    )
  else
    return <>LOL</>
}

export default CommsControls