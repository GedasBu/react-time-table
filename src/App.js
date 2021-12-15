import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Works from "./components/Works";
import {Alert} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WorkById from "./components/WorkById";
 
function App() {
  const [alert, setAllert] = useState(false);
  const setAlertHandler = (status) => {
    if (status) {
      setAllert("Pridėta");
    }
  };
  useEffect(() => {
    setTimeout(() => {
    setAllert('');
    }, 5000);
    }, [alert]);
  return (
    <div className="container">
      <Router>
       <Header />
      {(alert)?<Alert variant="success" >{alert}</Alert>: null}
      <Routes>

        <Route path="/" element={<Works status={setAlertHandler}></Works> }/>
        <Route path="/work/:id" element={<WorkById></WorkById>}/> 
        

      </Routes>

      
      </Router>
      
    </div>
  );
}

export default App;
