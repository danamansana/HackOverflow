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



  componentWillReceiveProps(){
    this.setState({
      className: "show_item",
      bodydisplay: true,
      commentDisplay: false
    });
  }

  likes(user){
    return Object.values(this.props.likes).filter(like => (like.item_id === this.props.item.id && like.user_id === user.id)).reduce((accumulator, currentValue) => (accumulator + currentValue.value), 0);
  }

  handleLike(value){
    if(this.props.currentUser && this.likes(this.props.currentUser)*value <=0 && this.props.currentUser.id !== this.props.item.user_id ){
      return (e) => {
        e.preventDefault();
        this.props.createLike({item_id: this.props.item.id, user_id: this.props.currentUser.id, value: value});
      };
    }
  }

  handleDelete(e){
    e.preventDefault();
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
    let bodyModalDisplay = {true: "hide", false: "bodyModal"};
    let commentButtonDisplay = {false: "comment_button", true: "hide"};
    let commentFormDisplay = {true: "comment_form", false: "hide"};
    let commentModalDisplay = {true: "commentModal", false: "hide"};
    
    return(
      <div className={this.state.className} id={this.props.top ? "top" : ""}>
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
          <div className={bodyModalDisplay[this.state.bodydisplay]} onClick={this.toggleBody}/>
          <h3 className="username">{this.props.user.username}</h3>
          <ul className="commentList">
            {Object.values(this.props.items).filter(item => (item.content_type === "comment" && item.parent_id === this.props.item.id )).map(comment => <ShowItem item={comment} items={this.props.items} user={this.props.users[comment.id]} likes={this.props.likes} createLike={this.props.createLike}
               currentUser={this.props.currentUser} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem}/>)}
          </ul>
          <h2 className={commentButtonDisplay[this.state.commentDisplay] } onClick={this.toggleComment}>add a comment</h2>
          <div className={commentModalDisplay[this.state.commentDisplay]} onClick={this.toggleComment}/>
          <section className={commentFormDisplay[this.state.commentDisplay]}>
            <ItemForm userId={this.props.currentUser.id} body="" content_type="comment"
              parent_id={this.props.item.id} className="comment" method={this.props.createItem}/>
          </section>
        </section>

      </div>

    );
  }

}

export default ShowItem;
