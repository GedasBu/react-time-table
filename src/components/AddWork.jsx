import { useEffect, useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

import { Button } from "react-bootstrap";

import Companies from "./Companies.jsx";
import Services from "./Services.jsx";
import * as services from "../services/workServices"
import * as companyServices from "../services/companyServices" 

function AddWork({ hideWork, works, update, onUpdateWorkHandler}) {
  const [data, setData] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  useEffect(()=>{
    update && services.showById( data => setData(data),update)
 
  },[])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    works(data);
    hideWork();
  };

  const onUpdateHandler = ()=>{
    onUpdateWorkHandler(data,update);

  }
  console.log(data.company)
  return (
    <>
      <Card>
        <Card.Header>Pridėti</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Select
                name="company"
                aria-label="Default select example"
                value={data.Company}
                onChange={handleChange}
              >
                <Companies />
              </Form.Select>
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Select
                name="service"
                aria-label="Default select example"
                value={data.service}
                onChange={handleChange}
              >
                <Services />
              </Form.Select>
              <br />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Atliktas darbas..."
                rows={3}
                value={data.description}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Row xxl={6}>
              <Col>
                <Form.Group>
                  <Form.Label>Nuo:</Form.Label>
                  <Form.Control
                    name="startTime"
                    type="time"
                    value={data.startTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Iki:</Form.Label>
                  <Form.Control
                    name="endTime"
                    type="time"
                    value={data.endTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>


        <Row className="mt-3">
          

         
          <Col sm={1}>
          <Form.Group>
          {(!update)?
              <Button variant="primary" type="submit"> Saugoti </Button>: 
               <Button variant="primary" type="button" onClick={onUpdateHandler}> Atnaujinti </Button>
              }
           </Form.Group>
          </Col>
              

          <Col>
          <Form.Group>
          <Button variant="danger" onClick={hideWork}>
                Atšaukti
              </Button>
              </Form.Group>
          
          </Col>


                   
              
              
          </Row>
        
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddWork;
