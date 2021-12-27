import {Form,Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { resetPassword, auth } from "../services/AuthServices"



const Reset =()=>{
    const [email,setEmail]= useState();
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        if(!email) alert('Ivesk emaila')
        resetPassword(email);
        navigate("/login")
    }

    return(
        <>
        <h2 className="mt-3 text-center">Atsatykite slaptažodį</h2>
        <Form className="mx-auto col-sm-6" onSubmit={submitHandler}>
            <Form.Control type="email" placeholder="El. pašto adresas" className="mb-2" value={email}  onChange={e=> setEmail(e.target.value)}/>
            <Button type="submit" >Atstatykite</Button>


        </Form>
        <div className="text-center">
            Neturite paskyros? <Link to="/register" >Registruokis</Link>
        </div>
        </>

    )
}

export default Reset