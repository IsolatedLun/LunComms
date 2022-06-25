import React, { useEffect, useState } from 'react'
import { ICON_HEADPHONE, ICON_MICROPHONE, ICON_PHONE } from '../../consts'
import Button from '../modules/Buttons/Button'
import IconButton from '../modules/Buttons/IconButton'
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
          setChunks(prevState => [...prevState, e.data])
          console.log(chunks)
        }
      
        recorder.onstop = () => {
          let audio = new Audio(
            window.URL.createObjectURL(new Blob(chunks, { type: 'audio/ogg' }))
            )
          document.body.appendChild(audio)
          audio.play()

          console.log(chunks);
        }
      })
  }, [])

  if(recorder)
    return (
      <section className='[ comms-controls ] [ flex padding-1 padding-inline-2 gap-1 border-radius-100vw ]'>
          <IconButton 
            ariaLabel='Microphone' 
            variant='control'
            useActive
            onInteract={(e, isActive) => {
              if(isActive)
                recorder.start(10)
              else
                recorder.stop()
            }}
            >
              { ICON_MICROPHONE }
          </IconButton>
          <IconButton ariaLabel='Headphone' variant='control' useActive>
              { ICON_HEADPHONE }
          </IconButton>
          <IconButton 
            utilClass='fs-400 margin-inline-start-2' 
            ariaLabel='Close call' 
            variant='close'>
              { ICON_PHONE }
          </IconButton>
      </section>
    )
  else
    return <>LOL</>
}

export default CommsControls