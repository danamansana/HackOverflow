import React from 'react';
import { connect } from 'react-redux';
import Question from './question';
import { withRouter } from 'react-router';
import { fetchItem } from '../actions/item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    likes: state.likes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchItem: () => dispatch(fetchItem(ownProps.match.params.question_id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));