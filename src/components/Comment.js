import React from 'react';

function Comment ({info}) {

return (

    <div>
        <h3>{info.user}</h3>
        <p>{info.comment}</p>
    </div>
)

}
export default Comment;