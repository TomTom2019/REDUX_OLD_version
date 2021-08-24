import React, { Component } from "react";
import { connect } from "react-redux"; // CONNECT
import { moviesList } from "../store/actions";

class Home extends Component {
  getMoviesHandler() {
    this.props.dispatch(moviesList()); // DISPATCH NEED ACTION.JS
    // DISPATCH SENT TO MOVIES_REDUCER.JS
  }

  render() {
    console.log(this.props); // CONNECT INJET PROPS AND HAVE DISPATCH
    return (
      <>
        <button onClick={() => this.getMoviesHandler()}>Get movies</button>
      </>
    );
  }
}

export default connect()(Home); //CONNECT WILL INJET PROPS IN HOME
