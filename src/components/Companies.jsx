import Company from './Company'
import companies from '../data/companies'

const Companies = ()=>{

    return(
        <>
        {/* <option>Pasirinkite įmonę</option> */}
        {companies.map(obj => <Company key={obj.code} title={obj.title}/>)}
        
        </>
    )
}
export default Companies;