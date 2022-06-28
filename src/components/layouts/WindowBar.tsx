import React from 'react'
import { ICON_PLUG, ICON_USER, WINDOW_1, WINDOW_2, WINDOW_3 } from '../../consts'
import { toggleElement } from '../../utils/funcs'
import IconButton from '../modules/Buttons/IconButton'

const WindowBar = () => {
  return (
    <div className='[ window-bar ] [ padding-1 padding-block-2 pos-absolute border-radius-cubed text-center ]'>
        <p className='[ margin-bottom-2 ]'>Apps</p>

        <div className='[ flex flex-direction-column gap-1 ]'>
            <IconButton 
                ariaLabel={`Open window ${WINDOW_1.title}`} 
                onInteract={() => toggleElement(WINDOW_1.id, true)}
                variant='control'>
                { 'J' }
            </IconButton>

            <IconButton 
                ariaLabel={`Open window ${WINDOW_2.title}`} 
                onInteract={() => toggleElement(WINDOW_2.id, true)}
                variant='control'>
                { ICON_USER }
            </IconButton>

            <IconButton 
                ariaLabel={`Open window ${WINDOW_3.title}`} 
                onInteract={() => toggleElement(WINDOW_3.id, true)}
                variant='control'>
                { 'C' }
            </IconButton>
        </div>
    </div>
  )
}

export default WindowBar