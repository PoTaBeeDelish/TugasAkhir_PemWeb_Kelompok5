import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function Modals({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Show Person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>First Name: {data.fname}</p>
        <p>Last Name: {data.lname}</p>
        <p>Age: {data.age}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
