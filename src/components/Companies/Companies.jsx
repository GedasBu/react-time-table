import { Card, Form, Button } from "react-bootstrap";
import CompaniesTable from "./CompaniesTable";
import { useState, useEffect } from "react";
import * as services from "../../services/companyServices";
import AddCompany from "./AddCompany";
import CompanyById from "./CompanyById"

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [addCompany, setAddCompany] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  console.log("add company", AddCompany);

  useEffect(() => {
    services.getAllCompanies(setCompanies);
  }, []);

  const addCompanyHandler = () => {
    setAddCompany("true");
  };


  const hideAddCompanyHandler = () => {
    setAddCompany(false);

  };
  const addNewCompanyHandler =(newCompany)=>{
      services.addCompany(newCompany)
      hideAddCompanyHandler();
  }

  const deleteCompanyHandler=(id)=>{
      services.deleteCompany(id)
  
  }
// 

 
  return (
    <>
      {addCompany && <AddCompany hideAdd={hideAddCompanyHandler} addnewCompany={addNewCompanyHandler}/>}
     

      <Card>
        <Card.Body>
          <Form.Group className="mb-2">
              {(!addCompany)&& <Button variant="primary" onClick={addCompanyHandler}>
              Pridėti
            </Button>  }
            
          </Form.Group>
          <Card.Header>
            <h3>Imoniu sarasas</h3>
          </Card.Header>
        </Card.Body>
        <Card.Body>
          <CompaniesTable companyList={companies} deleteCompany={deleteCompanyHandler}> </CompaniesTable>
        </Card.Body>
      </Card>
    </>
  );
};

export default Companies;
