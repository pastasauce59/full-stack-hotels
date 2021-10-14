import React, { Component } from "react";
import DateReservation from "./DateReservation";

class RoomCard extends Component {
  state = {
    reservation: false,
  };

  handleReservation = () => {
    this.setState({
      reservation: !this.state.reservation,
    });
  };

  render() {
    return (
      <div className="rooms">
        <h4>{this.props.rooms.room_type}</h4>
        <img alt="room" src={this.props.rooms.image}></img>
        <h4>Price: ${this.props.rooms.price} - Per Night</h4>
        {this.props.loggedIn ? (
          <button class="btn btn-primary mr-1" onClick={this.handleReservation}>
            {this.state.reservation ? "Cancel" : "Reserve This Room!"}
          </button>
        ) : (
          <h5>Please log in to book a room</h5>
        )}
        <p></p>
        {this.state.reservation ? (
          <DateReservation
            rooms={this.props.rooms}
            addToCart={this.props.addToCart}
          />
        ) : null}
      </div>
    );
  }
}

export default RoomCard;
