import React from 'react';
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


 class Home extends React.Component{
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
    );
  }
}
export default Home;
