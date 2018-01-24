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
      <div className="comment-form">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.author}
              onChange={this.handleAuthorChange.bind( this )}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange.bind( this )}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSublit.bind( this )}>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentForm;