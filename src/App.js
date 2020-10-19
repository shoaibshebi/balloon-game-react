import React from 'react';
import Index from './Components/Index'
import Form from './Components/form' 
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Animate from './Components/Animate'
class App extends React.Component {

  
  render() {
      return(
        <BrowserRouter>
        <React.Fragment>
            <Switch>
                <Route exact path={'/'} render={() => {
                    return <Redirect to={'/Form'}/>
                }}/>
                <Route exact path={'/Form'} component={Form}/>
                <Route  path={'/balls/:id'} component={Animate}/>
                
            </Switch>
        </React.Fragment>
        </BrowserRouter>

      )
    
  }
}

export default App;