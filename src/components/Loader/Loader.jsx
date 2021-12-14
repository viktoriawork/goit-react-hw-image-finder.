import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class AppLoader extends Component {
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={3000} //3 secs
        className="loader"
      />
    );
  }
}
