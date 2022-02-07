import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="links">
        <h1 className="fsh">Full-stack Hotels</h1>
        
        <Link to="/cart">
          <i class="fas fa-shopping-cart"></i> 
          Cart {this.props.cartCount > 0 ? <span className="counter">{this.props.cartCount}</span> : null}
          {console.log(this.props.cartCount)}
        </Link>
       
        <Link to="/hotels">
          <i class="fa fa-home icon-home lnr lnr-home ion-ios-home-outline"></i>{" "}
          Hotels
        </Link>
       
        {this.props.loggedIn === false ? (
        <Link to="/signup">
          <i class="fa fa-user icon-user lnr lnr-user ion-ios-contact-outline"></i>{" "}
          Signup
        </Link>
        ) : (
          null
        )}

        {this.props.loggedIn === false ? (
          <Link to="/login">
            <i class="fa fa-user icon-user lnr lnr-user ion-ios-contact-outline"></i>{" "}
            Login
          </Link>
        ) : (
          <Link to="/hotels" onClick={this.props.handleLogout}>
            <i class="fa fa-user icon-user lnr lnr-user ion-ios-contact-outline"></i>{" "}
            Logout
          </Link>
        )}
       
        {this.props.loggedIn ? (
          <Link to="/reservations">
            {" "}
            <i class="fa fa-calendar-alt icon-calendar lnr lnr-calendar-full ion-ios-calendar-outline"></i>{" "}
            Your Reservations
          </Link>
        ) : null}

      </div>
    );
  }
}

export default NavBar;
