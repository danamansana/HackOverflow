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
    this.props.history.push("/");
    this.props.logout();
  }

  render() {

    if (this.props.currentUser) {
      return (
        <div className="nav" >
          <h1 className="logo">
            <Link to="/">
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            <h1 className="hack">hack</h1>Overflow</Link></h1>
          <div className="link_holder">
            <Link to="/" className="show_link">Questions</Link>
          </div>
          <SearchBar updateFilters={this.props.updateFilters} history={this.props.history}/>
          <h1>{this.props.currentUser.username}</h1>
          <div className="link_holder">
            <Link to={"/ask"} className="ask">Ask Question</Link>
          </div>
          <div className="link_holder">

            <button onClick= {this.signout} className="login_out">LogOut</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav">
          
          <h1 className="logo"><Link to="/"><i className="fa fa-stack-overflow" aria-hidden="true"></i><h1 className="hack">hack</h1>Overflow</Link></h1>
          <div className="link_holder">

            <Link to="/" className="show_link">Questions</Link>
          </div>
            <SearchBar updateFilters={this.props.updateFilters} history={this.props.history} />
            <div className="link_holder">

              <Link to= '/login' className="login_out">Log In</Link>
            </div>

              <Link to= '/signup' className="signup">Sign Up</Link>
        </div>);
    }

  }
}

export default Nav;
