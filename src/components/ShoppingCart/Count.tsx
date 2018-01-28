import * as React from 'react';

interface CountProps {
  count: number;
  onCount: ( c: number ) => void;
}

interface CountState {}

class Count extends React.Component<CountProps, CountState> {
  handleClickAdd = () => this.props.onCount( this.props.count + 1 );
  handleClickRed = () => this.props.count > 0 && this.props.onCount( this.props.count - 1 );
  public render() {
    return (
      <div className="count-form">
        <input type="button" value="-" onClick={this.handleClickRed} />
        <input type="text"  value={`${this.props.count}`} readOnly={true} />
        <input type="button" value="+" onClick={this.handleClickAdd} />
      </div>
    );
  }
}

export default Count;