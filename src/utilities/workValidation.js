
const workValidation = (values)=>{
    const errors= {}
    // console.log('is work validation', values.date)
    if(!values.date){
        errors.date = "Datą nurodyti privaloma"
       
    }
    if(!values.company){
        errors.company = "Kompanija nurodyti privaloma"
    }
// console.log('is work validation errors',errors)
return errors;
    //apsirasome visas validacijas...
}

export default workValidation