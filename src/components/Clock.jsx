import React, { Component } from 'react'
import Greeting from './Greeting'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set default static time
            time: `${new Date().getHours() === 0 ? '00' : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}` 
            // first ternary operator adds 2 zeros if midnight 
            //second adds a zero if minutes are smaller than zero i.e '02'
        }

    }


    hours() {
        let day = new window.Date();
        let formatTime = `${day.getHours() === 0 ? '00' : day.getHours()}:${day.getMinutes() < 10 ? '0' : ''}${day.getMinutes()}:${day.getSeconds() < 10 ? '0' + day.getSeconds() : day.getSeconds().toLocaleString('en-US', { hour12: false })}`;
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
                <Greeting time={this.state.time} />
            </div>
        )
    }
}


export default Clock;