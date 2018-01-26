import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import CommentBox from './containers/CommentBox';
import Product from './containers/Product';
import ShoppingCart from './containers/ShoppingCart';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

interface PRODUCT {
  category: string;
  price: number;
  stocked: boolean;
  name: string;
}

const PRODUCTS: PRODUCT[] = [
  {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: 99.99, stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'}
];

interface Products {
  id: string;
  name: string;
  price: number;
}

const Products: Products[] = [
  { id: '1', name: '背包', price: 49.99 },
  { id: '2', name: '衣服', price: 34 }
];

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Hello />
    </Provider>
    <CommentBox />
    <Product products={PRODUCTS} />
    <ShoppingCart products={Products} />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
