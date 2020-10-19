import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Shape from './Shape'
import bounceInUp from 'react-animations/lib/bounce-in-up';
 

const styles = {
  bounce: {
    animation: '6s',
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
  },
}

var flag=1;
class Animate extends React.Component {
constructor(props){
    super(props)

    //populating array for no of ballons
    var arr=Array();
    for (let index = 0; index < this.props.match.params.id; index++) {
      arr.push(parseInt(Math.random()*10))
    }
    this.state={
        noOfBalloons:arr,
        score:0,
        flag:1
    } 
   
  }
  
  balloonClick=(e)=>{
    
    //Reducing no of ballons
    this.state.noOfBalloons.shift()
    this.setState({noOfBalloons:this.state.noOfBalloons})

    //calculating score
    this.setState({score:parseInt(this.props.match.params.id)-this.state.noOfBalloons.length});
    console.log('this is score ',this.state.score)
    
  }
  
  render() {

    //        Timer for 30 secs
    setTimeout(() => {
      var s=parseInt((this.state.score/this.props.match.params.id)*100);
      console.log(s);
      this.setState({flag:0})
      this.setState({noOfBalloons:[]});
      if(s>70){
        alert('You win, Your score is ',s)
      }else{
        alert('You loos , Your score is : ',s)
      }
      // this.props.history.push('/balls/msg');

  }, 30000);
      return(
        <>
        <StyleRoot>
          
        <div className="" style={styles.bounceInUp}>
        {
          this.state.noOfBalloons.map((element,index) => {
            var color=(Math.random()*31)+5;
            color=parseInt(color);
            return   <Shape clicked={this.balloonClick} key={index} color={color}/> 
          })
        }
        </div>
         
       
      </StyleRoot>
      </>

      )
    
  }
}

export default Animate;