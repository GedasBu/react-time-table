import { useEffect, useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import Companies from "./Companies.jsx";
import Services from "./Services.jsx";
import * as services from "../services/workServices"
// import * as companyServices from "../services/companyServices" 
import {auth} from "../services/AuthServices"
import {useAuthState} from "react-firebase-hooks/auth"
import {useGlobalContext} from "../context/WorksContext"



function AddWork({ hideWork, works, update, onUpdateWorkHandler}) {
  const [user, loading, error] = useAuthState(auth);
  const { handleForm, handleAddWork, work, handleValidation, errors, addWorktoFirestore} = useGlobalContext();
 

  const [data, setData] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    startTime: "",
    endTime: "",    
  });

  // useEffect(()=>{
  //   setData({...data, uid:user.uid})
  // }, [user])  

  useEffect(()=>{
    update && services.showById( data => setData(data),update) 
  
  },[])

  const handleChange = (e) => {
    handleAddWork({[e.target.name]: e.target.value})
    // setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleValidation(work)
    console.log('from submit form', work)
    // alert(`Forma turi klaidu!, ${errors}`)
    console.log('errors: ', errors)
    if(Object.keys(errors).length !== 0){
      addWorktoFirestore(work);
    }   
  
    handleForm(false)
  };

  const onUpdateHandler = ()=>{
    onUpdateWorkHandler(data,update);
  }
  useEffect (()=>{
    if(user){
      handleAddWork({uid:user.uid})
    }
  }, [user])

  console.log('from form', work)
  
  
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
                value={work.date}
                onChange={handleChange}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Select
                name="company"
                aria-label="Default select example"
                value={work.Company}
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
                value={work.service}
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
                value={work.description}
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
                    value={work.startTime}
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
                    value={work.endTime}
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
          <Button variant="danger" onClick={()=>{handleForm(false)}}>
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
