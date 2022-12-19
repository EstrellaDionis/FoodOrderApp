import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

//added onClick prop to close the backdrop. It's coming from App.js
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

//this is where the actual content will be passed to the modal
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//this is grabbing the newly created div (we created) with the id of "overlays" in our index.html
const portalElement = document.getElementById("overlays");

//we actually don't need portals and can do it like this:
// return <Fragment>
//        <Backdrop />
//        <ModalOverlay>{props.children}</ModalOverlay>
//        </Fragment>
//BUT...vvv
//we're using portal here in order to not have the html code be "all over the place" L.139

//the arguments in .createPortal are WHAT to portal and WHERE to portal it to! ex: Backdrop is being portaled to portalElement
//we must also make sure to have {props.children} for ModalOverlay here so that it knows to accept the child's input
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
