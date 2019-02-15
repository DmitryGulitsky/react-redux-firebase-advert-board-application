import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //отображение в браузере компонента, в зависимости от url
import NavbarContainer from '../src/containers/layout/NavbarContainer';   // панель навигации
import SignInContainer from './containers/auth/SignInContainer';  // форма для входа
import SignUpContainer from './containers/auth/SignUpContainer';   // форма для создания пользователя
import DashboardContainer from './containers/dashboard/DashboardContainer';  // информационная панель
import CreateAdvertContainer
  from './containers/adverts/CreateAdvertContainer';  // форма для создания объявления
import AdvertDetailsContainer
  from './containers/adverts/AdvertDetailsContainer';
import UsersContainer from './containers/users/UsersContainer'; // список пользователей
import ProfileContainer from './containers/profile/ProfileContainer'; // данные текущего профиля пользователя

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/users" component={UsersContainer} />
            <Route exact path="/" component={DashboardContainer} />
            <Route path="/advert/:id" component={AdvertDetailsContainer} />
            <Route path="/signin" component={SignInContainer} />
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/create" component={CreateAdvertContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
