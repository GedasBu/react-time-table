import { OPEN_FORM, SET_WORKS, ADD_WORK, VALIDATE_WORK } from "../actions/types";
import workValidation from "../utilities/workValidation";

const WorksReducer = (state, action) => {
 
  switch (action.type) {
    case SET_WORKS:
      return {
        ...state,
        works: action.payload,
      };
    case OPEN_FORM:
      return {
        ...state,
        isOpen: action.payload,
      };
    case ADD_WORK:
        return{
            ...state,
            work:{...state.work, ...action.payload}
        }

    case VALIDATE_WORK:
      console.log(action.payload)
      return {
        ...state,
        errors: workValidation(action.payload),
        
      }


    default:

      return state;
  }
  
};

export default WorksReducer;
