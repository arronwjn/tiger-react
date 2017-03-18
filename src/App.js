import React from 'react';
import $ from 'jquery';
import Home from './components/Home';
import Index from './components/IndexRoute';
import {Router,Route,browserHistory,Redirect,IndexRoute} from 'react-router';


 class App extends React.Component{
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Index}/>
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
