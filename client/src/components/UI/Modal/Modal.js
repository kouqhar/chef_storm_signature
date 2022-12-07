import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

// Styles
import styles from "./styles/Modal.module.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const { children, show, modalClosed } = this.props;

    let modalDisplay = show
      ? [styles.Modal, styles.Modal__Show].join(" ")
      : [styles.Modal, styles.Modal__remove].join(" ");

    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div className={modalDisplay}>{children}</div>
      </Aux>
    );
  }
}

export default Modal;
