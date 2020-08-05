import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      key: 0
    };
 
  }

  handleDelete = (deleteItem) => {

    console.log(deleteItem)
    this.setState(prevState => ({
      items: prevState.items.filter(item => item !== deleteItem),
      key: prevState.key - 1
    }))
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      term: '',
      items: [...this.state.items, this.state.term],
      key: prevState.key + 1
    }));
    console.log(this.state.key);
  }




  render() {
    return (
      <div>
        <form className="todo" onSubmit={this.onSubmit}>
        What do you want to do?
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List handleDelete={this.handleDelete.bind(this)} items={this.state.items}  />
      </div>
    );
  }
}