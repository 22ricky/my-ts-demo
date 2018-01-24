import * as React from 'react';

interface Product {
  category: string;
  price: number;
  stocked: boolean;
  name: string;
}

interface ProductProps {
  product: Product;
}

interface ProductState {}

class Product extends React.Component<ProductProps, ProductState> {
  public render() {
    const { name, stocked, price } = this.props.product;
    return (
      <tr>
        <td>{stocked ? name : <span style={{ color: 'red' }}>{name}</span>}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default Product;