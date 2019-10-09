import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import { Spin } from 'antd';

import App from './App';

render(
  <Suspense fallback={<Spin size="large"/>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
)