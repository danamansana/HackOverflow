import React from 'react';

class DataBox extends React.Component {
  render(){
    return(
      <div className='databox'>
        <h1>{this.props.data}</h1>
        <h3>{this.props.datatype}</h3>
      </div>
    );
  }
}


export default DataBox;
