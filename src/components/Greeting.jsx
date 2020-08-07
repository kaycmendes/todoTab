
import React, { Component } from "react"
const axios = require('axios');


class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      night: ''
    };


    this.inputRef = React.createRef()

  }

  nameInput = () => {
    return (
      <input ref={this.inputRef} id="name" type="text" placeholder="Name_"></input>
    )
  }

  //get a background

  getDayWallpaper = (query='day landscape') => {
    const apiKey = "W5pTRRhQy7UYQ_mCXoTckolHltQ9QTad-LUq2wvEBzk";

    axios.get(`https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}&orientation=landscape`)
      .then(res => res.data)
      .then( data => data.urls )
      .then(urls => this.setState ({
        day: urls.raw
      }))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  getNightWallpaper = (query='night') => {
    const apiKey = "b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8";

    axios.get(`https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}&orientation=landscape`)
      .then(res => res.data)
      .then( data => data.urls )
      .then(urls => this.setState ({
        night: urls.raw
      }))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
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
    // this.getDayWallpaper()
    // this.getNightWallpaper()
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