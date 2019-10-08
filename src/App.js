import React, { Fragment, Component } from 'react';

import Header from '@components/Header';
import Home from '@pages/Home';

class App extends Component {
   render() {
     return <Fragment>
       <Header />
       <Home />
     </Fragment>
   }
}


export default App;