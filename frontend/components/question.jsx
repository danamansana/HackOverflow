import React from 'react';
import ItemIndexItem from './item_index_item';
import ShowItem from './show_item';
import ItemForm from './item_form';

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
    let title = (Object.keys(this.props.items).length === 0 ? "" : this.props.items[this.state.ownId].body);
    let user_id = (this.props.currentUser ? this.props.currentUser.id : "");

    return(
      <div>
        <h1 className = "title">{title}</h1>
        <h1 className = "question">
        {Object.values(this.props.items).filter(item => (item.content_type === null)).map(item => <ShowItem item={item} />)}
        </h1>
        <section className="answer_box">
          <h2>Answers</h2>
          <ul>
            {Object.values(this.props.items).filter(item => (item.content_type === "answer")).map(item => <ShowItem item={item}/>)}
          </ul>
          <section className="answerForm">
          <ItemForm user_id={user_id} body={""} content_type="answer" parent_id={this.state.ownId} method={this.props.createItem}/>
          </section>
        </section>
      </div>
    );
  }
}

export default Question;
