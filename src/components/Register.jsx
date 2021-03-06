import { Form, Button } from "react-bootstrap";
import {useState, useEffect} from "react"
import {register,auth} from "../services/AuthServices"
import { useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth" 

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user,error,loading] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect( ()=>{
        if (loading) return
        if(user) navigate('/works')

    },[user,loading])

const submitHandler = (e)=>{
    e.preventDefault();
    if (!name) alert ('Ivesk varda') //Reikalinga normali validacija
    register(name,email,password)
}




  return (
    <>
      <h2 className="mt-3 text-center">Sukurk paskyrą</h2>
      <Form className="mx-auto col-sm-6" onSubmit={submitHandler}>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Iveskite varda" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="email" placeholder="Iveskite el. pasta" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="password" placeholder="Iveskite slaptazodi" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="Submit"> Registruotis </Button>
      </Form>
    </>
  );
};

export default Register;
