import React from 'react';

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
    if (this.state.query !== ""){
      this.props.updateFilters(this.state.query);
      this.setState({query: ""});
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.query} onChange={this.handleChange}>{this.state.query}</textarea>
        <input type="submit" value="search"></input>
      </form>
    );
  }
}

export default SearchBar;
