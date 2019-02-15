export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({    // асинхронный запрос к базе данных, который нам позволил thunk
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      category: project.category,
      description: project.description,
      price: project.price,
      title: project.title,
      authorId: authorId,
      createdAt: new Date(),
      modifiedAt: '',
      views: 0
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};