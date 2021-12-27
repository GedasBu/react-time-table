import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as service from "../services/workServices";
import {auth} from "../services/AuthServices"
import { getWorks, openForm, addWork, validateWork } from "../actions/WorksActons";
import WorkReducer from "../reducers/WorkReducer";

const initialState = {
    works: [],
    work:{
        date:'',
        company:'',
        service:'',
        description:'',
        timeFrom:'',
        timeTo:'',
    },
    errors:[],
    isOpen: false

}

const AppContext = createContext();


const AppProvider =  ({children})=>{
    const [user,loading, error] = useAuthState(auth)
    const [state, dispatch] = useReducer(WorkReducer,initialState)

    useEffect(()=>{
        if(loading) {
            return;
        } 
        try{
            service.getAllWorks((data)=>{
                dispatch(getWorks(data))
            }, user)

        } catch (error){
            console.log(error)
        }
      

    },[user, loading])

    const handleForm = (status)=>{
        dispatch(openForm(status));
    }
    const handleAddWork = (input)=>{
        dispatch(addWork(input));
    }

    const handleValidation = (data)=>{
        console.log('is Context data',data)
        dispatch(validateWork(data))
    }
    const addWorktoFirestore= (data)=>{
        try {
            service.addWork(data)

        } catch (error){
            console.log(error)
        }

    }

    console.log('is context state', state.errors)





    
   

    return (
    <AppContext.Provider value={{...state, handleForm, handleAddWork, handleValidation,addWorktoFirestore}}>
        {children}
    </AppContext.Provider>
    )
    

}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}