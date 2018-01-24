import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.changeInput = this.changeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  changeInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    if (this.props.errors.length !== 0)
    {this.props.clearErrors();}
    // clear errors functionality from scratch in 5 minutes. Victory is mine!!!
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm.bind(this)(user);
  }

  demo(e){
    e.preventDefault();
    this.props.processForm.bind(this)({username: "Edward Teller", password: "password"});
  }


  render () {
    let formButtonText = (this.props.formType === "login" ? "Log In" : "Sign Up");

    //let errorClassName = (this.props.errorsVisible ? "errorClass" : "");
    let errorClassName = (type) => {
      return (type.length === 0 ? "" : "errorClass");
    };
    let displayErrors = this.props.errors.filter(word => !word.includes("Password"));
    let passwordErrors = this.props.errors.filter( word => word.includes("Password"));

    return (
      <div className='session_form'>
        <div className='session_toggle'>
          <div className= {(this.props.formType === "login" ? "unselected" : "selected")}>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className= {(this.props.formType !== "login" ? "unselected" : "selected")} id="login">
            <Link to="/login">Log In</Link></div>

        </div>
        <form onSubmit={this.handleSubmit} >
          <div className='labelcontainer'>
            <label>
              Display Name
            </label>
          </div>
          <input type="text" onChange={this.changeInput("username")} value={this.state.username}></input>
          <div className='labelcontainer'>
            <label>
              Password
            </label>
          </div>
          <input type="password" onChange={this.changeInput("password")} value={this.state.password}></input>
          <div className="buttoncontainer">
            <input className="button" type="submit" value={formButtonText}></input>
          </div>
          <div className="buttoncontainer">
          <button onClick={this.demo} className="button" value="Demo">Demo</button></div>
          <h1 className={errorClassName(displayErrors)} id="nameErrors">{displayErrors}
          </h1>
          <div className="display_thumb">
          </div>
          <h1 className={errorClassName(passwordErrors)} id="passwordErrors">{passwordErrors}
          </h1>
          <div className="password_thumb"> </div>
        </form>

      </div>
    );
  }
}

export default SessionForm;
