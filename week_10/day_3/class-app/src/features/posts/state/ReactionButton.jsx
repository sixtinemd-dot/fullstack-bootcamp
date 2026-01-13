import React from "react";
import { useDispatch } from "react-redux";
import { addreaction } from "./slice";

const reactionEmoji = {
    thumbsUp: "👍",
    heart: "❤️",
    wow: "😮",
};

const emojies = Object.entries(reactionEmoji)

const ReactionButton = ({id, reactions}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {
                emojies.map(([name, emoji]) => {
                    return(
                        <button 
                        key={name} 
                        className='reactionButton'
                        onClick={() => dispatch(addreaction({id, name}))}
                        >
                            {emoji} {reactions[name]}
                        </button>
                    )
                })}
        </div>
    )
}

export default ReactionButton