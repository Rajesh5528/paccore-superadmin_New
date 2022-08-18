import { ALL_EMPLOYEESS } from "../actions/employeesAction";



const allEmployeesReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ALL_EMPLOYEESS:
      return payload;
    default:
      return state;
  }
};
export default allEmployeesReducer;