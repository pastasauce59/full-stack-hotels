import React, { Component } from "react";

class CartCard extends Component {
  render() {
    return (
      <div className="cart">
        <h5>Hotel: {this.props.resvItems.room.hotel.name}</h5>
        <h5>Room: {this.props.resvItems.room.room_type}</h5>
        <img alt="room_image" src={this.props.resvItems.room.image}></img>
        <h5>Check in: {this.props.resvItems.startDate}</h5>
        <h5>Check out: {this.props.resvItems.endDate}</h5>
        <h5>Price Per Night: ${this.props.resvItems.room.price}</h5>
        <button
            class="btn btn-primary mr-1"
            onClick={() => this.props.handleCartDelete(this.props.resvItems.startDate)}
          >
            Delete
          </button>
      </div>
    );
  }
}

export default CartCard;
