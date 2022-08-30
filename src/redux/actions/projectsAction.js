import auth from '../../services/authService';
import store from '../index';
export var ALL_PROJECTS = 'ALL_PROJECTS'

async function get_projects() {
		console.log('calling projects..');
		try {
			const genmovies = await auth.allprojects()
           
			store.dispatch({ type: ALL_PROJECTS, payload: genmovies.data });
		} catch (error) {}
	
}

export default get_projects;