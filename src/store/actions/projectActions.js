export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({    // асинхронный запрос к базе данных, который нам позволил thunk
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      // category: category,
      // description: description,
      // price: price,
      // title: title,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};