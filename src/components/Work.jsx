import React, {useContext} from "react"
import { WorksContext } from "./Works"
import { Link } from "react-router-dom";

const Work = (props)=>{
    const {workId, setWorkId}=useContext(WorksContext);

    const getIdHandler=()=>{
        // console.log(props.id)
        props.delete(props.id)

    }

    const getIdUpdateHandler =()=>{
        setWorkId(props.id)

    }


    const diff = (start, end)=> {
      
        start = start.split(":");
        end = end.split(":");
        const startDate = new Date(0, 0, 0, start[0], start[1], 0);
        const endDate = new Date(0, 0, 0, end[0], end[1], 0);
        let diff = endDate.getTime() - startDate.getTime();
        let hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(diff / 1000 / 60);
        
        return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
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