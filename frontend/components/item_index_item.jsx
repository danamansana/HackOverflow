import React from 'react';
class ItemIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: this.props.item.author,
      body: this.props.item.body
    };
  }

  render(){
    // debugger
    return(
      <li className="item_index_item">
        <h1>{this.state.body}</h1>
        <h2>{`asked by ${this.state.author}`}</h2>
      </li>
    );
  }
}

export default ItemIndexItem;
