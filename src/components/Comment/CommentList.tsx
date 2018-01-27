import * as React from 'react';
import Comment from './Comment';
import './Comment.css';

interface Data {
  id: number;
  author: string;
  text: string;
}

interface CommentListProps {
  data: Data[];
}

interface CommentListState {
}

class CommentList extends React.Component<CommentListProps, CommentListState> {
  public render() {
    const commentNodes = this.props.data.map(({ id, author, text }) =>
    <Comment key={`${id}`} author={author}>{text}</Comment> );
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
