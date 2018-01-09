import React from 'react';
import ItemIndexItem from './item_index_item';
import ShowItem from './show_item';
import ItemForm from './item_form';
import merge from 'lodash/merge';

class Question extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      ownId: this.props.match.params.question_id
    };

  }


  componentDidMount(){
    this.props.fetchItem();
  }

  render(){
    let title = (Object.keys(this.props.items).length === 0 ? "" : this.props.items[this.state.ownId].title);
    let userId = (this.props.currentUser ? this.props.currentUser.id : "");

    return(
      <div>
        <h1 className = "title">{title}</h1>
        <h1 className = "question">
        {Object.values(this.props.items).filter(item => (item.content_type === "question")).map(item => <ShowItem item={item} user={this.props.users[item.id]}
          likes={this.props.likes} createLike={this.props.createLike} currentUser={this.props.currentUser}
          updateItem={this.props.updateItem} deleteItem={this.props.deleteItem}
          history={this.props.history}/>)}
        </h1>
        <section className="answer_box">
          <h2>Answers</h2>
          <ul>
            {Object.values(this.props.items).filter(item => (item.content_type === "answer")).map(item => <ShowItem item={item} user={this.props.users[item.id]} likes={this.props.likes} createLike={this.props.createLike}
               currentUser={this.props.currentUser} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem}/>)}
          </ul>
          <section className="answerForm">
          <ItemForm userId={userId} body={""} content_type="answer" parent_id={this.state.ownId} method={this.props.createItem} addItem={this.addItem}/>
          </section>
        </section>
      </div>
    );
  }
}

export default Question;
