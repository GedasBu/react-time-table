import React, {useContext} from "react"
import { WorksContext } from "./Works"
import { Link } from "react-router-dom";
import diff from "../utilities/TimeCalc";

const Work = (props)=>{
    const {workId, setWorkId}=useContext(WorksContext);

    const getIdHandler=()=>{
        props.delete(props.id)

    }

    const getIdUpdateHandler =()=>{
        setWorkId(props.id)

    }
   

    return(
        
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>          
            <td>{props.startTime}</td>
            <td>{props.endTime}</td>
            <td>{diff(props.startTime,props.endTime)}</td>
            <td><a href="#/" onClick={getIdUpdateHandler}>Redaguoti</a></td>
            <td><a href="#/" onClick={getIdHandler}>Trinti</a></td>            
            <td><Link key={props.id} to ={`work/${props.id}`}> Plačiau</Link></td>
        </tr>
    )
}

export default Work