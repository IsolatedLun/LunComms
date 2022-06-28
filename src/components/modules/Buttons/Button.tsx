import React, { useState } from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs'
import { Props_Button } from './types'

const Button = (props: Props_Button) => {
    const _props = prepareProps(props, { 'compostClass': 'button', utilClass: 'fs-600' });

    const [isActive, setActive] = useState(_props.isActive ? true : false);

    return (
        <button
            id={_props.id}
        
            data-variant={_props.variant}
            data-secondary-variant={_props.secondaryVariant}
            data-active={isActive && props.useActive}

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