import React, { useState } from 'react'
import { createCubeCSSClass, prepareProps } from '../../../utils/funcs';
import { Props_IconButton } from './types';

const IconButton = (props: Props_IconButton) => {
    const _props = prepareProps(props, { 'compostClass': 'icon button', utilClass: 'fs-600' });

    const [isActive, setActive] = useState(false)

    return (
        <button 
            data-variant={_props.variant}
            data-secondary-variant={_props.secondaryVariant}
            data-active={isActive && props.useActive}

            onClick={(e) => {
                _props.onInteract && _props.onInteract(e, isActive);
                setActive(!isActive);
            }}

            className={createCubeCSSClass(_props)}>
            {
                _props.children
            }
        </button>
    )
}

export default IconButton