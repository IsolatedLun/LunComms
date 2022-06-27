import React from 'react'
import { EMPTY_IMG, REMOTE_ID } from '../../consts'

const CommsUser = () => {
    return (
    <section role='User Section' className='[ comms-user ] 
        [ margin-block-3 border-radius-cubed padding-block-7 padding-inline-8 ]'
        >
        <video id={REMOTE_ID} playsInline className='[ user__profile ] [ border-radius-round ]' />

        <div className="user__controls">

        </div>
    </section>
    )
}

export default CommsUser