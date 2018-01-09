import React from "react";
import ReactDOM from "react-dom";

class ItemForm extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    body: this.props.body,
    title: this.props.title
  };
  this.handleChange = this.handleChange.bind(this);
  this.fixedHandleSubmit = this.fixedHandleSubmit.bind(this);
  }

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  fixedHandleSubmit(){
    //why is the action returned from this.props.method?
    let item = {title: this.state.title, user_id: this.props.userId, body: this.state.body, parent_id: this.props.parent_id, content_type: this.props.content_type };
    if(this.props.id){item.id = this.props.id;}
    debugger
    let comp = this;
    this.props.method(item)
    .then(
      (action) => {
        if(this.props.redirect){
        this.props.redirect(comp, action.item.id);
      }
    });
  }


  render(){
    debugger
  return (
    <form onSubmit={this.fixedHandleSubmit}>
    <input type="text" value={this.state.title} onChange={this.handleChange("title")}></input>
    <textarea value={this.state.body} onChange={this.handleChange("body")}>{this.state.body}</textarea>
    <input type="submit" value="post"></input>
    </form>);

  }
}


export default ItemForm;
