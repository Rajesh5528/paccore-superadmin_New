import {combineReducers} from 'redux';
import allEmployeesReducer from './employeesReducer';


export default function allReducers() {
  return combineReducers({
    employees:allEmployeesReducer
  });
}