import React from 'react';
import ItemForm from './item_form';

class ShowItem extends React.Component {
  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(value){
    if(this.props.currentUser){
      return (e) => {
        this.props.createLike({item_id: this.props.item.id, user_id: this.props.currentUser.id, value: value});
      };
    }
  }
  render(){

    let likes = Object.values(this.props.likes).filter(like => (like.item_id === this.props.item.id));
    let likeNumber = likes.reduce((accumulator, currentValue) => (accumulator + currentValue.value), 0);
    debugger

    return(
      <div className="show_item">
        <section className="sidebar">
          <section className="up_arrow" onClick = {this.handleLike(1)}/>
          {likeNumber}
          <section className="down_arrow" onClick = {this.handleLike(-1)}/>
        </section>
        <section className="main">
          <h1 className="body">{this.props.item.body}</h1>
          <h3 className="username">{this.props.user.username}</h3>
          <section className = "update_form">
            <ItemForm userId={this.props.user.id} body={this.props.item.body} content_type={this.props.item.content_type}
              parent_id={this.props.item.parent_id} method={this.props.updateItem} id={this.props.item.id}/>
          </section>
          <section className="comment_form">
            <textarea></textarea>
          </section>
        </section>

      </div>

    );
  }

}

export default ShowItem;
