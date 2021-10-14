import React, { Component } from "react";
import CartCard from "./CartCard";

class Cart extends Component {
  render() {
    console.log(this.props.resvItems);
    return (
      <div class="text-center">
        {this.props.resvItems.length > 0 ? (
          <h3>Your bookings:</h3>
        ) : (
          <h3>Please add to your cart</h3>
        )}

        {this.props.resvItems.map((resv) => (
          <CartCard resvItems={resv} />
        ))}

        <button
          disabled={this.props.resvItems.length > 0 ? false : true}
          class="btn btn-primary mr-1"
          onClick={this.props.handleResvPost}
        >
          Checkout
        </button>
      </div>
    );
  }
}

export default Cart;
