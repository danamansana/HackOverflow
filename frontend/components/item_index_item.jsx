import React from 'react';
class ItemIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    return(
      <li className="item_index_item">
        <div className="questionSideBar">
          <h3>{this.props.item.likes}</h3>
          <h3>{this.props.item.answers}</h3>
        </div>
        <div className="questionMain">
          <h1>{this.props.item.body}</h1>
          <h2>{`asked by ${this.props.item.author}`}</h2>
        </div>
      </li>
    );
  }
}

export default ItemIndexItem;
