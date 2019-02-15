import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'   // собирает все импортированные выше reducer в один
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'  // синхронизация authentification status и store state

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer   // синхронизируем firebase информацию, которая сожержит данные аутентификации
});

export default rootReducer
