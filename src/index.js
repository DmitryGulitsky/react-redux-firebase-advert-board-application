import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';   //  оборачиваем компонент. дочерние элементы которого будут иметь доступ к хранилищу
import thunk from 'redux-thunk';    //  позволяет выполнять асинхронные запросы для изменения данных
import { reduxFirestore, getFirestore } from 'redux-firestore';   // работа с базой данных
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';   // работа с данными users
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,    //  создаем redux хранилище
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {  //  указываем файл конфигурации firebase и добавляем настройки
      userProfile: 'users', // указываем с какой именно колекцией синхронизировать данные пользователя
      useFirestoreForProfile: true, // связываем данные пользователей с firestore по uid
      attachAuthIsReady: true}),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

store.firebaseAuthIsReady.then(() => {    // используем для отрисовки компонентов при получения данных с сервера без их мерцания, из-за ожидания ответа
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  registerServiceWorker();
});

