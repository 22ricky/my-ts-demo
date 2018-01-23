import * as React from 'react';

interface CommentFormProps {
  onCommentSubmit: ({ author, text }: CommentFormState) => {};
}

interface CommentFormState {
  author: string;
  text: string;
}

class CommentForm extends React.Component<CommentFormProps, CommentFormState> {
  constructor( props: CommentFormProps ) {
    super( props );
    this.state = {
      author: '',
      text: ''
    };
  }

  public handleAuthorChange( e: React.FormEvent<HTMLInputElement> ) {
    this.setState({ author: e.currentTarget.value });
  }

  public handleTextChange( e: React.FormEvent<HTMLInputElement> ) {
    this.setState({ text: e.currentTarget.value });
  }

  public handleSublit( e: React.FormEvent<HTMLInputElement> ) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if ( !author || !text ) { return; }
    this.props.onCommentSubmit({ author, text });
    this.setState({ author: '', text: '' });
  }
  
  public render() {
    return (
      <form onSubmit={this.handleSublit.bind( this )} className="commentForm">
        <input
          type="text"
          placeholder="请输入你的名字"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind( this )}
        />
        <input
          type="text"
          className="text"
          placeholder="请输入要评论的内容"
          value={this.state.text}
          onChange={this.handleTextChange.bind( this )}
        />
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default CommentForm;