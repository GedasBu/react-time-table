import firebase,{app} from "../firebaseConfig"

const auth = app.auth();
const db = app.firestore();


const register = async (name,email,password)=>{
    try {
        const res = await auth.createUserWithEmailAndPassword(email,password) //Magic
        const user = res.user;
        await db.collection('users').add({
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch(error){
        console.log(error)
    }


    
}
const logout =()=>{
    auth.signOut();
}
const signIn = async(email, password)=>{
    try{
        await auth.signInWithEmailAndPassword(email,password)
    }catch (error){
            console.log(error)
        }
   

}

const resetPassword = async (email)=>{
    try{
      await auth.sendPasswordResetEmail(email)
    alert('Slpatazodzio atkurimo nuoroda issiusta')  
    } catch (error) {
        console.log(error)
    }
    

}


export default firebase
export {
    auth,
    db,
    register,
    logout,
    signIn,
    resetPassword

}