import React from 'react';
import Tab1 from './tabs/Tab1'
import Tab2 from './tabs/Tab2'
import Tab3 from './tabs/Tab3'
import Tab4 from './tabs/Tab4'



 class Content extends React.Component{
   constructor(){
     super();
     this.state={
       start:0,
       tab:0
     }
   }
   scrool(e){
     if(this.state.start+e>=4){
       return this.setState({start:0})
     }
     if(this.state.start+e<0){
       return this.setState({start:this.props.imgs.length-1})
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
   handleBtn(val){

     clearInterval(this.interval);
     this.scrool(val)
     this.interval=setInterval(()=>this.scrool(1),2000)
   }
   handleEnter(val){
     this.setState({tab:val})
   }
   handleLeave(){
     this.setState({tab:0})
   }
  render() {

    let ml=this.state.start*-790;
    let styles={
      lunbo:{
        width:'790px',
        overflow:'hidden',
        height: '340px',
        margin:'0 auto '

      },
      ul:{
        width:this.props.imgs.length*790+'px',
        marginLeft:ml,
        transition:'margin-left 1s ease'
      },
      a:{
        width:this.props.imgs.length*25+'px',
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:'4px 0',
        borderRadius:'12px',
        lineHeight:'10px'
      }
    }
    const tab=['女装/男装/内衣','鞋靴/箱包/配件','童装玩具/孕产/用品','家电/数码/手机','美妆/洗护/保健品','珠宝/眼镜/手表']
    return (
      <div className='content'>
        {this.state.tab==0?
          <div className='lunbo' style={styles.lunbo}>
            <ul style={styles.ul}>
              {this.props.imgs.map(item=><li key={Math.random()}><img src={item}/></li>)}
            </ul>
            <button className='btns btn-prev' onClick={this.handleBtn.bind(this,-1)}>&lt;</button>
            <button className='btns btn-next' onClick={this.handleBtn.bind(this,1)}>&gt;</button>
            <div className='a' style={styles.a}>
              {this.props.imgs.map((item,index)=><span key={index} onClick={this.handleClick.bind(this,index)} style={{backgroundColor:this.state.start==index?'#ff7144':'#fff'}}></span>)}
            </div>
          </div>:this.state.tab==1?
          <div onMouseEnter={this.handleEnter.bind(this,1)} onMouseLeave={this.handleLeave.bind(this)}><Tab1 /></div>:this.state.tab==2?
          <div onMouseEnter={this.handleEnter.bind(this,2)} onMouseLeave={this.handleLeave.bind(this)}><Tab2 /></div>:this.state.tab==3?
          <div onMouseEnter={this.handleEnter.bind(this,3)} onMouseLeave={this.handleLeave.bind(this)}><Tab3 /></div>:this.state.tab==4?
          <div onMouseEnter={this.handleEnter.bind(this,4)} onMouseLeave={this.handleLeave.bind(this)}><Tab4 /></div>:<div>csdc</div>
        }
        <div className='tab'>
          <h3>主题市场</h3>
          <ul>
            <li onMouseEnter={this.handleEnter.bind(this,1)} onMouseLeave={this.handleLeave.bind(this)}><i className="fa fa-female" aria-hidden="true"></i>&nbsp;女装/男装/内衣</li>
            <li onMouseEnter={this.handleEnter.bind(this,2)} onMouseLeave={this.handleLeave.bind(this)}><i className="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp;鞋靴/箱包/配件</li>
            <li onMouseEnter={this.handleEnter.bind(this,3)} onMouseLeave={this.handleLeave.bind(this)}><i className="fa fa-taxi" aria-hidden="true"></i>&nbsp;童装玩具/孕产/用品</li>
            <li onMouseEnter={this.handleEnter.bind(this,4)} onMouseLeave={this.handleLeave.bind(this)}><i className="fa fa-desktop" aria-hidden="true"></i>&nbsp;家电/数码/手机</li>
            <li onMouseEnter={this.handleEnter.bind(this,5)} onMouseLeave={this.handleLeave.bind(this)}><i className="fa fa-tag" aria-hidden="true"></i>&nbsp;美妆/洗护/保健品</li>
            <li onMouseEnter={this.handleEnter.bind(this,6)} onMouseLeave={this.handleLeave.bind(this)}><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;珠宝/眼镜/手表</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Content;
