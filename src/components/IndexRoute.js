import React from 'react'
import Content from './content'
import {Link} from 'react-router'
import axios from 'axios'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    // axios.post('http://api.duopingshidai.com/shopping/add',{product:})
    // .then(res=>console.log(res))
  }
  render(){

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
      }
    };


    return(
      <div>
        <div>
          <Content />
        </div>
        <div style={styles.root}>
          <MuiThemeProvider>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >

              {this.state.products.map(tile => (
                <GridTile

                  key={Math.random()}
                  title={tile.name}
                  subtitle={<span>价格：<b>{tile.price}</b></span>}
                  actionIcon={<IconButton onTouchTap={this.handleAdd.bind(this)}><AddShoppingCart color="white" /></IconButton>}
                >
                  <img src={tile.poster} />
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
