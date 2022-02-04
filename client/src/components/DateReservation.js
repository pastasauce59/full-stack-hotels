import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

class DateReservation extends Component {
  state = {
    startDate: "",
    endDate: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e)

    if( this.state.startDate === "" || this.state.endDate === ""){
      this.setState({ startDate: "", endDate: "" })
      alert("❗️: Please pick a start and end date to make a reservation.")
    } else {

    let guestReservation = {
      startDate: this.state.startDate._d.toString().slice(0, 15),
      endDate: this.state.endDate._d.toString().slice(0, 15),
      guestId: 1,
      room: this.props.rooms,
    };

    this.props.addToCart(guestReservation);
    alert("Reservation Added To Cart!");
    this.setState({ startDate: "", endDate: "" });
    }
  };

  render() {
    return (
      <div className="room-reservation">
        <form onSubmit={this.handleSubmit} className="res-date">
          <h4>Select Dates For Your Stay</h4>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
          <input
            class="btn btn-primary mr-1"
            type="submit"
            name="submit"
            value="Reserve Room"
            className="submit"
          />
        </form>
        <br></br>
      </div>
    );
  }
}

export default DateReservation;
