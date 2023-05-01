import React, { Component } from 'react'
import Greeting from './Greeting'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set default static time
            time: `${new Date().getHours() === 0 ? '00' : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}`
            // first ternary operator adds 2 zeros if midnight 
            //second adds a zero if minutes are smaller than 10 i.e '02'
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

    clearName = () => {
        localStorage.clear()
        window.location.reload();
    }

    render() {
        return (
            <div className="clock">
                <div className='clock-child'>
                {this.state.time}
                </div>
                {/* pass state to greeting component */}
                <span title="Reset name" onClick={() => this.clearName()} className="clearName">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-history" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="12 8 12 12 14 14" />
                        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                    </svg>
                </span>
                <Greeting time={this.state.time} />

            </div>
        )
    }
}


export default Clock;