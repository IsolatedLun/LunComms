import React from 'react'
import { EMPTY_IMG } from '../../consts'

const CommsUser = () => {
    return (
    <section role='User Section' className='[ comms-user ] 
        [ margin-block-3 border-radius-cubed padding-block-7 padding-inline-8 ]'
        >
        <img className='[ user__profile ] [ border-radius-round ]' src={EMPTY_IMG} />

        <div className="user__controls">

        </div>
    </section>
    )
}

export default CommsUser