import {Table} from "react-bootstrap"
import Company from "./Company"

const CompaniesTable =(props)=>{

    
    const removeCompanyHandler =(id)=>{
props.deleteCompany(id);

    }
    
    

    return(
        <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Įmonė</th>
              <th>Vadovas</th>
              <th>Telefonas</th>
              
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.companyList.map((c) => (
              <Company
                key={c.id}
                name={c.name}
                telephone={c.telephone}           
                id={c.id}
                manager={c.manager}
                removeCompany={removeCompanyHandler}
                
                
              />
            ))}
          </tbody>
        </Table>
      </>


    )
}

export default CompaniesTable