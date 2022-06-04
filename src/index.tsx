import React from 'react';
import ReactDOM from 'react-dom/client';
import initStore from './store';
import {Provider} from "react-redux";
import App from "./components/App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = initStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
          <App/>
    </Provider>
);
