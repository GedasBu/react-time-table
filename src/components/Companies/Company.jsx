import {Link } from "react-router-dom"


const Company =(props)=>{

 const delComapnyHandler =()=>{

    props.removeCompany(props.id);
    
 }


    return (

        <tr>
            <td>{props.name}</td>
            <td>{props.manager}</td>
            <td>{props.telephone}</td>
           
            <td><a href="#/" onClick={delComapnyHandler} >Trinti</a></td>            
            <td><Link key={props.id} to ={`company/${props.id}`}> Plačiau</Link></td>
        </tr>


    )
}

export default Company