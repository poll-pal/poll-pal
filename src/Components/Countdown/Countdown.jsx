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
      <div className="clockWrapper">
        <table>
          <tr>
            <th>
              Days
            </th>
            <th>
              Hours
            </th>
            <th>
              Minutes
            </th>
            <th>
              Seconds
            </th>
          </tr>
          <tr>
            <td>
              {this.state.days}
            </td>
            <td>
              {this.state.hours}
            </td>
            <td>
              {this.state.minutes}
            </td>
            <td>
              {this.state.seconds}
            </td>
          </tr>
        </table>
        <h1>Width</h1>
        <p>{window.innerWidth}</p>
        <p>{window.innerWidth * .1}</p>
        <h2>Height</h2>
        <p>{window.innerHeight}</p>
        <p>{window.innerHeight * .1}</p>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => this.countdown(), 1000);
  }
}

export default Countdown;
