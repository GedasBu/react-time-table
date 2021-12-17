import { useEffect, useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

import { Button } from "react-bootstrap";

function AddCompany(props) {
  const [data, setData] = useState({
    name: "",
    telephone: "",
    manager: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target.value)
    // console.log(e.target.name)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    props.addnewCompany(data)
    // props.hideAdd();
  };

  // const onUpdateHandler = ()=>{
  //   onUpdateComapnyHandler(data,update);

  // }
  return (
    <>
      <Card className="mb-2">
        <Card.Header>Pridėti</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Pavadinimas"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Vadovas"
                value={data.manager}
                onChange={handleChange}
                name="manager"
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Telefonas"
                value={data.telephone}
                onChange={handleChange}
                name="telephone"
              />
            </Form.Group>
           

            <Row className="mt-3">
              <Col sm={1}>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    {" "}
                    Saugoti{" "}
                  </Button>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Button variant="danger" onClick={props.hideAdd}>Atšaukti</Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddCompany;
