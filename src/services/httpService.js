import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


// axios.defaults.baseURL = 'https://dev.bijbol.com/api/v6/';
axios.defaults.baseURL = 'http://15.207.163.215:8000/api/v6/';

axios.interceptors.response.use(null, (error) => {
	// let navigate = useNavigate();

	const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
	if (!expectedError) {
		console.log(expectedError,'expectedError');
		
		toast.error('No Network, Please Connect to Internet', {
			position: toast.POSITION.BOTTOM_LEFT
		  });
		  setTimeout(() => {
			window.location.reload(false)
			// navigate("/login", { replace: true });
		  }, 2000);
		  
		// alert('No Network, Please Connect to Internet');
	}
	return Promise.reject(error);
});



export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,

};