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
      night: '',
      afternoon: '',
      //set default static time
      time: `${new Date().getHours() === 0 ? '00' : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}`
      // first ternary operator adds 2 zeros if midnight 
      //second adds a zero if minutes are smaller than 10 i.e '02'

    };

    this.wallpaper = React.createRef();

  }

  //get a background

  async componentWillMount() {
    //night 
    const apiKey = "bbd2cdd943c795c2ea90230d1b04552168b1e4ddc81bd87d60f7bcac3ed53bf5";
    await axios.get(`https://api.unsplash.com/photos/random?query=${'night'}&client_id=${apiKey}&orientation=landscape`)
      .then(res => res.data)
      .then(data => data.urls)
      .then(urls => urls.raw)
      .then(raw => this.setState({
        night: raw
      }, () => console.log(this.state.night)
      ))
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    //morning 
    const apiKey2 = "W5pTRRhQy7UYQ_mCXoTckolHltQ9QTad-LUq2wvEBzk";
    await axios.get(`https://api.unsplash.com/photos/random?query=${'morning'}&client_id=${apiKey2}&orientation=landscape`)
      .then(res => res.data)
      .then(data => data.urls)
      .then(urls => urls.raw)
      .then(raw => this.setState({
        day: raw
      }, () => console.log(this.state.night)
      ))
      .catch(function (error) {
        // handle error
        console.log(error);
      })


    //afternoon

    const apiKey3 = "a4f7a39dd975fe7ae4dc626ac798912ce889ff417d1d54dfe2b9222f2a1a4b62";
    await axios.get(`https://api.unsplash.com/photos/random?query=${'afternoon'}&client_id=${apiKey3}&orientation=landscape`)
      .then(res => res.data)
      .then(data => data.urls)
      .then(urls => urls.raw)
      .then(raw => this.setState({
        day: raw
      }, () => console.log(this.state.night)
      ))
      .catch(function (error) {
        // handle error
        console.log(error);
      })





    await this.dayNight()
  }





  //set dynamic greetings
  dayNight = () => {
    let day = this.state.time.slice(0, 2)
    if (day <= 12 && day >= 6) {
      this.wallpaper.current.style.backgroundImage = `url('${this.state.day}')`;
      this.wallpaper.current.style.color = "black"
    } else if (day > 12 && day < 17) {
      this.wallpaper.current.style.backgroundImage = `url('${this.state.afternoon}')`;
      this.wallpaper.current.style.color = "black"
    } else {
      this.wallpaper.current.style.backgroundImage = `url('${this.state.night}')`
      this.wallpaper.current.style.color = "white"
      console.log(this.state.night)
    }

  }





  render() {
    return (
      <div ref={this.wallpaper} className="App">
        <Clock time={this.state.time} />
        <Todolist />
      </div>
    );
  }
}

export default App;
