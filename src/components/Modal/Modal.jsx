import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {};

  handelKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handelKeyDown);
  }

  handelBackdrop = (event) => {
    if (event.currentTarget !== event.target) return false;
    this.props.onClose();
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handelBackdrop}>
        <div className="Modal">
          <img src={this.props.url} alt="big img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
