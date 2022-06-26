import React, { useId } from 'react'
import { createCubeCSSClass, prepareProps, propOrDefault } from '../../../utils/funcs'
import { Props_TextInput } from './types'

const TextInput = (props: Props_TextInput) => {
    const _props = prepareProps(props, { 
        compostClass: 'input', 
        utilClass: 'border-radius-cubed padding-inline-1 width-100vw' 
    })
    const id = useId();

    return (
        <div className="[ input-container ] [ flex flex-direction-column ] [ ]">
            {
                props.label && <label htmlFor={propOrDefault(props.id, id)}>
                    { props.label }
                </label>
            }
            <input 
                id={propOrDefault(props.id, id)}
                className={createCubeCSSClass(_props)}

                data-variant={_props.variant}
                data-secondary-variant={_props.secondaryVariant}
                value={_props.value}

                onInput={(e) => _props.onInput ? _props.onInput(e) : null}

                type='text' />
        </div>
    )
}

export default TextInput