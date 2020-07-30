
import React, { Component } from "react"

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()

  }

  nameInput = () => {
    return (
      <input ref={this.inputRef} id="name" type="text" placeholder="Name_"></input>
    )
  }

  //set dynamic greetings
  dayNight = () => {
    let day = this.props.time.slice(0, 2)
    if (day <= 12 && day >= 6) {
      day = 'Morning'
    } else if (day > 12 && day < 17) {
      day = 'Afternoon'
    } else {
      day = 'Evening'
    }
    return day
  }


  setName = (e) => {
    if (e.type === 'keypress') {
      console.log('working')
    }
  }

  getName = () => {
    if (localStorage.getItem('name') === null) {
      this.inputRef.current.focus()
    }
  }


  events = () => {
    let name = this.inputRef.current;
    name.addEventListener('keypress', this.setName)
    name.addEventListener('blur', this.setName)
  }

  //run
  componentDidMount() {
    let name = this.inputRef.current
    console.log(name.style);
    this.dayNight();
    this.getName();
    this.events();
  }



  render() {
    return (
      <div className="greeting" >
        <h1> Good {this.dayNight()} {this.nameInput()}</h1>
      </div>
    )
  }

}


export default Greeting;