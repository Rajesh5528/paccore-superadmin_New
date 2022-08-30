import { ALL_PROJECTS } from './../actions/projectsAction';



const allProjectsReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ALL_PROJECTS:
      return payload;
    default:
      return state;
  }
};
export default allProjectsReducer;