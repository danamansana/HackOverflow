import React from "react";
import ReactDOM from "react-dom";

class ItemForm extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    body: this.props.body,
    title: this.props.title,
    bodyErrors: false,
    titleErrors: false
  };
  this.handleChange = this.handleChange.bind(this);
  this.fixedHandleSubmit = this.fixedHandleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({body: nextProps.body, title: nextProps.title});
  }

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  fixedHandleSubmit(e){
    e.preventDefault();
    let item = {title: this.state.title, user_id: this.props.userId, body: this.state.body, parent_id: this.props.parent_id, content_type: this.props.content_type };
    if(this.props.id){item.id = this.props.id;}
    let comp = this;
    let errors = {"title": false, "body": false};
    if(item.body.match(/\S+/) === null){
      errors.body = true;
    }
    if(item.content_type === "question" && item.title.match(/\S+/) === null){
      errors.title = true;
    }
    if(errors.body || errors.title || item.user_id === ""){
      this.setState({bodyErrors: errors.body, titleErrors: errors.title});
      return 0;
    }

    this.props.method(item)
    .then(
      (action) => {
        if(this.props.redirect){
          this.props.history.push(`/question/${action.item.id}`);
      }
    });
  }


  render(){
  let bodyErrorClass = {true: "bodyError", false: "hide"};
  let titleErrorClass = {true: "titleError", false: "hide"};
  return (
    <div className={this.props.className}>
      <form onSubmit={this.fixedHandleSubmit} >
        <label className="titleLabel">Title</label>
        <input type="text" value={this.state.title} onChange={this.handleChange("title")}></input>
        <h1 className={titleErrorClass[this.state.titleErrors]}>Title can't be blank</h1>
        <label className="questionLabel">Question</label>
        <textarea value={this.state.body} onChange={this.handleChange("body")}>{this.state.body}</textarea>
        <h1 className={bodyErrorClass[this.state.bodyErrors]}>Body can't be blank</h1>
        <input type="submit" value="Post" className="submit"></input>
      </form>
    </div>);

  }
}


export default ItemForm;
