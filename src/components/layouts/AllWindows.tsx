import { WINDOW_1, WINDOW_2, WINDOW_3 } from '../../consts'
import { createSignal, offerSignal } from '../../utils/funcs'
import Button from '../modules/Buttons/Button'
import ImageInput from '../modules/Inputs/ImageInput'
import TextInput from '../modules/Inputs/TextInput'
import Window from '../modules/Window/Window'
import { Props_AllWindows } from './types'

const AllWindows = (props: Props_AllWindows) => {
  return (
    <>
        <Window 
            title={WINDOW_1.title} 
            id={WINDOW_1.id} 
            minMaxHeight={[155, 155]}
            minMaxWidth={[435, 435]}
            compostClass='grid place-items-center width-100 margin-inline-auto'
            utilClass='gap-1'
            >
            <TextInput value={props.callInput} onInput={(e) => props.callInputSetter(e.currentTarget.value)} />
            <Button onInteract={() => createSignal(props.PC, props.fs, props.callInput)}>
              Connect
            </Button>
          </Window>

          <Window 
            title={WINDOW_2.title} 
            id={WINDOW_2.id} 
            minMaxHeight={[175, 400]}
            minMaxWidth={[435, 1000]}
            compostClass='flex flex-direction-column width-100 margin-inline-auto'
            utilClass='gap-1'
            >
            <TextInput value='' label='Username' />
            <ImageInput value={null} utilClass='width-max-content' />
            <Button>Save</Button>
          </Window>

          <Window 
            title={WINDOW_3.title} 
            id={WINDOW_3.id} 
            minMaxHeight={[175, 400]}
            minMaxWidth={[435, 1000]}
            compostClass='flex flex-direction-column width-100 margin-inline-auto'
            utilClass='gap-1'
            >
            <TextInput value={props.callCode} readOnly />
            <Button 
              onInteract={() => offerSignal(props.PC, props.fs, props.callCodeSetter)}>
                Generate call key
            </Button>
          </Window>
    </>
  )
}

export default AllWindows