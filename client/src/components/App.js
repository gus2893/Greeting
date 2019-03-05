import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <Container>       
        <BrowserRouter>
          <div>
              <Header/>
              <Route path="/" exact component={StreamList}/>
              <Route path="/streams/new" exact component={StreamCreate}/>
              <Route path="/streams/edit" exact component={StreamEdit}/>
              <Route path="/streams/delete" exact component={StreamDelete}/>
              <Route path="/streams/show" exact component={StreamShow}/>
          </div>
        </BrowserRouter>
      </Container> 
    );
  }
}

export default App;