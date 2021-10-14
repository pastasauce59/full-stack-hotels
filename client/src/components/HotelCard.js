import React, { Component } from "react";
import RoomCard from "./RoomCard";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

let ratingMap = {
  5: "⭐️⭐️⭐️⭐️⭐️",
  4: "⭐️⭐️⭐️⭐️",
  3: "⭐️⭐️⭐️",
  2: "⭐️⭐️",
  1: "⭐️",
};

class HotelCard extends Component {
  state = {
    roomsForm: false,
  };

  handleRooms = () => {
    this.setState({
      roomsForm: !this.state.roomsForm,
    });
  };

  render() {
    return (
      <div className="hotels">
        <h2>{this.props.hotels.name}</h2>

        <img alt="hotel" src={this.props.hotels.image} />

        <h3> Rating: {ratingMap[this.props.hotels.rating]}</h3>

        <p></p>
        <button class="btn btn-primary mr-1" onClick={this.handleRooms}>
          {this.state.roomsForm ? "Close" : "Book A Room!"}
        </button>
        <p></p>

        <Container>
          <Row lg={1} className="justify-content-md-center">
            {this.state.roomsForm
              ? this.props.hotels.rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    rooms={room}
                    addToCart={this.props.addToCart}
                    loggedIn={this.props.loggedIn}
                  />
                ))
              : null}
          </Row>
        </Container>
      </div>
    );
  }
}

export default HotelCard;
