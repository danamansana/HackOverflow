import {connect} from 'react-redux';
import ItemForm from "./item_form";
import {logout} from '../actions/session_actions';
import { createItem } from '../actions/item_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state) => {
  return {
    userId: state.session.currentUser.id,
    content_type: "question",
  };
};

const mapDispatchToProps = (state) => {
  return {
    method: (item) => dispatch(createItem(item)),
    redirect: true
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
