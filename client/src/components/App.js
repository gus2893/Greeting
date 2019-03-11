import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import CameraComponent from './CameraComponent';
import Header from './Header';
import history from '../history';


class App extends Component {
  render() {
    return (
      <Container>       
        <Router history={history}>
            <div>
              <Header/>
              <Route path="/Greeting/" exact component={StreamList}/>
              <Route path="/Greeting/new" exact component={CameraComponent}/>
              <Route path="/Greeting/edit/:id" exact component={StreamEdit}/>
              <Route path="/Greeting/delete/:id" exact component={StreamDelete}/>
            </div>
        </Router>
      </Container> 
    );
  }
}

export default App;
