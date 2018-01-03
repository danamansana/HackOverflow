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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm.bind(this)(user);
  }

  render () {

    // let errorText = () => {
    //   if(this.props.errors){
    //     return (<h1>{this.props.errors}</h1>);
    //   }else{
    //     return(<div></div>);
    //   }
    // };
    let errorClassName = (this.props.errorsVisible ? "errorClass" : "")
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
        </form>
        <h1 className={errorClassName}>{this.props.errors}</h1>
      </div>
    );
  }
}

export default SessionForm;
