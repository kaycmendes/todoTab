import React, { Component } from 'react';


class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item, index) =>
            <li key={index}>
                <p>{item}</p>
                <svg onClick={this.props.handleDelete.bind(this, item)} className="icon remove icon-tabler icon-tabler-x" style={{ float: 'right' }} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F44336" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </li>
          )
        }
      </ul>
    )
  }
}

export default List;