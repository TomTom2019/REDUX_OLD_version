import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesList } from "../store/actions";

class Home extends Component {
  getMoviesHandler() {
    this.props.dispatch(moviesList());
  }

  render() {
    console.log(this.props); // GIVE PROPS MOVIES
    const { movies } = this.props;
    return (
      <>
        {movies && movies.moviesList
          ? movies.moviesList.map((
              item // GET DATA HERE
            ) => <div key={item.name}>name: {item.name}</div>)
          : null}
        <button onClick={() => this.getMoviesHandler()}>Get movies</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // GET DATA WITH MAPSTATETOPROPS
  return { movies: state.movies };
};

export default connect(mapStateToProps)(Home); // IN CHARGE GOING TO STORE STATE
