import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({query: e.target.value});
  }

  handleSubmit(e){
    // debugger
    // this.props.history.push('/');
    e.preventDefault();
    if (this.state.query !== ""){
      this.props.history.push(`/${this.state.query.split(" ").join(",")}`);
    }
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange}></input>

        <button class="submit"><i class="fa fa-search"></i></button>
      </form>
    );
  }
}

export default SearchBar;
