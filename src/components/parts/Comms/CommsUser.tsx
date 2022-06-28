import { REMOTE_VIDEO_ID } from "../../../consts"
import { Props_Element } from "../../types"
import { Props_CommsUser } from "./types"

const CommsUser = (props: Props_CommsUser) => {
    return (
        <section role='User Section' className='[ comms-user ] 
            [ margin-block-3 border-radius-cubed padding-1 ]'
            >
            <video  
                id={props.streamId} 
                playsInline 
                controls
                autoPlay 
                className='[ user__video ] [ border-radius-cubed ]' />

            <div className="user__controls">

            </div>
        </section>
    )
}

export default CommsUser