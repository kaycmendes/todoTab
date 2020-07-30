import React, { Component } from 'react'
import Greeting from './Greeting'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set default static time
            time: 'Loading...'
            // time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}:${new Date().getSeconds() < 10 ? '0' + new Date.getSeconds() : new Date().getSeconds().toLocaleString('en-US',{ hour12: false })}`.toString()
        }

    }


    hours() {
        let day = new window.Date();
        let formatTime = `${day.getHours()}:${day.getMinutes() < 10 ? '0' : ''}${day.getMinutes()}:${day.getSeconds() < 10 ? '0' + day.getSeconds() : day.getSeconds().toLocaleString('en-US',{ hour12: false })}`;
        this.setState({
            time: formatTime
        });
        
        
    }
    //update it each 1s
    componentDidMount() {
        setInterval(() => this.hours(), 1000)
    }



    render() {
        return (
            <div className="clock">
                {this.state.time}
                {/* pass state to greeting component */}
                <Greeting time={this.state.time}/>
            </div>
        )
    }
}


export default Clock;