import {connect} from 'react-redux';
import ItemIndex from './item_index';
import { fetchItems } from '../actions/item_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    filters: state.filters
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchItems: (query) => dispatch(fetchItems(query))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemIndex));
