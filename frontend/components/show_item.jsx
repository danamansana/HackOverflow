import React from 'react';
import ItemForm from './item_form';

class ShowItem extends React.Component {
  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleBody = this.toggleBody.bind(this);
    this.toggleComment = this.toggleComment.bind(this);
    this.state = {
      className: "show_item",
      bodydisplay: true,
      commentDisplay: false
    };
  }





  handleLike(value){
    if(this.props.currentUser){
      return (e) => {
        this.props.createLike({item_id: this.props.item.id, user_id: this.props.currentUser.id, value: value});
      };
    }
  }

  handleDelete(){
    this.props.deleteItem(this.props.item.id);
    this.setState({className: "hide"});
    if(this.props.item.content_type === "question"){
      this.props.history.push("/");
    }
  }

  toggleBody(){
    this.setState({bodydisplay: !this.state.bodydisplay});
  }
  toggleComment(){
    this.setState({commentDisplay: !this.state.commentDisplay});
  }
  render(){
    let likes = Object.values(this.props.likes).filter(like => (like.item_id === this.props.item.id));
    let likeNumber = likes.reduce((accumulator, currentValue) => (accumulator + currentValue.value), 0);
    let bodydisplay = {true: "body", false: "hide"};
    let updatedisplay = {false: "update_form", true: "hide"};
    let deleteDisplay = {false: "deleteButton", true: "hide"};
    let commentButtonDisplay = {false: "comment_button", true: "hide"};
    let commentFormDisplay = {true: "comment_form", false: "hide"};
    return(
      <div className={this.state.className}>
        <section className="sidebar">
          <section className="up_arrow" onClick = {this.handleLike(1)}/>
          {likeNumber}
          <section className="down_arrow" onClick = {this.handleLike(-1)}/>
        </section>
        <section className="main">
          <h1 className={bodydisplay[this.state.bodydisplay]} onClick={this.toggleBody}>{this.props.item.body}</h1>
          <section className = {updatedisplay[this.state.bodydisplay]}>
            <ItemForm userId={this.props.user.id} body={this.props.item.body} title={this.props.item.title} content_type={this.props.item.content_type} className={this.props.item.content_type}
              parent_id={this.props.item.parent_id} method={this.props.updateItem} id={this.props.item.id}/>
          </section>
          <button onClick={this.handleDelete} value="Delete" className={deleteDisplay[this.state.bodydisplay]}>Delete</button>
          <h3 className="username">{this.props.user.username}</h3>
          <section className={commentFormDisplay[this.state.commentDisplay]}>
            <textarea></textarea>
          </section>
          <h2 className={commentButtonDisplay[this.state.commentDisplay] } onClick={this.toggleComment}>add a comment</h2>
        </section>

      </div>

    );
  }

}

export default ShowItem;
