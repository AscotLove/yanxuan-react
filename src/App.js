import React, { Fragment, Component } from 'react';
// 引入路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 引入route配置
import routes from '@config/routes';
// 引入组件
import Header from '@components/Header';
import Footer from '@components/Footer';

class App extends Component {
  state={
    meta:false
  };
  changeMeta=(meta)=>{
    if(meta!==this.state.meta){
      this.setState({
        meta
      })
    }
  }
   render() {
     return <Fragment>
       <Router>
         <Header />
         <Switch>
           {/*{
             routes.map((route,index) => {
               return <Route
                 path={route.path}
                 render={()=>(<Home changeMeta={this.changeMeta} meta={route.meta}/>) }
                 // component={route.component}
                 key={index}
               />
             })
           }*/}
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
         <Footer/>
         {/*{
           this.state.meta?<Footer/>:""
         }*/}

       </Router>

     </Fragment>
   }
}


export default App;