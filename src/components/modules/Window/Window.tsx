import React, { useState } from 'react'
import { createCubeCSSClass, getMoveWindowData, IsElementOutOfBounds, prepareProps } from '../../../utils/funcs'
import { Props_MouseMoveOffset } from '../../../utils/types'
import Button from '../Buttons/Button'
import { Props_Window } from './types'

const Window = (props: Props_Window) => {
    const _props = prepareProps(props, { 
        compostClass: 'window__content', 
        utilClass: 'padding-1 padding-block-2 pos-relative' 
    });

    const [isMouseDown, setIsMouseDown] = useState(false)
    const [mouseDownData, setMouseDownData] = useState<Props_MouseMoveOffset>({
        offsetX: 0,
        offsetY: 0
    })

    const styles = {
        '--max-width': _props.minMaxWidth[1] + 'px',
        '--min-width': _props.minMaxWidth[0] + 'px',
        '--max-height': _props.minMaxHeight[1] + 'px',
        '--min-height': _props.minMaxHeight[0] + 'px'
    } as React.CSSProperties

    function moveWindow(e: React.MouseEvent<any>, windowId: string) {
        e.preventDefault();
        
        const windowEl = document.getElementById(windowId) as HTMLElement;

        if(isMouseDown) {
            windowEl.style.left = (e.clientX + mouseDownData.offsetX) + 20 + 'px'
            windowEl.style.top = (e.clientY + mouseDownData.offsetY) - 20 + 'px'
        }
    }

    return (
        <div 
            id={_props.id} 
            style={styles}
            onMouseLeave={() => setIsMouseDown(false)}
            onMouseUp={() => setIsMouseDown(false)}
            onMouseMove={(e) => moveWindow(e, _props.id)}
            className='[ window ] [ pos-absolute border-radius-cubed overflow-auto ]'>

            <header 
                onMouseDown={(e) => {
                    setIsMouseDown(true)
                    setMouseDownData(getMoveWindowData(e));
                }}
                onMouseUp={() => setIsMouseDown(false)}
                onMouseMove={(e) => moveWindow(e, _props.id)}
                className='[ window__header ] [ flex justify-content-space-between padding-inline-1 ]'>
                <div>
                    <p className='[ text-disable ]'>{ props.title }</p>
                </div>
                
                <div className='[ flex align-items-center justify-content-start ]'>
                    <Button onInteract={(e) => null} variant='window'>
                    </Button>
                </div>
            </header>   
            <div className={createCubeCSSClass(_props)}>
                { props.children }
            </div>

            
        </div>
    )
}

export default Window