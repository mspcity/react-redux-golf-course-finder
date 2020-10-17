import React from 'react'
import CommentShow from './CommentShow';

const CommentsList = ({ comments }) => {

  const renderComments = comments.map(comment => 
  <CommentShow key={comment.id} comment={comment} />
  );
  return (
    <div className="comments">
      <p className="bold-text">Comments:</p>
      {renderComments}
    </div>
  )
}

export default CommentsList;


