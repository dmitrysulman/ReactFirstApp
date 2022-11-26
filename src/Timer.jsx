import React, {Component} from "react";

class Timer extends Component {

    state = {
        time: 0,
        timerStarted: false
    }

    componentDidMount() {
        const initialTime = localStorage.getItem("time")
        if (initialTime) {
            this.setState({time: parseInt(initialTime)});
        }
    }

    componentDidUpdate() {
        localStorage.setItem("time", this.state.time);
    }

    toggleTimer() {
        if (this.state.timerStarted) {
            clearInterval(this.timerId);
            this.setState({timerStarted: false});
        } else {
            this.timerId = setInterval(() => {
                this.setState({time: this.state.time + 1});
            }, 1000);
            this.setState({timerStarted: true});
        }
    }

    resetTimer() {
        clearInterval(this.timerId);
        this.setState({time: 0, timerStarted: false});
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h3>React Timer</h3>
                <div>{this.state.time}</div>
                <button onClick={() => this.toggleTimer()}>{this.state.timerStarted ? <span>Stop</span> : <span>Start</span>}</button>
                <button onClick={() => this.resetTimer()}>Reset</button>
            </div>
        )
    }
}

export { Timer }