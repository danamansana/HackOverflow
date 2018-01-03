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
    this.props.fetchItems();
  }

  componentWillReceiveProps(nextProps){

    this.setState({items:nextProps.items});
  }

  render(){
    return(
      <ul className= "item_index">
        Top Questions
        {Object.values(this.state.items).map(item => <ItemIndexItem item={item}/>)}
      </ul>
    );
  }
}

export default ItemIndex;
