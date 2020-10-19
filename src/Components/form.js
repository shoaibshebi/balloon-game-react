import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from 'react-router-dom'
 
class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            value:'',
            flag:1
        }
    }
    
   handleInput=(e)=>{
       
        var v=e.target.value;
        this.setState({value:v})
        if(this.state.value <=5 && this.state.value >=25){
            this.setState({flag:1})
        }else{
            this.setState({flag:0})
        }
   }
  
  render() {
      
      return(
        
      <>
            <h1 classNameName="text-primary">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/Form"> Balloon Game</NavLink>
                <div>
                    
                </div>
            </div>
        </nav>
            </h1>
        <form style={{marginTop:"100px"}}>
        <div className="form-group text-center">
            <label for="text">No of balloons</label>
            <input type="text" classNameName="form-control" onChange={this.handleInput} placeholder="enter the no of baloons"/>
            
                <Link to={`/balls/${this.state.value}`} classNameName="">
                <button disabled={this.state.flag} type="submit" classNameName="btn btn-primary">Submit</button>       
                    </Link>
        </div>
        </form>
        
        
       </>
      

      )
    
  }
}

export default Form;