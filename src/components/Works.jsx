import AddWork from "./AddWork";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services/workServices";
import Work from "./Work";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export const WorksContext = React.createContext({
  //redagavimui
});

function Works(props) {
  const [workId, setWorkId] = useState("");
  const [addWork, setAddWork] = useState(false);
  const [actualWorks, setActualWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [sortBy, setSortBy] = useState("COMPANY_DESC");
  const value = useMemo(
    //redagavimui
    () => ({
      workId,
      setWorkId,
    }),
    [workId]
  );
  const [user,error,loading] = useAuthState(auth);
  const navigate  = useNavigate();

  const addJobHandler = (data) => {
    services.addWork(data);
    // setActualWorks([...actualWorks, data]);
    props.status(true);
  };

  const addWorkHandler = () => {
    setAddWork(true);
  };
  const removeWorkHandler = () => {
    setAddWork(false);
    setWorkId(false);
    console.log("atsaukti");
  };
  const filteredItemsHandler = (criteria) => {
    const filteredItems = actualWorks.filter((item) => {
      return Object.keys(criteria).every((filter) => {
        return criteria[filter] === item[filter];
      });
    });
    setFilteredWorks(filteredItems);
  };
  const onUpdateWorkHandler = (data, id) => {
    //update duomenims
    services.updateWork(id, data);
    setWorkId("");
  };

  useEffect(() => {
    if (!user) navigate ('/')
    console.log(user)
    if (sortBy)
   { services.getAllWorks(setActualWorks, sortBy);}
    
  }, [sortBy]);
  const setSortItems = (sortValue) => {
    setSortBy(sortValue);
  };

  return (
    <>
    
      {(addWork || workId) && (
        <AddWork
          hideWork={removeWorkHandler}
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
              {!addWork ? (
                <Button variant="primary" onClick={addWorkHandler}>
                  Pridėti darbą
                </Button>
              ) : null}
            </Form.Group>
            </Col>
         
            
          </Row>
        </Card.Body>

        <Filter filteredItems={filteredItemsHandler} sortItems={setSortItems} />

        <Card.Header>
          <h3>Darbų sąrašas</h3>
        </Card.Header>
        <Card.Body>
          <WorksContext.Provider value={value}>
            <WorksTable
              data={filteredWorks.length ? filteredWorks : actualWorks}
            >
              {" "}
            </WorksTable>
          </WorksContext.Provider>
        </Card.Body>
      </Card>
    </>
  );
}

export default Works;
