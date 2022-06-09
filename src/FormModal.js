import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function FormModal({ show, handleClose, info, editPerson }) {
  const [form, setForm] = React.useState({
    id: info.title === "Add Form" ? "" : info.id,
    fname: info.title === "Add Form" ? "" : info.fname,
    lname: info.title === "Add Form" ? "" : info.lname,
    age: info.title === "Add Form" ? "" : info.age,
  });

  const handleInputChange = ({ target: { value, name } }) => {
    console.log(name, "MASUK");
    form[name] = value;

    setForm(form);
  };

  const submitForm = (event) => {
    event.preventDefault();
    editPerson(form, info);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{info.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="1"
            onChange={handleInputChange}
            name="id"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            onChange={handleInputChange}
            name="fname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Doe"
            value={form.lname}
            onChange={handleInputChange}
            name="lname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="10"
            value={form.age}
            onChange={handleInputChange}
            name="age"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => submitForm(e)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
