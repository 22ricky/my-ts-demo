import * as React from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

interface Data {
  id: number;
  author: string;
  text: string;
}

interface CommentBoxProps {

}

interface CommentBoxState {
  data: Data[];
}

class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
  constructor( props: CommentBoxProps ) {
    super( props );
    this.state = {
      data: []
    };
  }

  public componentDidMount() {
    this.loadCommentsFromSever();
    setInterval( this.loadCommentsFromSever.bind( this ), 2000 );
  }

  public loadCommentsFromSever() {
    // console.log( Date() );
  }

  public handleCommentSubmit( comment: Data ) {
    comment.id = Date.now();
    const comments = this.state.data.concat( comment );
    this.setState({ data: comments });
  }

  public render() {
    return (
      <div>
        <h1>评论</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind( this )} />
      </div>
    );
  }
}

export default CommentBox;