import { useEffect } from 'react'
import { ICON_HEADPHONE, ICON_MICROPHONE, ICON_PHONE, REMOTE_VIDEO_ID } from '../../../consts'
import { changeVideoAudio } from '../../../utils/funcs'
import IconButton from '../../modules/Buttons/IconButton'

const CommsControls = () => {
    return (
      <section className='[ comms-controls ] [ flex padding-1 padding-inline-2 gap-1 border-radius-100vw ]'>
          <IconButton 
            ariaLabel='Microphone' 
            variant='control'
            useActive
            isActive
            onInteract={(e, isActive) => null}
            >
              { ICON_MICROPHONE }
          </IconButton>
          <IconButton 
            ariaLabel='Headphone' 
            variant='control' 
            useActive 
            isActive

            onInteract={(e, isActive) => changeVideoAudio(REMOTE_VIDEO_ID, isActive ? 1 : 0)}
            >
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

  // else
  //   return (
  //     <div className="[ pos-relative margin-block-2 ]">
  //       <h2>No Mic Detected</h2>
  //       <div className='[ smooth-bar ]'></div>
  //     </div>
  //   )
}

export default CommsControls