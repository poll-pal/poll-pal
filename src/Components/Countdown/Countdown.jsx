import React, { Component } from 'react';
import "./Countdown.css";





class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      countDownDate: new Date("Nov 6, 2018 12:00:25").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      second: 0,

    };
  }


  // Render each time the function is called
  countdown() {
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and voting day
    let distance = this.state.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.setState({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    });


    // If the count down is finished, write some text 
    if (distance < 0) {
      // Kill it
    }

  }
  render() {
    return (
      <div className="container">
        <div className="row clockWrapper">
        <div className="col-lg-3" id="countdown">
          <div className="clock" id="countdown-number">            
              <h2>Days</h2>
              <h3>{this.state.days}</h3>
          </div>
        </div>
        <div className="col-lg-3" id="countdown">
          <div className="clock" id="countdown-number">
            <h2>Hours</h2>
            <h3>{this.state.hours}</h3>
          </div>
        </div>
        <div className="col-lg-3" id="countdown">
        <div className="clock" id="countdown-number">
          <h2>Minutes</h2>
          <h3>{this.state.minutes}</h3>
        </div>
        </div>
        <div className="col-lg-3" id="countdown">
          <div className="clock" id="countdown-number">
            <h2>Seconds</h2>
            <h3>{this.state.seconds}</h3>
          </div>
        </div>
      </div>
    </div>
    );
  }

  componentDidMount() {
    setInterval(() => this.countdown(), 1000);
  }
}

export default Countdown;
