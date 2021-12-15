import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Companies from "./Companies";
import Services from "./Services";
import { BsDashLg } from "react-bootstrap-icons";

const Filter = (props) => {
  const [filter, setFilter] = useState({});

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   props.filteredItems(filter);
  // };

  const resetFilter = () => {
    setFilter({});
  };

  useEffect(() => {
    props.filteredItems(filter);
  }, [filter]);
  
  const setSort =(e)=>{
    props.sortItems(e.target.value)
    
    
  }

  return (
    <Card.Body>
      <Form>
        <Form.Group>
          <br />
          <Row xxl={6}>
            <Col>
              <Form.Select onChange={handleFilter} name="company">
                <Companies />
              </Form.Select>
            </Col>
            <br />
            <Col>
              <Form.Select onChange={handleFilter} name="service">
                <Services />
              </Form.Select>
            </Col>
            <br />
            <Col>
              {Object.keys(filter).length !== 0 && (
                <Button type="reset" variant="primary" onClick={resetFilter}>
                  Išvalyti
                </Button>
              )}
            </Col>
            <Col>
              <Form.Select onChange={setSort}>
              <option >Rūšiuot pagal pav</option>
                <option value="COMPANY_ASC">ASC</option>
                <option value="COMPANY_DSC">DSC</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Card.Body>
  );
};

export default Filter;
