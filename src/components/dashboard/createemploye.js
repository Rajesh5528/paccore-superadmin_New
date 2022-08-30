import React, { Component, useState,useRef,useEffect } from 'react';
import { connect } from "react-redux";
import moment from 'moment'
import Header from './header';
import Sidebar from './sidebar';
import { toast } from 'react-toastify';
import authService from '../../services/authService';
import get_employees from '../../redux/actions/employeesAction';
import { useNavigate } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import get_projects from '../../redux/actions/projectsAction';

const CreateEmploye = (props) => {
    const [image,setImage] = useState(null);
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [empid,setEmpId] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [teams,setTeams] = useState([{id:1,name:'Lerata'},{id:2,name:'Non-Lerata'}]);
    const [projects,setProjects] = useState([]);
    const [employes,setEmployes] = useState([]);
    const [employevalue,setEmployevalue] = useState([]);
    const [teamvalue, setTeamValue] = useState([]);
    const [teamvaluenameback,setTeamValuenameBack] = useState('')
    const [projectvalue, setProjectValue] = useState([]);
    const [timezones,setTimeZones] = useState([{id:1,name:'PSD'},{id:2,name:'ISD'}])
    const [timezonevalue,setTimeZonevalue] = useState([]);
    const [timezoneback,setTimeZoneback] = useState('')
    const [role,setRole]= useState('');
    const [doj,setDoj]= useState('');
    const [dob,setDob] = useState('');
    const [teamvaluename, setTeamValuename] = useState([]);
    const [checked, setChecked] = useState([]);
    const [btndis,setBtndis] = useState(false);
    const [loader,setLoader] = useState(true);
    const teamsRef = useRef();
    const projectsRef = useRef();
    const employeRef = useRef();
    const timezoneRef = useRef();
    let navigate = useNavigate();
    useEffect(() => {
      get_employees();  
 
      get_projects();
      
      
   },[])
   useEffect(() => {
  
      setfet()
  
      setproj()
      
   },[props.emps.data,props.projs.data])
   const setfet = async() => {
    console.log(props,'props.emps.data');
    if(props.emps.data?.length > 0){
       
        await setEmployes(props.emps.data)
        await setLoader(false)
    }
 }
 const setproj = async() => {
   
    if(props.projs.data?.length > 0){
      console.log(props.projs.data,'data');
      await setProjects(props.projs.data);
      
      await setLoader(false)
  }
 }
   
   
      const selectteam = async(value) => {
        let values = []
        value.map(k => {
            values.push(k.name)
        })
        await setTeamValuename(values)
        await setTeamValuenameBack(value[0].name)
      }
      const selectproject = async(value) => {
          await setProjectValue(value)
      }
      const selectemploye = async(value) => {
        await setEmployevalue(value)
    }
    const selecttimezone = async(value) => {
      console.log(value[0].name,'time');
      await setTimeZoneback(value[0].name)
      await setTimeZonevalue(value)
  }
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
     }else if(teamvaluename?.length  === 0){
      await setBtndis(false)
       toast.error('Must Selct One Team Atleast', {
           position: toast.POSITION.BOTTOM_LEFT
         });
   }else if(projectvalue?.length  === 0){
    await setBtndis(false)
     toast.error('Must Selct One Project Atleast', {
         position: toast.POSITION.BOTTOM_LEFT
       });
 }else if(employevalue?.length  === 0){
  await setBtndis(false)
   toast.error('Must Selct One Reporting Employe', {
       position: toast.POSITION.BOTTOM_LEFT
     });
}else if(!role){
  await setBtndis(false)
   toast.error('Enter Role of the Creating Employe', {
       position: toast.POSITION.BOTTOM_LEFT
     });
}else if(!doj){
  await setBtndis(false)
   toast.error('Select Date of Joining', {
       position: toast.POSITION.BOTTOM_LEFT
     });
}else if(!dob){
  await setBtndis(false)
   toast.error('Select Date of Birth', {
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
                "password":password,
                team:teamvaluename,
                dob:dob,
                doj:doj,
role:role,
reportingTo:employevalue,
projects:projectvalue,
timeZone:timezoneback
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

                
            }else if(ex.response.status >= 400 && ex.response.status <500){
                await setBtndis(false);
                toast.error('No Network,Please Connect to Internet', {
                  position: toast.POSITION.BOTTOM_LEFT
                });
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
            {!loader ? 
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
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                  <Multiselect
                                  placeholder='Select Teams'
                                  class="form-control input-sm"
                                  options={teams}
                                  selectedValues={teamvalue}
                                  defaltValue={teamvalue}
                                  displayValue="name"
                                  ref={teamsRef}
                                  onSelect={(value) => selectteam(value)}
                              />
                              
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                  <Multiselect
                                  placeholder='Select Projects'
                                  class="form-control input-sm"
                                  options={projects}
                                  selectedValues={projectvalue}
                                  defaltValue={projectvalue}
                                  displayValue="name"
                                  ref={projectsRef}
                                  onSelect={(value) => selectproject(value)}
                              />
                   
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                  <Multiselect
                                  placeholder='Select Reporting To'
                                  class="form-control input-sm"
                                  options={employes}
                                  selectedValues={employevalue}
                                  defaltValue={employevalue}
                                  displayValue="empName"
                                  ref={employeRef}
                                  onSelect={(value) => selectemploye(value)}
                              />
                              
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <div class="form-group">
                  <input type="text" name="Role" id="Role" onChange={(e) => setRole(e.target.value)} class="form-control input-sm" placeholder="Role" />
                  
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-4">
                <label style={{fontWeight:700}}>Date of Joining</label>
                  <div class="form-group">
                  <input max={moment().format("YYYY-MM-DD")} type="date" name="Role" id="Role" onChange={(e) => setDoj(e.target.value)} class="form-control input-sm" placeholder="Date of Joining" />
                              
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4">
                  <label style={{fontWeight:700}}>Date of Birth</label>
                  <div class="form-group">
                  <input type="date" name="Role" id="Role" onChange={(e) => setDob(e.target.value)} class="form-control input-sm" placeholder="Role" />
                  
                  </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4">
                  <label style={{fontWeight:700}}>Select Time Zone</label>
                  <div class="form-group">
                  <Multiselect
                                  placeholder='Select Time Zone'
                                  class="form-control input-sm"
                                  options={timezones}
                                  singleSelect={true}
                                  selectedValues={timezonevalue}
                                  defaltValue={timezonevalue}
                                  displayValue="name"
                                  ref={timezoneRef}
                                  onSelect={(value) => selecttimezone(value)}
                              />
                  
                  </div>
                </div>
              </div>
              
              {!btndis ? 
              <button onClick={() => submit()}  class="btn btn-info btn-block" >Create</button> :
              <button  class="btn btn-info btn-block" >Processing...</button>


                          }
            
            
          </div> : null
            }
			 			
	    		</div>
    		</div>
    	</div>
    </div>
    </div>
    </div>
        </div>
     );
}
 
const mapStateToProps = state => {
	return {
		emps:state.employees,
    projs:state.projects
	};
};

export default connect(mapStateToProps)(CreateEmploye);
