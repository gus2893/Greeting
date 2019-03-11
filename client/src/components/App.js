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
              <Route path="/" exact component={StreamList}/>
              <Route path="/streams/new" exact component={CameraComponent}/>
              <Route path="/streams/edit/:id" exact component={StreamEdit}/>
              <Route path="/streams/delete/:id" exact component={StreamDelete}/>
            </div>
        </Router>
      </Container> 
    );
  }
}

export default App;
