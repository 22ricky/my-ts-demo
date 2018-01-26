import * as React from 'react';
import SearchBar from '../components/Product/Searchbar';
import ProductTable from '../components/Product/ProductTable';

interface PRODUCT {
  category: string;
  price: number;
  stocked: boolean;
  name: string;
}

interface ProductProps {
  products: PRODUCT[];
}
interface ProductState {
  filter: string;
  inStockOnly: boolean;
}

class Product extends React.Component<ProductProps, ProductState> {
  constructor( props: ProductProps ) {
    super( props );
    this.state = {
      filter: '',
      inStockOnly: false
    };
  }

  public handleFilter( filter: string, inStockOnly: boolean ) {
    this.setState({ filter, inStockOnly });
  }
  
  public render() {
    return (
      <div className="wrapper">
        <SearchBar
          filter={this.state.filter}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter.bind( this )}
        />
        <ProductTable
          products={this.props.products}
          filter={this.state.filter}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default Product;