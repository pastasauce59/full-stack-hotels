import React, { Component } from "react";

class ResvCard extends Component {
  render() {
    const beef = this.props.hotels.filter((hotel) =>
      hotel.rooms.find((room) => room.id === this.props.resv.room_id)
    );
    const beef1 = beef[0].rooms.filter(
      (room) => room.id == this.props.resv.room_id
    );

    return (
      <div className="user-resv">
        <h5>{beef[0].name}</h5>
        <h5>Room: {beef1[0].room_type}</h5>
        <img alt="room_image" src={beef1[0].image} />
        <p></p>
        <h6>Your stays:</h6>
        <h5>{this.props.resv.date_start} -</h5>
        <h5>{this.props.resv.date_end}</h5>
        <h5>Price Per Night: ${beef1[0].price}</h5>
        <button
          class="btn btn-primary mr-1"
          onClick={() => this.props.handleResvDelete(this.props.resv.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ResvCard;
