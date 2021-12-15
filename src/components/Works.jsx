import AddWork from "./AddWork";
import { Card, Form, Button } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services";
import Work from "./Work";
import React from "react";

export const WorksContext = React.createContext({ //redagavimui
 
});

function Works(props) {
  const [workId, setWorkId] = useState("");
  const [addWork, setAddWork] = useState(false);
  const [actualWorks, setActualWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [sortBy, setSortBy] = useState('COMPANY_DSC')
  const value = useMemo( //redagavimui
    () => ({
      workId,
      setWorkId,
    }) ,[workId] );

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
    console.log('atsaukti')
  };
  const filteredItemsHandler = (criteria) => {
    const filteredItems = actualWorks.filter((item) => {
      return Object.keys(criteria).every((filter) => {
        return criteria[filter] === item[filter];
      });
    });
    setFilteredWorks(filteredItems);
  };
  const onUpdateWorkHandler=(data,id)=>{ //update duomenims
    services.updateWork(id,data)
    setWorkId('');
  }

  useEffect(() => {
    services.getAllWorks(setActualWorks , sortBy);
    console.log(sortBy)
  }, [sortBy]);
  const setSortItems =(sortValue)=>{
    

    setSortBy(sortValue)
  }

 
  return (
    <>
      {(addWork || workId) && (
        <AddWork hideWork={removeWorkHandler} works={addJobHandler} update={workId} onUpdateWorkHandler={onUpdateWorkHandler}/>
      )}

      <Card>
        <Card.Body>
          <Form.Group>
            {!addWork ? (
              <Button variant="primary" onClick={addWorkHandler}>
                Pridėti
              </Button>
            ) : null}
            
          </Form.Group>
        </Card.Body>

        <Filter filteredItems={filteredItemsHandler}  sortItems={setSortItems}/>
        

        <Card.Header>
          <h3>Darbų sąrašas</h3>
        </Card.Header>
        <Card.Body>
          <WorksContext.Provider value={value}> 
          <WorksTable data={filteredWorks.length ? filteredWorks : actualWorks}>
            {" "}
          </WorksTable>
          </WorksContext.Provider>
        </Card.Body>
      </Card>
    </>
  );
}

export default Works;
