import { OPEN_FORM, SET_WORKS, ADD_WORK, VALIDATE_WORK } from "./types/index.js"

export const getWorks = (data)=>{
    return{
        type: SET_WORKS,
        payload:data

    }

}

export const openForm = (status)=>{
    return{
        type: OPEN_FORM,
        payload: status
    }
}

export const addWork =(data)=>{
    return {
        type:ADD_WORK,
        payload:data
     
    }
}

export const validateWork = (error)=>{
    return {
        type: VALIDATE_WORK,
        payload: error
    }
}