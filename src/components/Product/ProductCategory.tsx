import * as React from 'react';

interface ProductCategoryProps {
  category: string;
}

interface ProductCategoryState {}

class ProductCategory extends React.Component<ProductCategoryProps, ProductCategoryState> {
  public render() {
    return (
      <tr>
        <th colSpan={2}>{this.props.category}</th>
      </tr>
    );
  }
}

export default ProductCategory;