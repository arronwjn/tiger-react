import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'



 class Prodect extends React.Component{
   constructor(){
     super()
     this.state={
       id:'',
       name:'',
       des:'',
       price:'',
       img:'',
       idProdect:''
     }
   }
   handleadd(e){
     e.preventDefault();
     axios.post('http://api.duopingshidai.com/product/new',
     {name:this.state.name,summary:this.state.des,price:this.state.price,poster:this.state.img,category:this.state.id})
     .then(res=>alert(res.data.msg))
     .catch(err=>alert(res.response.data.msg))
   }
   handleGetprodect(){
     axios.get(`http://api.duopingshidai.com/product/detail/${this.state.idProdect}`)
     .then(res=>console.log(res))
   }
   handleGetprodects(){
     axios.get('http://api.duopingshidai.com/products?page=0&limit=50')
     .then(res=>console.log(res))
   }
  render() {
    return (
      <div>
        <h1>添加商品</h1>
        <FormGroup controlId="formInlineName">
          <ControlLabel>商品名称：</ControlLabel>
          <FormControl type="text" placeholder="新增商品名称" onChange={e=>this.setState({name:e.target.value})} value={this.state.name}/>
          <ControlLabel>商品描述：</ControlLabel>
          <FormControl type="text" placeholder="商品描述" onChange={e=>this.setState({des:e.target.value})} value={this.state.des}/>
          <ControlLabel>商品价格：</ControlLabel>
          <FormControl type="text" placeholder="商品价格" onChange={e=>this.setState({price:e.target.value})} value={this.state.price}/>
          <ControlLabel>商品图片：</ControlLabel>
          <FormControl type="text" placeholder="商品图片外链地址" onChange={e=>this.setState({img:e.target.value})} value={this.state.img}/>
          <ControlLabel>分类Id：</ControlLabel>
          <FormControl type="text" placeholder="分类Id" onChange={e=>this.setState({id:e.target.value})} value={this.state.id}/>
        </FormGroup>
        <Button type="submit" onClick={this.handleadd.bind(this)}>
          添加商品
        </Button><br/>
        <ControlLabel>获取单个商品：</ControlLabel>
        <FormControl type="text" placeholder="获取单个商品" onChange={e=>this.setState({idProdect:e.target.value})} value={this.state.idProdect}/>
        <Button onClick={this.handleGetprodect.bind(this)}>
          获取
        </Button>
        <Button onClick={this.handleGetprodects.bind(this)}>
          获取部分商品
        </Button>
      </div>
    );
  }
}
export default Prodect;
