import * as React from 'react';
import Comment from './Comment';

interface Data {
  id: number;
  author: string;
  text: string;
}

interface CommentListProps {
  data: Data[];
}

class CommentList extends React.Component<CommentListProps, {}> {
  public render() {
    const commentNodes = this.props.data.map(({ id, author, text }) =>
    <Comment key={`${id}`} author={author}>{text}</Comment> );
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
