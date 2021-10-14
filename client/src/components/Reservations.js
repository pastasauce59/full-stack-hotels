import React, { Component } from "react";
import ResvCard from "./ResvCard";

class Reservations extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.currentUserResv.map((resv) => (
          <ResvCard
            hotels={this.props.hotels}
            resv={resv}
            handleResvDelete={this.props.handleResvDelete}
          />
        ))}
      </div>
    );
  }
}

export default Reservations;
