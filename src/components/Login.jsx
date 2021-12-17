import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom"
import {auth,signIn} from "../services/AuthServices"
import { useAuthState } from "react-firebase-hooks/auth";

const Login=()=>{
    const [email, setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [user,error,loading] = useAuthState(auth);
    const navigate = useNavigate();

    const submitHandler =(e)=>{
        e.preventDefault();
        signIn(email,password)



    }

    useEffect (()=>{
        if(loading) return
        if (user) navigate("/works")
    })

    return (
        <>
        <h2 className="mt-3 text-center">Prisijunk</h2>
        <Form className="mx-auto col-sm-6" onSubmit={submitHandler}>
          <Form.Group className="mb-2">
            <Form.Control type="email" placeholder="Iveskite el. pasta" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="password" placeholder="Iveskite slaptazodi" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="Submit"> Prisijungti </Button>
          <div>
              <ul>
                  <li> Jei esate cia pirma karta, <Link to="/register">prisiregistruokite</Link></li>
                  <li> Jei neatsimenate kada lanketes , padesime prisiminti <Link to="/register"></Link></li>
              </ul>
          </div>

        </Form>
      </>
    )

}

export default Login