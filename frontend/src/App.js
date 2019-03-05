import React, { Component } from 'react';
import Header from './Header';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Main from './Main';
import Upload from './Upload';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        {/* passing the id to Main as a prop */}
        <Router>
          <div>
          <Header/>
          <Switch>
            <Route path='/' exact render = {() => <Redirect to='/videos/1' />} />
            <Route path="/videos/:id" render={(props)=><Main id={props.match.params.id}/>}  />
            <Route path="/upload" component={Upload}/>
          </Switch>
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;

