import React from 'react';
import {Link} from 'react-router-dom';
import DataBox from './data_box';
class ItemIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    return(
      <li className="item_index_item">
        <div className="questionSideBar">
          <DataBox data={this.props.item.likes} datatype={'votes'}/>
          <DataBox data={this.props.item.answers} datatype={'answers'}/>
        </div>
        <div className="questionMain">
          <Link to={`question/${this.props.item.id}`}>
            <h1>{this.props.item.body}</h1>
          </Link>
          <h2>{`asked by ${this.props.item.author}`}</h2>
        </div>
      </li>
    );
  }
}

export default ItemIndexItem;
