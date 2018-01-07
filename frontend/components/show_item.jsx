import React from 'react';

class ShowItem extends React.Component {
  render(){
    return(
      <div className="show_item">
        <section className="sidebar">
          <section className="up_arrow"/>
          {this.props.item.id}
          <section className="down_arrow" />
        </section>
        <section className="main">
          <h1 className="body">{this.props.item.body}</h1>
          <h3 className="username">{this.props.user.username}</h3>
          <section className="comment_form">
            <textarea></textarea>
          </section>
        </section>

      </div>

    );
  }

}

export default ShowItem;
