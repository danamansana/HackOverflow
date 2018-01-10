import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  signout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    if (this.props.currentUser) {
      return (
        <div className="nav" >
          <h1><i className="fa fa-stack-overflow" aria-hidden="true"></i><h1 className="hack">hack</h1>Overflow</h1>
          <Link to="/" className="show_link">Questions</Link>
          <SearchBar updateFilters={this.props.updateFilters} history={this.props.history}/>
          <h1>{this.props.currentUser.username}</h1>
          <Link to={"/ask"} className="ask">Ask Question</Link>
          <button onClick= {this.signout} className="login_out">LogOut</button>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <h1><i className="fa fa-stack-overflow" aria-hidden="true"></i><h1 className="hack">hack</h1>Overflow</h1>
          <Link to="/" className="show_link">Questions</Link>
            <SearchBar updateFilters={this.props.updateFilters} history={this.props.history} />

            <Link to= '/login' className="login_out">Log In</Link>
            <Link to= '/signup' className="signup">Sign Up</Link>
        </div>);
    }

  }
}

export default Nav;
