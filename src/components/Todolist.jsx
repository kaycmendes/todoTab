import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      key: 1
    };

    this.emptyInput = React.createRef()

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
    //prevent user from adding a empty string
    if (this.state.term !== '' && this.state.key <= 5) {
      this.emptyInput.current.setAttribute('placeholder', "");

      this.setState(prevState => ({
        term: '',
        items: [...this.state.items, this.state.term],
        key: prevState.key + 1
      }));
      console.log(this.state.key);
    } else {
      this.emptyInput.current.setAttribute('placeholder', "This field is required");
    }
  }

  




  render() {
    return (
      <div>

        <form className="todo" onSubmit={this.onSubmit}>
          <h2>What do you want to do?</h2>
          <input ref={this.emptyInput} type="text" value={this.state.term} onChange={this.onChange} />
          <button>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </span>
          </button>
        </form>
        <List handleDelete={this.handleDelete.bind(this)} items={this.state.items} />
      </div>
    );
  }
}