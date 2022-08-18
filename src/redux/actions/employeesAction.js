import auth from '../../services/authService';
import store from '../index';
export var ALL_EMPLOYEESS = 'ALL_EMPLOYEES'

async function get_employees() {
		console.log('calling..');
		try {
			const genmovies = await auth.allemployees();
           
			store.dispatch({ type: ALL_EMPLOYEESS, payload: genmovies.data });
		} catch (error) {}
	
}

export default get_employees;