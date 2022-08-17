import React, {useState} from "react";

function VideoDetails({info}) {

    const [votes, setVotes] = useState({
        upvotes: info.upvotes,
        downvotes: info.downvotes
    });

    function handleUpvote() {
        setVotes({
            upvotes: ++votes.upvotes,
            downvotes: votes.downvotes
        });
    }

    function handleDownvote() {
        setVotes({
            upvotes: votes.upvotes,
            downvotes: ++votes.downvotes
        });
    }

    return(
        <div id='VideoDetails'>
            <h1>{info.title}</h1>
            <p>{info.views} Views | Uploaded {info.createdAt}</p>
            <div>
                <button onClick={handleUpvote}>{votes.upvotes} 👍</button>
                <button onClick={handleDownvote}>{votes.downvotes} 👎</button>
            </div>
        </div>
    );
}
export default VideoDetails;
