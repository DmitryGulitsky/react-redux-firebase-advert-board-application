import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' //отображение в браузере компонента, в зависимости от url
import Navbar from './components/layout/Navbar'   // панель навигации
import Dashboard from './components/dashboard/Dashboard'  // информационная панель
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'   // форма для входа
import SignUp from './components/auth/SignUp'   // форма для создания пользователя
import CreateProject from './components/projects/CreateProject' // форма для создания объявления

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
