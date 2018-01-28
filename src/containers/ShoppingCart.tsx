import * as React from 'react';
import Product from '../components/ShoppingCart/Product';
import Total from '../components/ShoppingCart/Total';

interface PRODUCT {
  id: string;
  name: string;
  price: number;
}

interface ProductCount {
  pid: string;
  count: number;
}

interface ShoppingCartProps {
  products: PRODUCT[];
}

interface ShoppingCartState {
  counts: ProductCount[];
}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
  constructor( props: ShoppingCartProps ) {
    super( props );
    const counts: ProductCount[] = props.products.map( p => ({ pid: p.id, count: 0 }));
    this.state = {
      counts
    };
  }

  public render() {
    const products = this.props.products;
    const counts = this.state.counts;
    const productNodes = products.map( product => {
      const productCount = counts.filter( count => count.pid === product.id )[0];
      return (
        <Product
          key={product.id}
          product={product}
          count={productCount.count}
          onCount={count => {
            const countsSlice = counts.slice();
            countsSlice.splice( counts.indexOf( productCount ), 1, { pid: productCount.pid, count });
            this.setState({ counts: countsSlice });
          }}
        />
      );
    });
    return (
      <div className="wrapper">
        <div className="shoppingCart-table">
          <table>
            <thead>
              <tr>
                <th>产品id</th>
                <th>产品名称</th>
                <th>产品单价</th>
                <th>产品数量</th>
                <th>产品总价</th>
              </tr>
            </thead>
            <tbody>
              {productNodes}
            </tbody>
            <Total
              total={counts.map( productCount => {
                return products.filter( product => product.id === productCount.pid )[0].price * productCount.count;
              }).reduce(( sum, c ) => sum + c, 0)}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;