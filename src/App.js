import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NinjasPage from './components/ninja/NinjasPage';
import TodosPage from './components/todo/TodosPage';
import Post from './components/Post';

class App extends Component {

  // componentDidMount() {
  //   console.log('Component mounted.');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('Component updated.');
  //   console.log(prevProps, prevState);
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/contact" component={ Contact } />
              <Route path="/ninjas" component={ NinjasPage } />
              <Route path="/todos" component={ TodosPage } />
              <Route path="/:post_id" component={ Post } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
