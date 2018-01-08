import {connect} from 'react-redux';
import Nav from "./nav";
import {logout} from '../actions/session_actions';
import { updateFilters } from '../actions/nav_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    updateFilters: query => dispatch(updateFilters(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
