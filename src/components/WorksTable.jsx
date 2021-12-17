import Work from "./Work";
import { Table } from "react-bootstrap";
import * as services from '../services/workServices'

const WorksTable = (props) => {
    const deleteItemHandler=(id)=>{
        services.deleteWork(id);

    }
  
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Klientas</th>
            <th>Suteiktos paslaugos</th>
            
            <th>Pradėta</th>
            <th>Baigta</th>
            <th>Trukmė</th>
            <th>Keisti</th>
            <th>Šalinti</th>
            <th>Plačiau</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((w, i) => (
            <Work
              key={i}
              date={w.date}
              company={w.company}
              service={w.service}           
              startTime={w.startTime}
              endTime={w.endTime}
              id={w.id}
              delete={deleteItemHandler}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WorksTable;
