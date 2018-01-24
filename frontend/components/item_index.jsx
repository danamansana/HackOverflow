import React from 'react';
import ItemIndexItem from './item_index_item';

class ItemIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items
    };
  }

  componentDidMount(){

    this.props.fetchItems(this.props.match.params.query);
  }

  componentWillReceiveProps(nextProps){

    this.setState({items:nextProps.items});
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.query !== this.props.match.params.query){

      this.props.fetchItems(this.props.match.params.query);
    }
  }

  render(){

    return(
      <ul className= "item_index">
        <div>Top Questions</div>
        {Object.values(this.state.items).map(item => <ItemIndexItem item={item} filters = {this.props.filters} key={item.id}/>)}
      </ul>
    );
  }
}

export default ItemIndex;
