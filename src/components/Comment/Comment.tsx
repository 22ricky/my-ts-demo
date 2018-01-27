import * as React from 'react';

interface CommentProps {
  author: string;
}

interface CommentState {
}

class Comment extends React.Component<CommentProps, CommentState> {
  public render() {
    return (
      <div className="comment">
         <div className="comment-author">
          <span>{this.props.author}</span>：
        </div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Comment;