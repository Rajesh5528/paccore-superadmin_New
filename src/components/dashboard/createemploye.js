import React, { Component, useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { toast } from 'react-toastify';
import authService from '../../services/authService';
import get_employees from '../../redux/actions/employeesAction';
import { useNavigate } from "react-router-dom";

const CreateEmploye = () => {
    const [image,setImage] = useState(null);
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [empid,setEmpId] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [teams,setTeams] = useState(['Lerata','Non-Lerata'])
    const [checked, setChecked] = useState([]);
    const [btndis,setBtndis] = useState(false)
    let navigate = useNavigate();
    const uploadSingleFile = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
  const submit = async() => {
    await setBtndis(true)
    if(!firstname){
        await setBtndis(false)
        toast.error('Enter First Name', {
            position: toast.POSITION.BOTTOM_LEFT
          });
    }else if(!lastname){
        await setBtndis(false)
        toast.error('Enter Last Name', {
            position: toast.POSITION.BOTTOM_LEFT
          });
    }else if(!empid){
        await setBtndis(false)
        toast.error('Enter Employee ID', {
            position: toast.POSITION.BOTTOM_LEFT
          });
    }else if(phone?.length < 10 || phone?.length > 12){
        await setBtndis(false)
        toast.error('Invalid Phone Number', {
            position: toast.POSITION.BOTTOM_LEFT
          });
    }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        await setBtndis(false)
         toast.error('Invalid Email Format', {
             position: toast.POSITION.BOTTOM_LEFT
           });
     }else if(password?.length < 4){
        await setBtndis(false)
         toast.error('Password Should Have Greater Than 4 Characters', {
             position: toast.POSITION.BOTTOM_LEFT
           });
     }else {
        try {
            const fullname = `${firstname} ${lastname}`
            const obj ={
                "empId":empid,
                "empName":fullname,
                "email":email,
                "phone":phone,
                "password":password
            }
            console.log(obj,'obj');
            const det = await authService.createemp(obj);
            console.log(det,'resp');
            if(det.status === true){
                setBtndis(false)
                get_employees();
                navigate("/emplist", { replace: true });
                // navigate("/emplist", { replace: true });
                toast.success(det.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                  });
            }else {
                setBtndis(false)
                toast.error(det.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                  });
            }

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                await setBtndis(false)

                
            }
        }
     }
   
  }
    return ( 
        <div class="cemp">
            <Header />
            <div class="mobsid">
            <Sidebar />
            </div>
            <div class="page__content page__content_pt64">
            <div class="page__stat">
            <div >
        <div class="centered-form">

        <div >
        	<div class="panel panel-default">
        		<div class="panel-heading">
			    		<h2 style={{textAlign:'center',marginBottom:'30px'}}>Create Employe</h2>
			 			</div>
			 			<div class="panel-body">
			    		
			    			<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			                            <input type="text" name="first_name" onChange={(e) => setFirstname(e.target.value)}   class="form-control input-sm" placeholder="First Name" />
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="text" name="last_name" onChange={(e) => setLastname(e.target.value)}  class="form-control input-sm" placeholder="Last Name" />
			    					</div>
			    				</div>
			    			</div>
                            <div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			                            <input type="text" name="emp_id" onChange={(e) => setEmpId(e.target.value)}  class="form-control input-sm" placeholder="Employee ID" />
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="number" name="last_name"  onChange={(e) => setPhone(e.target.value)}  class="form-control input-sm" placeholder="Phone" />
			    					</div>
			    				</div>
			    			</div>
                            <div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			                            <input type="text" name="first_name" onChange={(e) => setEmail(e.target.value)} id="first_name" class="form-control input-sm" placeholder="Email" />
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="text" name="last_name" id="last_name" onChange={(e) => setPassword(e.target.value)} class="form-control input-sm" placeholder="Password" />
			    					</div>
			    				</div>
			    			</div>

			    			{/* <div class="form-group">
                            <input type="file" className="form-control" onChange={uploadSingleFile} />
			    				
			    			</div>
                           
                            <div className="checkList">
        <div className="title">Team:</div>
        <div className="list-container">
          {teams.map((item, index) => (
            <div style={{display:'flex'}} key={index}>
              <input value={item} style={{width:'20px'}}  type="checkbox" onChange={handleCheck}  />
             
              <span style={{fontSize:'20px'}} className={checked.includes(item) ? "checked-item" : "not-checked-item"}>{item}</span>
            </div>
          ))}
        </div>
                            </div> */}
			    			
			    			{!btndis ? 
			    			<button onClick={() => submit()}  class="btn btn-info btn-block" >Create</button> :
			    			<button  class="btn btn-info btn-block" >Processing...</button>


                            }
			    		
			    		
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
    </div>
    </div>
        </div>
     );
}
 
export default CreateEmploye;