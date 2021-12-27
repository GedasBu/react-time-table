import Company from './Company'
// import companies from '../data/companies'
import * as services from "../services/companyServices"
import {useState, useEffect} from "react"

const Companies = ()=>{
    const [companies, setCompanies]=useState([])

    useEffect(() => {
        services.getAllCompanies(setCompanies);
      }, []);
      

    return(
        <>
        <option>Pasirinkite įmonę</option>
        
        {companies.map(obj => <Company key={obj.id} title={obj.name}/>)}
        
        </>
    )
}
export default Companies;