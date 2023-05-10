
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


  setName = (e) => {
    let name = this.inputRef.current;
    if (e.type === 'keypress') {
      if (e.which === 13 || e.keyCode === 13) {
        localStorage.setItem('name', e.target.value);
        name.setAttribute('disabled', '')
      }
    }

  }

  dayNight = () => {
    const time = this.props.time.split(':').map(Number)
    const hour = time[0]
  
    if (hour >= 6 && hour < 12) {
      return 'Morning'
    } else if (hour >= 12 && hour < 17) {
      return 'Afternoon'
    } else if (hour >= 17 && hour < 20) {
      return 'Evening'
    } else {
      return 'Night'
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