import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  signout(e) {
    this.props.logout();
  }

  render() {
    
    if (this.props.currentUser) {
      return (
        <div className="nav">
          <h1>{this.props.currentUser.username}</h1>
          <SearchBar updateFilters={this.props.updateFilters} history={this.props.history}/>
          <button onClick= {this.signout}>LogOut</button>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <h1>HackOverflow</h1>
          <div className="button">
            <SearchBar updateFilters={this.props.updateFilters} history={this.props.history} />

            <Link to= '/signup' className="link">Sign Up</Link>
            <Link to= '/login'>Log In</Link>
          </div>
        </div>);
    }

  }
}

export default Nav;
