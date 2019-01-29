export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword( //  указываем метод авторизации с помощью email
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });    // если логин и пароль верны
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err }); // если логин и пароль не верны
    });
  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {    // метод signOut
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
};

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(   //  указываем метод создания user с помощью email
      newUser.email, 
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({   // в коллекции users в бд создаем новый документ
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phoneNumber,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
};