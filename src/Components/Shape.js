import React,{Component} from 'react';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import { render } from 'react-dom';

class  Shape extends Component {
    constructor(props){
        super(props)
        this.state={
            noOfBalloons:2
        }
    }
    render(){
    //     console.log(window.innerWidth);
    // console.log(window.innerHeight);
        return (
            <div  
              ref={el => {
                if (!el) return;
                // console.log('consoling rectangle ',el.getBoundingClientRect()); // get coordinate
              }}
              onClick={this.props.clicked}
              style={{
                display: "inline-block",
                //dynamic color and width
                width: `${this.props.color}px`,
                height: `${this.props.color}px`,

                //getting diff colors for each ballon
                background: `#CB${this.props.color}49`,
                border:'1px solid blue',
                borderRadius:'50%',
                marginLeft:'20px',
                
              }}
            ><h6 style={{marginLeft:"10px",marginTop:"50px"}}>{this.props.color}</h6></div>
          );
    }
   
  }

  export default Shape;