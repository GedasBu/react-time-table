import firebase from "../firebaseConfig";

const SORT_OPTIONS = {
  COMPANY_ASC: { column: "company", direction: "asc" },
  COMPANY_DESC: { column: "company", direction: "desc" },
  SERVICES_ASC: { column: "service", direction: "asc" },
  SERVICES_DESC: { column: "service", direction: "desc" },
};

export const getAllWorks = (onWorkChanged, user) => {
  firebase
    .firestore()
    .collection("times")
    .where("uid", "==", user?.uid)    
    .onSnapshot((snapshot) => {
      const newWork = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onWorkChanged(newWork);
    });


};

export const addWork = (data) => {
  firebase.firestore().collection("times").add(data);
};

export const showById = (item, id) => {
  firebase
    .firestore()
    .collection("times")
    .doc(id)
    .get()
    .then((docRef) => {
      item(docRef.data());
    });
};

export const deleteWork = (id) => {
  firebase.firestore().collection("times").doc(id).delete();
};

export const updateWork = (id, data) => {
  firebase.firestore().collection("times").doc(id).set(data);
};
