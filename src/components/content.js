import React from 'react';
import Img1 from '../images/lunbo-1.jpg';
import Img2 from '../images/lunbo-2.jpg';
import Img3 from '../images/lunbo-3.jpg';
import Img4 from '../images/lunbo-4.jpg';



 class Content extends React.Component{
   constructor(){
     super();
     this.state={
       start:0
     }
   }
   scrool(e){
     if(this.state.start+e>=4){
       return this.setState({start:0})
     }
     if(this.state.start+e<0){
       return this.setState({start:3})
     }
     return this.setState({start:this.state.start+e})
   }
   handleClick(e){
     clearInterval(this.interval);
     this.scrool(e-this.state.start)
     this.interval=setInterval(()=>this.scrool(1),2000)
   }
   componentDidMount(){
     this.interval=setInterval(()=>
       this.scrool(1)
     ,2000)
   }
   componentWillUnmount(){
     clearInterval(this.interval);
   }
   handlelick(){

   }
  render() {
    let ml=this.state.start*-790;
    let styles={
      lunbo:{
        width:'790px',
        overflow:'hidden',
        height: '340px',
        margin:'0 auto',
        marginTop:'50px'
      },
      ul:{
        width:'3160px',
        marginLeft:ml,
        transition:'margin-left 1s ease'
      }
    }
    return (
      <div className='content'>
        <div className='lunbo' style={styles.lunbo}>
          <ul style={styles.ul}>
            <li><img src={Img1}/></li>
            <li><img src={Img2}/></li>
            <li><img src={Img3}/></li>
            <li><img src={Img4}/></li>
          </ul>
          <button className='btn btn-prev' >&lt;</button>
          <button className='btn btn-next' >&gt;</button>
          <div className='a'>
            <span onClick={this.handleClick.bind(this,0)} style={{backgroundColor:this.state.start==0?'red':'rgba(0,0,0,0.4)'}}></span>
            <span onClick={this.handleClick.bind(this,1)} style={{backgroundColor:this.state.start==1?'red':'rgba(0,0,0,0.4)'}}></span>
            <span onClick={this.handleClick.bind(this,2)} style={{backgroundColor:this.state.start==2?'red':'rgba(0,0,0,0.4)'}}></span>
            <span onClick={this.handleClick.bind(this,3)} style={{backgroundColor:this.state.start==3?'red':'rgba(0,0,0,0.4)'}}></span>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
