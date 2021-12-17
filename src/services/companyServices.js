import firebase from "../firebaseConfig";


export const getAllCompanies = (setCompanies) =>{
    
    firebase
    .firestore()
    .collection('companies')
    .onSnapshot((snapshot)=>{
        const newCompany= snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))

       
        setCompanies(newCompany)

    })
}

export const addCompany =(data)=>{
    firebase
    .firestore()
    .collection('companies')
    .add(data)


}

export const showById =(item,id)=>{
    firebase
    .firestore()
    .collection('companies')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}

export const deleteCompany =(id)=>{
    firebase
    .firestore()
    .collection('companies')
    .doc(id)
    .delete()
}

export const updateWork = (id,data)=>{
    firebase
    .firestore()
    .collection('companies')
    .doc(id)
    .set(data)
    
}

