import todos from "../todos";
import React from "react";
import "./TodoList.css";
import { FaTrash } from "react-icons/fa";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import todof from "../todo.jpg"

const TodoList = () => {
  return (
    <Row>
      {todos.map((todo) => (
          <Col style={{margin:"30px 30px"}} md="2">
            <Card style={{ width: "18rem"}}>
              <Card.Img variant="top" src={todof} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <FaTrash />
              </Card.Body>
            </Card>
          </Col>
      ))}
    </Row>
  );
};

export default TodoList;
