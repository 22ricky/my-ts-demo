import * as React from 'react';
import ProductCategory from './ProductCategory';
import Product from './Product';

interface PRODUCT {
  category: string;
  price: number;
  stocked: boolean;
  name: string;
}

interface ProduceTableProps {
  products: PRODUCT[];
  filter: string;
  inStockOnly: boolean;
}

interface ProductTableState {}

class ProductTable extends React.Component<ProduceTableProps, ProductTableState> {
  public render() {
    const { products, filter, inStockOnly } = this.props;
    const rows: React.ReactElement<HTMLElement>[] = [];
    let lastCategory: string;
    products.map( product => {
      if ( product.name.indexOf( filter ) === -1 || ( !product.stocked && inStockOnly ) ) {
        return;
      }
      if ( product.category !== lastCategory ) {
        rows.push( <ProductCategory category={product.category} key={product.category} /> );
      }
      rows.push( <Product product={product} key={product.name} /> );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;