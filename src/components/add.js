import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'
import Prodect from './prodect'


 class Add extends React.Component{
   constructor(){
     super()
     this.state={
       list:'',
       All:[],
       id:''
     }
   }
   handleClick(e){
     e.preventDefault();
     console.log(this.state.list)
     axios.post('http://api.duopingshidai.com/category',{name:this.state.list})
     .then(res=>{
       this.state.All.push(res.data.category)
       this.setState({All:this.state.All})
     })
     .catch(err=>
       alert(err.response.data.msg)
    )
   }
   componentWillMount(){
     axios.get('http://api.duopingshidai.com/category')
     .then(res=>
         {
           this.setState({All:res.data.categories})
           console.log(res)
       }
     )

   }
   handleDel(del){
     axios.delete(`http://api.duopingshidai.com/category?id=${del}`)
     .catch(err=>alert(err.response.data.msg))

       const posts = this.state.All.filter(post =>
          post._id !== del
       )

       this.setState({ All: posts });
   }

  render() {
    return (
      <div className='add'>
        <h1>添加商品分类</h1>
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" placeholder="添加商品名称" onChange={e=>this.setState({list:e.target.value})} value={this.state.list}/>
          </FormGroup>
          <Button type="submit" onClick={this.handleClick.bind(this)}>
            添加
          </Button>
        </Form>
        <Prodect/>
        <div>
          {this.state.All.map((item,id)=><li key={id}><span className="span-id">商品id:{item._id}</span>商品名称：{item.name}
          <Button  onClick={this.handleDel.bind(this,item._id)}>
            删除
          </Button>
        </li>)}
        </div>
      </div>
    );
  }
}
export default Add;
