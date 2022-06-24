import React, { useState } from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs'
import { Props_ControlButton } from './types'

const Button = (props: Props_ControlButton) => {
    const _props = prepareProps(props, { 'compostClass': 'icon button', utilClass: 'fs-600' });

    const [isActive, setActive] = useState(false)

    return (
        <button 
            data-variant={_props.variant}
            data-secondary-variant={isActive ? 'active' : 'default'}

            onClick={(e) => {
                _props.onInteract && _props.onInteract(e, !isActive);
                setActive(!isActive);
            }}

            className={createCubeCSSClass(_props)}>
            {
                _props.children
            }
        </button>
    )
}

export default Button