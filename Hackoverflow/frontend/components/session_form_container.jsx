import {connect} from 'react-redux';
import SessionForm from "./session_form";
import {signup, login} from '../actions/session_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors,
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatch = (dispatch, ownProps) => {

  return {
    processForm: (user) => {
      if (ownProps.location.pathname.slice(1) === 'login') {
        // error: says props is undefined when we call this.props.formtype, debugger says otherwise, fails at dispatch
        return dispatch(login(user));
      } else {
        return dispatch(signup(user));
      }
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatch)(SessionForm));
