import React, { Component } from 'react';
import Clock from './components/Clock'
import Todolist from './components/Todolist'
import './App.css';

const axios = require('axios');
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      day: '',
      night: ''
    };

    this.wallpaper = React.createRef();

  }

  //get a background

  getDayWallpaper = (query = 'day landscape') => {
    const apiKey = "W5pTRRhQy7UYQ_mCXoTckolHltQ9QTad-LUq2wvEBzk";

    axios.get(`https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}&orientation=landscape`)
      .then(res => res.data)
      .then(data => data.urls)
      .then(urls => this.setState({
        day: urls.raw
      }))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  getNightWallpaper = (query = 'night') => {
    const apiKey = "b4149a170740ff170861a3eb68bfae06d057557f2f224667f42547a07e1944c8";

    axios.get(`https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}&orientation=landscape`)
      .then(res => res.data)
      .then(data => data.urls)
      .then(urls => this.setState({
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


  componentDidMount() {
    // this.dayNight()
    // this.getDayWallpaper()
    // this.getNightWallpaper()
  }



  render() {
    return (
      <div ref={this.wallpaper} className="App">
        <Clock />
        <Todolist />
      </div>
    );
  }
}

export default App;
