import React from 'react';
import ItemIndexItem from './item_index_item';
import ShowItem from './show_item';

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

    return(
      <div>
        <h1>{title}</h1>
        <section className="answer_box">
          <h2>Answers</h2>
          <ul>
            {Object.values(this.props.items).filter(item => (item.content_type === "answer")).map(item => <ShowItem item={item}/>)}
          </ul>
          <section className="answerForm"></section>
        </section>
      </div>
    );
  }
}

export default Question;
