import http from "./httpService";

export async function login(obj) {
	
	const data = await http.post('/pactimeLogin',obj);
    if(data.data.status === true){
        const dett = await localStorage.setItem('logindata',data.data)
    }
    
	return data;
}
export async function allemployees() {
	
	const data = await http.post('/getAllUser');
   
	return data;
}
export async function getlogbyday(obj) {
	
	const data = await http.post('/getLogByDay',obj);
   
	return data.data;
}
export async function getanalytdata(obj) {
	
	const data = await http.post('/getEmployeeAnalytics',obj);
   
	return data.data;
}
export async function createemp(obj) {
	
	const data = await http.post('/createEmployee',obj);
   
	return data.data;
}
export async function getCurrentUser() {
	try {
        // const dfet = await localStorage.getItem()
		// const jwt = await Keychain.getInternetCredentials(Config.SERVER);
		// if (jwt) {
		// 	const decoded = jwtDecode(helpr.decrypt(jwt.password));
		// 	const datenow = Date.now() / 1000;
		// 	if (decoded.exp > datenow) {
		// 		return decoded;
		// 	} else logout();
		// 	return false;
		// } else {
		// 	return false;
		// }
	} catch (ex) {
		return ex;
	}
}
export default {
	login,
    allemployees,
    getlogbyday,
    getanalytdata,
	createemp
}