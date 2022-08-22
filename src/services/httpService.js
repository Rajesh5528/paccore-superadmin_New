import axios from 'axios';


axios.defaults.baseURL = 'http://dev.bijbol.com/api/v6/';

axios.interceptors.response.use(null, (error) => {
	const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
	if (!expectedError) {
		console.log(expectedError,'expectedError');
		alert('No Network, Please Connect to Internet');
	}
	return Promise.reject(error);
});



export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	
};