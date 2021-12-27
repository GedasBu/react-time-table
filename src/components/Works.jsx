import AddWork from "./AddWork";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services/workServices";
// import Work from "./Work";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import {useGlobalContext} from "../context/WorksContext"

export const WorksContext = React.createContext({
  //redagavimui
});

function Works(props) {
  const {works, isOpen, handleForm} = useGlobalContext();
  const [workId, setWorkId] = useState("");
  const [addWork, setAddWork] = useState(false);
  const [actualWorks, setActualWorks] = useState([]); //nebereikalingas po reducer
  // const [filteredWorks, setFilteredWorks] = useState([]);
  const [sortBy, setSortBy] = useState("COMPANY_DESC");
  // const value = useMemo(
  //   //redagavimui
  //   () => ({
  //     workId,
  //     setWorkId,
  //   }),
  //   [workId]
  // );
  const [user,error,loading] = useAuthState(auth);
  
  const navigate  = useNavigate();

  const addJobHandler = (data) => {
    services.addWork(data);
    props.status(true);
  };

  // const addWorkHandler = () => {
  //   setAddWork(true);
  // };

  const removeWorkHandler = () => {
    setAddWork(false);
    setWorkId(false);
   
  };


  const onUpdateWorkHandler = (data, id) => {
    //update duomenims
    services.updateWork(id, data);
    setWorkId("");
  };

  useEffect(() => {
    if (!user) navigate ('/') 
    if (user)
   { services.getAllWorks(setActualWorks, user);}
    
  }, [user]);

  const setSortItems = (sortValue) => {
    setSortBy(sortValue);
  };
 


  return (
    <>
    
      {(isOpen) && (
        <AddWork
          // hideWork={removeWorkHandler}
          works={addJobHandler}
          update={workId}
          onUpdateWorkHandler={onUpdateWorkHandler}
        />
      )}

      <Card>
        <Card.Body>
          <Row>
            <Col xs={2}>
             <Form.Group>
              {!isOpen ? (
                <Button variant="primary" onClick={()=>{handleForm(true)}}>
                  Pridėti darbą
                </Button>
              ) : null}
            </Form.Group>
            </Col>            
          </Row>
        </Card.Body>
        {/* <Filter filteredItems={filteredItemsHandler} sortItems={setSortItems} /> */}
        <Card.Header>
          <h3>Darbų sąrašas</h3>
        </Card.Header>
        <Card.Body>
          {/* <WorksContext.Provider value={value}> */}
            <WorksTable
              data={works}
            >
              {" "}
            </WorksTable>
          {/* </WorksContext.Provider> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Works;
