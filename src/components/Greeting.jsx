
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
    let name = this.inputRef.current;
    if (e.type === 'keypress') {
      if (e.which === 13 || e.keyCode === 13) {
        localStorage.setItem('name', e.target.value);
        name.setAttribute('disabled', '')
      }
    }
    
  }
  
  
  getFocus = () => {
    if (localStorage.getItem('name') === null) {
      this.inputRef.current.focus()
    } else {
      let name = this.inputRef.current;
      name.setAttribute('disabled', '')
      
    }
  }
  getName = () => {
    if (localStorage.getItem('name') === null) {
      this.inputRef.current.focus()
    } else {
      let name = this.inputRef.current;
      name.value = localStorage.getItem('name')
    }
  }

  
  events = () => {
    let name = this.inputRef.current;
    name.addEventListener("keypress", this.setName);
    name.addEventListener('blur', this.setFocus);
  }



  //run
  componentDidMount() {
    let name = this.inputRef.current
    console.log(name.style);
    this.setName(name);
    this.dayNight();
    this.getName();
    this.getFocus()
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