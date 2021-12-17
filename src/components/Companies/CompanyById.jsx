import { Card, Form, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as services from "../../services/companyServices";

const CompanyById = () => {
  const [showCompany, setShowCompany] = useState({});
  const { id } = useParams();

  useEffect(() => {
    services.showById((item) => setShowCompany(item), id);
  }, []);

  return (
    <>
      <Card className="mb-2">
        <Card.Header as="h5" >Apie kompaniją {showCompany.name}</Card.Header>
        <Card.Body>
          <Card.Title>Vadovas: </Card.Title>

          <ListGroup variant="flush">
            <ListGroup.Item>{showCompany.manager}</ListGroup.Item>
            <Card.Title>Telefonas:</Card.Title>
            <ListGroup.Item> {showCompany.telephone}</ListGroup.Item>
            <Card.Title>Papildoma informacija:</Card.Title>
            <ListGroup.Item>
               {showCompany.description}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CompanyById;
