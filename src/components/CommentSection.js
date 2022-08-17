import React, {useState} from "react"
import Comment from "./Comment"

function CommentSection({comments}) {
    const [showComments, setShowComments] = useState(true);

    function handleShowComments() {
        setShowComments(() => !showComments);
    }

    const commentArr = comments.map((comment) => {
        if (showComments) {
            return <Comment key={comment.id} info={comment}/>
        } else {
            return '';
        }
    });

    return(
        <div>
            <button onClick={handleShowComments}>{showComments ? 'Hide' : 'Show'} Comments</button>
            <hr/>
            <h2>{comments.length} Comments</h2>
            {commentArr}
        </div>
    );
}

export default CommentSection;