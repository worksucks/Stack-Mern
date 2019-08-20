import React from 'react';
import './styles/global.scss';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import AddPost from './components/pages/AddPost/AddPost';
import SinglePost from './components/pages/SinglePost/SinglePost';
import NotFound from './components/pages/NotFound/NotFoundPage';


class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/posts" exact component={Posts}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/new" exact component={AddPost}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}



export default App;
