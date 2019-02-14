import { connect } from 'react-redux'   //  подключаем компонент к redux-store
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Dashboard from '../../components/dashboard/Dashboard';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
};

const DashboardContainer = compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects', orderBy: ['createdAt', 'desc']},  //  сортируем по дате создания
      { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']} // ограничиваем количество получаемых документов до 3
    ])
)(
    Dashboard);

export default DashboardContainer;