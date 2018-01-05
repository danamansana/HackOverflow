import React from 'react';

class ShowItem extends React.Component {
  render(){
    return(
      <div>
        <section className="sidebar">
          {this.props.item.id}
        </section>
        <section className="main">
          <h1 className="body">{this.props.item.body}</h1>
          <h3 className="username">{this.props.item.user_id}</h3>
          <section className="comment_form">
            <textarea></textarea>
          </section>
        </section>

      </div>

    );
  }

}

export default ShowItem;
