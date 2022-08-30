import {combineReducers} from 'redux';
import allEmployeesReducer from './employeesReducer';
import allProjectsReducer from './projectsReducer';


export default function allReducers() {
  return combineReducers({
    employees:allEmployeesReducer,
    projects:allProjectsReducer
  });
}