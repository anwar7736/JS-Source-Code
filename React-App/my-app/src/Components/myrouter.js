import React,{Component} from "react";
import {Route, Switch} from 'react-router-dom';
import Form from './Form';
import Text from './Text';
import About from './Pages/About';
import Services from './Pages/Services';
import NotFound from './Pages/NotFound';
class MyRouter extends React.Component{
  render()
  {
    return(<div>
            <Switch>
               <Route exact path="/" component={Form}/> 
               <Route path="/about" component={About}/> 
               <Route path="/services" component={Services}/> 
               <Route path="/contact" component={Text}/> 
               <Route component={NotFound}/> 
            </Switch>
          </div>);
  }
}
export default MyRouter;