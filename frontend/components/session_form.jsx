import React from 'react';

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

  render () {

    //let errorClassName = (this.props.errorsVisible ? "errorClass" : "");
    let errorClassName = (type) => {
      return (type.length === 0 ? "" : "errorClass");
    };
    let displayErrors = this.props.errors.filter(word => !word.includes("Password"));
    let passwordErrors = this.props.errors.filter( word => word.includes("Password"));

    return (
      <div className='session_form'>
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
            <input className="button" type="submit" value={this.props.formType}></input>
          </div>
          <h1 className={errorClassName(displayErrors)} id="nameErrors">{displayErrors}</h1>
          <h1 className={errorClassName(passwordErrors)} id="passwordErrors">{passwordErrors}</h1>
          <div className="thumb"></div>
        </form>

      </div>
    );
  }
}

export default SessionForm;
