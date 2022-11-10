import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

const Search = ({ handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search for New Images..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Search;
