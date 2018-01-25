import * as React from 'react';

interface PRODUCT {
  category: string;
  price: number;
  stocked: boolean;
  name: string;
}

interface ProductProps {
  product: PRODUCT;
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