import React, { Fragment, Component } from 'react';
// 引入路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@components/Header';
// 引入route配置
import routes from '@config/routes';

class App extends Component {
   render() {
     return <Fragment>
       <Router>
         <Header />
         <Switch>
           {
             routes.map((route,index) => {
               return <Route
                 path={route.path}
                 component={route.component}
                 meta={route.meta}
                 key={index}
               />
             })
           }
         </Switch>
       </Router>

     </Fragment>
   }
}


export default App;