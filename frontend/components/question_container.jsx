import React from 'react';
import { connect } from 'react-redux';
import Question from './question';
import { withRouter } from 'react-router';
import { fetchItem, createItem, updateItem, createLike } from '../actions/item_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    items: state.items,
    likes: state.likes,
    users: state.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchItem: () => dispatch(fetchItem(ownProps.match.params.question_id)),
    createItem: (item) => dispatch(createItem(item)),
    updateItem: (item) => dispatch(updateItem(item)),
    createLike: (like) => dispatch(createLike(like))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
