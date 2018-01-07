import React from "react";
import ReactDOM from "react-dom";

class ItemForm extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    body: this.props.body
  };
  this.handleChange = this.handleChange.bind(this);
  this.fixedHandleSubmit = this.fixedHandleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({body: e.target.value});
  }

  fixedHandleSubmit(){
    item = {user_id: this.props.user_id, body: this.state.body, parent_id: this.props.parent_id, content_type: this.props.content_type }
    this.props.method(item);
    this.props.addItem(item);
  }

  render(){
  return (
    <form onSubmit={this.fixedHandleSubmit}>
    <textarea value={this.state.body} onChange={this.handleChange}>{this.state.body}</textarea>
    <input type="submit" value="post"></input>
    </form>);

  }
}


export default ItemForm;
