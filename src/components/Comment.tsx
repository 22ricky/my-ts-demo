import * as React from 'react';

interface CommentProps {
  author: string;
}

interface CommentState {
}

class Comment extends React.Component<CommentProps, CommentState> {
  public render() {
    return (
      <div>
        <h2>{this.props.author}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;