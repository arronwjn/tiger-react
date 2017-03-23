import React from 'react';
import axios from 'axios'


 class App extends React.Component{
   constructor(){
     super()
     this.state={
       products:[],
       ids:[]
     }
   }
  componentWillMount(){
    axios.request({url:'http://api.duopingshidai.com/shopping/get',method:'GET',headers:{'Authorization':localStorage.userId}})
    .then(res=>
      console.log(res)
      // this.setState({products:res.data.user.shops})
    )

    axios.get('http://api.duopingshidai.com/product/detail/58d0809e81eaba5480e08d8b')
    .then(res=>console.log(res))
  }
  render() {

    return (
      <div>
        {this.state.products.map((item,index)=>
          <li key={index}>{item._id}</li>
        )}
      </div>
    );
  }
}
export default App;
