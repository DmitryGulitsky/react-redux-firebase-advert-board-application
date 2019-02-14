import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //отображение в браузере компонента, в зависимости от url
import NavbarContainer from '../src/containers/layout/NavbarContainer';   // панель навигации
import SignInContainer from './containers/auth/SignInContainer';  // форма для входа
import SignUpContainer from './containers/auth/SignUpContainer';   // форма для создания пользователя
import DashboardContainer from './containers/dashboard/DashboardContainer';  // информационная панель
import CreateProjectContainer
  from './containers/projects/CreateProjectContainer';  // форма для создания объявления
import ProjectDetailsContainer
  from './containers/projects/ProjectDetailsContainer';
import UsersContainer from './containers/users/UsersContainer'; // список пользователей

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route path='/users' component={UsersContainer} />
            <Route exact path='/' component={DashboardContainer} />
            <Route path='/project/:id' component={ProjectDetailsContainer} />
            <Route path='/signin' component={SignInContainer} />
            <Route path='/signup' component={SignUpContainer} />
            <Route path='/create' component={CreateProjectContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
