import * as React from 'react';
import Count from './Count';

interface PRODUCT {
  id: string;
  name: string;
  price: number;
}

interface ProductProps {
  product: PRODUCT;
  count: number;
  onCount: ( c: number ) => void;
}

interface ProductState {}

class Product extends React.Component<ProductProps, ProductState> {
  public render() {
    const { id, name, price } = this.props.product;
    const count = this.props.count;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>￥{price}</td>
        <td><Count count={count} onCount={this.props.onCount} /></td>
        <td>￥{price * count}</td>
      </tr>
    );
  }
}

export default Product;