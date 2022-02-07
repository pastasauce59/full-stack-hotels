import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert("Thanks for signing up");
          window.location.href = "http://localhost:4000/login";
        }
      });
  };

  render() {
    const { username, password, age } = this.state;

    return (
      <div className="login-signup-container">
        <form onSubmit={this.handleSubmit}>
          <h1>Signup</h1>

          <label>Username</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={username}
            onChange={this.handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={this.handleChange}
          />

          <label>Age</label>
          <input type="age" name="age" value={age} onChange={this.handleChange} />

          <input class="btn btn-primary mr-1" type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default Signup;
