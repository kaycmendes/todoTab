import React, { Component } from 'react'


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }

    }


    hours() {
        let day = new Date();
        let formatTime = `${day.getHours()}:${day.getMinutes() < 10 ? '0' : ''}${day.getMinutes()}:${day.getSeconds() < 10 ? '0' + day.getSeconds() : day.getSeconds()}`;
        this.setState({
            time: formatTime
        });
        console.log(this.state.time);

    }
    componentWillMount() {
        setInterval(() => this.hours(), 1000)
    }



    render() {
        return (
            <div className="clock">
                {this.state.time}
            </div>
        )
    }
}


export default Clock;