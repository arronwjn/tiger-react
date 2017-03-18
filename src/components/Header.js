import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Dialog from 'material-ui/Dialog';
// import SignUp from './SignUp'
// import SignIn from './SignIn'

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'


 class Header extends React.Component{
   constructor(){
     super();
     this.state = {
      open: false,
      dl:false,
      zc:false,
      username:'',
      password:'',
      name:'',
      action:'signin'
    };
   }
   handleTouchTap() {
    alert('onTouchTap triggered on the title component');
  }
  handleTouchTap(event){
   // This prevents ghost click.
   event.preventDefault();

   this.setState({
     open: true,
     anchorEl: event.currentTarget,
     dl:false,
     zc:false
   });
 };

 handleRequestClose(){
   this.setState({
     open: false,
   });
 };
 handleOpen(){
    this.setState({dl: true});
    this.setState({
      open: false,
    })
    this.setState({action:'signin'})
  };
  handleOpens(){
     this.setState({zc: true});
     this.setState({
       open: false
     })
     this.setState({action:'signup'})
   };
  handleClose(){
    this.setState({dl: false});
    this.setState({zc: false});
  };

  handleSubmit(e){
    e.preventDefault();
    let data={username:this.state.username,password:this.state.password}
    axios.post(`http://api.duopingshidai.com/user/${this.state.action}`,data)
    .then(res=>{
      if(res.data.userId){
        this.setState({zc:false})
      }
      this.setState({name:res.data.user})
      if(res.data.user){
        this.setState({dl:false})
      }
    })
    .catch(err=>{
      if(err.response){
        alert(err.response.data.msg)
      }else{
        console.log('Error',err)
      }
    })
  }
  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>首页</span>}
          iconElementLeft={<IconButton><ActionHome /></IconButton>}
          iconElementRight={
            <FlatButton
              onTouchTap={this.handleTouchTap.bind(this)}
              label={this.state.name?this.state.name:'登录/注册'}
            />
          }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem primaryText="登录" onTouchTap={this.handleOpen.bind(this)}/>
            <MenuItem primaryText="注册" onTouchTap={this.handleOpens.bind(this)}/>
          </Menu>
        </Popover>

        <Dialog
          title="登录"
          modal={false}
          open={this.state.dl}
          onRequestClose={this.handleClose.bind(this)}
        >
          <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                UserName
              </Col>
              <Col sm={5}>
                <FormControl type="UserName" placeholder="UserName" onChange={e=>this.setState({username:e.target.value})} value={this.state.username}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={5}>
                <FormControl type="password" placeholder="Password" onChange={e=>this.setState({password:e.target.value})} value={this.state.password}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={5}>
                <Button type="submit">
                  SignIn
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Dialog>

        <Dialog
          title="注册"
          modal={false}
          open={this.state.zc}
          onRequestClose={this.handleClose.bind(this)}
        >
          <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formHorizontalEmail" >
              <Col componentClass={ControlLabel} sm={2}>
                UserName
              </Col>
              <Col sm={5}>
                <FormControl type="UserName" placeholder="UserName" onChange={e=>this.setState({username:e.target.value})} value={this.state.username}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={5}>
                <FormControl type="password" placeholder="Password" onChange={e=>this.setState({password:e.target.value})} value={this.state.password}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={5}>
                <Button type="submit">
                  Sign up
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Dialog>
      </div>
    );
  }
}
export default Header;
