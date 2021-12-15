import firebase from "./firebase";


const SORT_OPTIONS = {

    "COMPANY_ASC": {column : 'company', direction : 'asc'},
    "COMPANY_DSC": {column: 'company', direction : 'dsc'},
    "SERVICES_ASC": {column : 'service', direction : 'asc'},
    "SERVICES_DSC": {column: "service", direction : "dsc"},

}


export const getAllWorks = (onWorkChanged, sortBy) =>{
    firebase
    .firestore()
    .collection('times')
    // .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction )
    .onSnapshot((snapshot)=>{
        const newWork = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onWorkChanged(newWork)
    })
}

export const addWork =(data)=>{
    firebase
    .firestore()
    .collection('times')
    .add(data)


}

export const showById =(item,id)=>{
    firebase
    .firestore()
    .collection('times')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}

export const deleteWork =(id)=>{
    firebase
    .firestore()
    .collection('times')
    .doc(id)
    .delete()
}

export const updateWork = (id,data)=>{
    firebase
    .firestore()
    .collection('times')
    .doc(id)
    .set(data)
    
}

