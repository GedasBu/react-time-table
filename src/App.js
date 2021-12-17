import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Works from "./components/Works";
import {Alert} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WorkById from "./components/WorkById";
import Companies from "./components/Companies/Companies";
import CompanyById from "./components/Companies/CompanyById";
import Register from "./components/Register";
import Login from "./components/Login"

 
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
      <Route exact path="/" element ={<Login/>}></Route>
        <Route exact path="/register" element ={<Register/>}></Route>
        <Route path="/companies" element={<Companies/>}> </Route>
        <Route exact path="/works" element={<Works status={setAlertHandler}></Works> }/>
        <Route path="/work/:id" element={<WorkById></WorkById>}/> 
        <Route path="/companies/company/:id" element={<CompanyById> </CompanyById>}/> 
        <Route path="/register" element={<Companies/>}> </Route>

        

      </Routes>

      
      </Router>
      
    </div>
  );
}

export default App;
