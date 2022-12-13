import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddEditForm({
  form_name,
  button_name,
  addToggle,
  editToggle,
  setAddToggle,
  setEditToggle,
  data,
}) {
  const [initialValues, setInitialValues] = useState({
    name: data.name,
    species: data.species,
    description: data.description,
  });

  useEffect(() => {
    setInitialValues({
      name: data.name,
      species: data.species,
      description: data.description,
    });
  }, [data.description, data.name, data.species, data.id]);

  const handleClose = () => {
    setAddToggle(false);
    setEditToggle(false);
  };

  const patchRequest = async (id) => {
    await Axios.patch(`http://localhost:3000/seashells/${id}`, {
      name: initialValues.name,
      species: initialValues.species,
      description: initialValues.description,
    });
  };

  const postRequest = async () => {
    await Axios.post("http://localhost:3000/seashells", {
      name: initialValues.name,
      species: initialValues.species,
      description: initialValues.description,
    });
  };

  const handleSubmit = () => {
    button_name === "Add" ? postRequest() : patchRequest(data.id);
  };

  return (
    <>
      <Modal
        show={addToggle || editToggle}
        onHide={handleClose}
        style={{
          width: "100%",
          height: "100rem",
          marginTop: "25px",
          marginLeft: "15px",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{form_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Name ..."
                defaultValue={editToggle && `${initialValues.name}`}
                onChange={(event) =>
                  setInitialValues((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
                contentEditable="true"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Species ..."
                defaultValue={editToggle && `${initialValues.species}`}
                onChange={(event) =>
                  setInitialValues((prev) => ({
                    ...prev,
                    species: event.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="textarea"
                placeholder="Enter Your Description ..."
                defaultValue={editToggle && `${initialValues.description}`}
                onChange={(event) =>
                  setInitialValues((prev) => ({
                    ...prev,
                    description: event.target.value,
                  }))
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            disabled={
              !initialValues.name ||
              !initialValues.species ||
              !initialValues.description
            }
          >
            {button_name}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
