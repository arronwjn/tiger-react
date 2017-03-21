import React from 'react';
import Header from './Header'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


 class Home extends React.Component{
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Home;
