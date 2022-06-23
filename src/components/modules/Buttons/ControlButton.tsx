import React from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs'
import { Props_ControlButton } from './types'

const ControlButton = (props: Props_ControlButton) => {
    const _props = prepareProps(props, { 'compostClass': 'icon button', utilClass: 'fs-600' });

    return (
        <button 
            data-variant={_props.variant}
            data-secondary-variant='control'

            onClick={(e) => _props.onInteract && _props.onInteract(e)}

            className={createCubeCSSClass(_props)}>
            {
                _props.children
            }
        </button>
    )
}

export default ControlButton