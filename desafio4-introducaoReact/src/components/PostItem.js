import React from "react";
import { comment } from "postcss";

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} alt="" />
      <div className="post-information">
        <span className="author-name">{author.name}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

function PostComment({ comments }) {
  return (
    <div className="post-comment">
      <div className="divider">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} alt="" />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="content">{content}</p>
      <hr />
      <PostComment comments={comments} />
    </div>
  );
}

export default PostItem;
