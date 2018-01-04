import React from 'react';

class Question extends React.Component{
  componentDidMount(){
    this.props.fetchItem();
  }
  render(){
    debugger
    return(
      <div>
        <h1>{`This is the show page!`}</h1>
        <h1>{JSON.stringify(this.props)}</h1>
      </div>
    );
  }
}

export default Question;
