import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HotelContainer from "./components/HotelContainer";
import NavBar from "./components/NavBar";
import AccountLogin from "./components/AccountLogin";
import Reservations from "./components/Reservations";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import "./custom-theme.scss";
import { API_ROOT } from "./apiRoot";

export default class App extends Component {
  state = {
    hotels: [],
    currentUser: "",
    currentUserResv: [],
    resvItems: [],
    loggedIn: false,
    cartCount: 0
  };

  componentDidMount() {
    fetch(`${API_ROOT}/hotels`)
      .then((res) => res.json())
      .then((hotelsArr) => this.setState({ hotels: hotelsArr }));
  }

  addToCart = (resvObj) => {
    this.setState({ resvItems: [...this.state.resvItems, resvObj],
     cartCount: this.state.cartCount +1
    });
  };

  loggedIn = (user) => {
    this.setState({
      currentUser: user,
      currentUserResv: user.reservations,
      loggedIn: !this.state.loggedIn,
    });
  };

  handleLogout = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      currentUser: "",
      resvItems: [],
      cartCount: 0
    });
    alert("You've been logged out");
  };

  handleResvPost = () => {
    this.state.resvItems.map((resvItem) => {
      let newResv = {
        date_start: resvItem.startDate,
        date_end: resvItem.endDate,
        room_id: resvItem.room.id,
        guest_id: this.state.currentUser.id,
      };

      fetch(`${API_ROOT}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResv),
      })
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            currentUserResv: [...this.state.currentUserResv, res],
            resvItems: [],
            cartCount: 0
          })
        );
    });
  };

  handleCartDelete = (cartItem) => {
    this.setState({ 
      resvItems: this.state.resvItems.filter( (resv) => resv.startDate !== cartItem),
      cartCount: this.state.cartCount -1
    })
  } 

  handleResvDelete = (resvDelete) => {
    let userResvNew = this.state.currentUserResv.filter(
      (resv) => resv.id !== resvDelete
    );
  
    fetch(`${API_ROOT}/reservations/${resvDelete}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          currentUserResv: userResvNew,
        });
        alert("Reservation has been canceled.");
      });
  };

  render() {
    return (
      <Router>
        <NavBar
          loggedIn={this.state.loggedIn}
          handleLogout={this.handleLogout}
          cartCount={this.state.cartCount}
        />
        <Switch>
          <Route 
            exact
            path="/login"
            render={(routerProps) => (
              <AccountLogin
                routerProps={routerProps}
                loggedIn={this.loggedIn}
              />
            )}
          />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/cart">
            <Cart
              resvItems={this.state.resvItems}
              hotels={this.state.hotels}
              handleResvPost={this.handleResvPost}
              handleCartDelete={this.handleCartDelete}
            />
          </Route>
          <Route exact path="/reservations">
            <Reservations
              currentUserResv={this.state.currentUserResv}
              hotels={this.state.hotels}
              handleResvDelete={this.handleResvDelete}
            />
          </Route>
          <Route exact path="/our-hotels">
            <HotelContainer
              hotels={this.state.hotels}
              addToCart={this.addToCart}
              loggedIn={this.state.loggedIn}
            />
          </Route>
          <div className="welcome-container">
            <h2 className="welcome">Welcome to your next getaway.</h2>
          </div>
        </Switch>
      </Router>
    );
  }
}
