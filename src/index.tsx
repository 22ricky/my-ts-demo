import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import CommentBox from './containers/CommentBox';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
}); 

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Hello />
    </Provider>
    <CommentBox />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
