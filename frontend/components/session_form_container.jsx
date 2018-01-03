import {connect} from 'react-redux';
import SessionForm from "./session_form";
import {signup, login, clearErrors } from '../actions/session_actions';
import { withRouter } from 'react-router';
import {isEmpty} from 'lodash';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors,
    formType: ownProps.location.pathname.slice(1),
    errorsVisible: !_.isEmpty(state.errors)
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
    },
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatch)(SessionForm));
