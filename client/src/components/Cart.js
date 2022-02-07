import React, { Component } from "react";
import CartCard from "./CartCard";

class Cart extends Component {
  render() {
    return (
      <div className="cart-father">
         {this.props.resvItems.length > 0 ? (
            <h3>Your bookings:</h3>
          ) : (
            <h3 className="empty-cart">Please add to your cart</h3>
          )}

          <button
            disabled={this.props.resvItems.length > 0 ? false : true}
            class="btn btn-primary mr-1"
            onClick={this.props.handleResvPost} >
            Checkout
          </button>

        <div className="cart-container">
          {this.props.resvItems.map((resv) => (
            <CartCard resvItems={resv} handleCartDelete={this.props.handleCartDelete} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
