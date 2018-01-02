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
    
    return (
      <div>

        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.changeInput("username")} value={this.state.username}></input>
          <input type="password" onChange={this.changeInput("password")} value={this.state.password}></input>
          <input type="submit" value="Submit"></input>
        </form>
        <h1>{this.props.errors}</h1>

      </div>
    );
  }
}

export default SessionForm;
