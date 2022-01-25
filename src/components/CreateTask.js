import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CreateTask = ({ show, handleClose, handleShow }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Please Enter the Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Please Enter the Description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTask;
