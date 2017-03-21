import React from 'react';
import $ from 'jquery';
import Home from './components/Home';
import Add from './components/add';
import Pay from './components/pay';
import Index from './components/IndexRoute';
import {Router,Route,browserHistory,Redirect,IndexRoute,Link} from 'react-router';


 class App extends React.Component{
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Index}/>
            <Route path='/add' component={Add}/>
            <Route path='/pay' component={Pay}/>
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
