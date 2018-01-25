import * as React from 'react';

interface SearchBarProps {
  filter: string;
  inStockOnly: boolean;
  onFilter: ( a: string, b: boolean ) => {};
}

interface SearchBarState {}

class SeacrchBar extends React.Component<SearchBarProps, SearchBarState> {

  public input: HTMLInputElement;
  public checkbox: HTMLInputElement;
  
  public handleFilter() {
    this.props.onFilter(
      this.input.value,
      this.checkbox.checked
    );
  }
  
  public render() {
    return (
      <form>
        <input
          value={this.props.filter}
          placeholder="请输入商品名称"
          onChange={this.handleFilter.bind( this )}
          ref={input => { if ( input ) { this.input = input; } }}
        />
        <p>
          <label>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleFilter.bind( this )}
              ref={checkbox => { if ( checkbox ) { this.checkbox = checkbox; } }}
            />
            只显示有货的
          </label>
        </p>
      </form>
    );
  }
}

export default SeacrchBar;