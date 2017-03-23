import React from 'react'
import Content from './content'
import {Link} from 'react-router'
import axios from 'axios'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Img1 from '../images/lunbo-1.jpg';
import Img2 from '../images/lunbo-2.jpg';
import Img3 from '../images/lunbo-3.jpg';
import Img4 from '../images/lunbo-4.jpg';

let imgs=[Img1,Img2,Img3,Img4]

class IndexRoute extends React.Component{
  constructor(){
    super()
    this.state={
      products:[],
      id:'',
      name:'',
      poster:'',
      price:'',
      summary:''
    }
  }
  componentWillMount(){
    axios.get('http://api.duopingshidai.com/products?page=0&limit=10')
    .then(res=>{
      this.setState({
        products:res.data.products,name:res.data.products.name,
        price:res.data.products.price,summary:res.data.products.summary,poster:res.data.products.poster})
      console.log(res)})
      console.log(this.state.products)
  }
  handleAdd(){
    axios.request({url:'http://api.duopingshidai.com/shopping/add',method:'POST',headers:{'Authorization':localStorage.userId}})
    .then(res=>console.log(res))
  }
  render(){

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 'auto',
        height: 'auto',
        flexWrap:'wrap'
      },
      gridTitle:{
        marginLeft:'15px'
      },
      img:{
        boxSizing: 'border-box'
      }
    };

    return(

      <div>
        <div>
          <Content imgs={imgs}/>
        </div>
        <div style={styles.root}>
          <MuiThemeProvider >
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >

              {this.state.products.map(tile => (
                <GridTile
                  style={styles.gridTitle}
                  cols={0}
                  key={Math.random()}
                  title={tile.name}
                  subtitle={<span>价格：<b>{tile.price}</b></span>}
                  actionIcon={<IconButton onTouchTap={this.handleAdd.bind(this)}><AddShoppingCart color="white" /></IconButton>}
                >
                  <img src={tile.poster} style={styles.img}/>
                </GridTile>
              ))}
            </GridList>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
export default IndexRoute;
