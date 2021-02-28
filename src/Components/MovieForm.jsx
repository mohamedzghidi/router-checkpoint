import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function MovieForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    handleClose();
    const newId = props.movies.length;
    const newMovie = {
      id: newId,
      title: document.getElementById("txtTitle").value,
      description: document.getElementById("txtDescription").value,
      posterUrl: document.getElementById("txtPoster").value,
      trailerUrl: document.getElementById("txtTrailer").value,
      rate: document.getElementById("txtRate").value,
    };
    const newMovies = [...props.movies, newMovie];
    console.log(newMovies);

    props.updateMovies(newMovies);

    document.getElementById("txtTitle").value = "";
    document.getElementById("txtDescription").value = "";
    document.getElementById("txtPoster").value = "";
    document.getElementById("txtTrailer").value = "";
    document.getElementById("txtRate").value = "";
  };

  return (
    <div style={{ textAlign: "center" }} className="mt-3">
      <Button variant="success" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              id="txtTitle"
              className="mb-2"
              type="text"
              placeholder="Title"
              size="lg"
            />
            <Form.Control
              id="txtDescription"
              as="textarea"
              rows={3}
              placeholder="Description"
              className="mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Rate"
              className="mb-2"
              id="txtRate"
            />
            <Form.Control
              type="text"
              placeholder="Poster Url"
              className="mb-2"
              id="txtPoster"
            />
            <Form.Control
              type="text"
              placeholder="Trailer Url"
              id="txtTrailer"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieForm;
