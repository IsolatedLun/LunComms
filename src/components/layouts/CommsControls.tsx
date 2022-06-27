import { ICON_HEADPHONE, ICON_MICROPHONE, ICON_PHONE, ICON_WIFI, LOCAL_ID, REMOTE_ID } from '../../consts'
import IconButton from '../modules/Buttons/IconButton'
import { Props_CommsControls } from './types'

const CommsControls = (props: Props_CommsControls) => {
    return (
      <section className='[ comms-controls ] [ flex padding-1 padding-inline-2 gap-1 border-radius-100vw ]'>
          <IconButton 
            ariaLabel='Microphone' 
            variant='control'
            useActive
            onInteract={async(e, isActive) => null}
            >
              { ICON_MICROPHONE }
          </IconButton>
          <IconButton ariaLabel='Headphone' variant='control' useActive>
              { ICON_HEADPHONE }
          </IconButton>
          <IconButton 
            utilClass='fs-400 ' 
            ariaLabel='Open connection'
            variant='control'
            useActive 
            onInteract={() => props.startStreamFn(LOCAL_ID, REMOTE_ID)}
            >
              { ICON_WIFI }
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