import React, { Component,useState,useEffect,useRef } from 'react';
import { connect } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import Header from '../header';
import Sidebar from '../sidebar';
import { toast } from 'react-toastify';
import get_employees from '../../../redux/actions/employeesAction';
import authService from '../../../services/authService';


const CreateProject = (props) => {
    const [image,setImage] = useState(null);
    const [projectname,setProjectname] = useState('');
    const [clientname,setClientname] = useState('');
    const [empid,setEmpId] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [teams,setTeams] = useState(['Lerata','Non-Lerata'])
    const [checked, setChecked] = useState([]);
    const [options, setOptions] = useState([]);
    const [btndis,setBtndis] = useState(false);
    const [selectedValue,setselectedValue] = useState([]);
    const [selectedId,setselectedId] = useState([]);
    const [description, setDescription] = useState('');
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState('');
    const [notes,setNotes] = useState('');
    const multiselectRef = useRef();
    useEffect(() => {
        get_employees();  
   
    
        
        
     },[])
     useEffect(() => {
       
        //    setdatw();
        
            setfet()
        
            
            
         },[props.emps.data])
         const setfet = async() => {
            console.log(props.emps,'aftcalling');
            if(props.emps.data?.length > 0){
               let optionss = [];
               props.emps.data.map((k) => {
                    const obj = {
                        name:k.empName,
                        empid:k.empId,
                        id:k._id
                    }
                    optionss.push(obj)
               })
               setOptions(optionss)
            }
         }
         const changeFromDate = async(e) => {
            await setStartDate(e.target.value)
        }
        const changeToDate = async(e) => {
         await setEndDate(e.target.value)
        }
        const selectemps = (value) => {
            let ids = [];
            value.map(l => {
                ids.push(l.id)
            })
            setselectedId(ids)
            
        }
    const submit = async() => {
        setBtndis(true)
        if(!projectname) {
            await setBtndis(false)
        toast.error('Enter Project Name', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(!clientname){
            await setBtndis(false)
        toast.error('Enter Client Name', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(selectedId?.length < 1){
            await setBtndis(false)
        toast.error('Select Working Employes', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(!description){
            await setBtndis(false)
        toast.error('Enter Project Description', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(!startDate){
            await setBtndis(false)
        toast.error('Select Project Start Date', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(!endDate){
            await setBtndis(false)
        toast.error('Select Project End Date', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(!notes){
            await setBtndis(false)
        toast.error('Enter Notes', {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else {
            try {
                
           const clobj = {
                name:clientname
           }
          
           const obj = {
            name:projectname,
            client:clobj,
            workingEmployee:selectedId,
            description:description,
            startDate:startDate,
            endDate:endDate,
            attachments:[],
            note:notes
           }
           console.log(obj,'obj');
           const deta = await authService.createproj(obj)
           console.log(deta,'deta');
           if(deta.status){
            await setBtndis(false)
            setNotes('')
            setProjectname('');
            setClientname('');
            setDescription('');
            setEndDate('');
            setStartDate('');
            setselectedValue([]);
            setselectedId([]);
            resetValues();
            toast.success(deta.message, {
                position: toast.POSITION.BOTTOM_LEFT
              });
           }else {
            setBtndis(false)
            toast.error(deta.message, {
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
    const resetValues = () => {
        // By calling the belowe method will reset the selected values programatically
       multiselectRef.current.resetSelectedValues();
      }
      const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    return ( 
        <div class="pjm">
             <Header />
            <div class="mobsid">
            <Sidebar />
            </div>
        
        <div class="page__content page__content_pt64">
        <div class="page__stat">
        <div >
    <div class="centered-form">

    <div >
        <div class="pb-40 panel-default">
            <div class="panel-heading">
                    <h2 style={{textAlign:'center',marginBottom:'30px'}}>Create Project</h2>
                     </div>
                     <div class="panel-body">
                    
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                    <input type="text" value={projectname} name="project_name" onChange={(e) => setProjectname(e.target.value)}   class="form-control input-sm" placeholder="Project Name" />
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                    <input type="text" value={clientname} name="client_name" onChange={(e) => setClientname(e.target.value)}  class="form-control input-sm" placeholder="Client Name" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                <Multiselect
                                    placeholder='Select Working Employees'
                                    options={options}
                                    selectedValues={selectedValue}
                                    defaltValue={selectedValue}
                                    displayValue="name"
                                    ref={multiselectRef}
                                    onSelect={(value) => selectemps(value)}
                                />
                                    {/* <select class="form-control input-sm">
                                        <option>Rajesh</option>
                                        <option>Lokesh</option>
                                    </select> */}
                                    {/* <input type="text" name="emp_id" onChange={(e) => setEmpId(e.target.value)}  class="form-control input-sm" placeholder="Employee ID" /> */}
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                    <input type="text" name="description" value={description}  onChange={(e) => setDescription(e.target.value)}  class="form-control input-sm" placeholder="Project Description" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                <input
                    className="form-control input-sm"
                    type="date"
                    value={startDate}
                    min={disablePastDate()}
                    onChange={(e) => changeFromDate(e)}
                  />
                                    {/* <input type="text" name="first_name" onChange={(e) => setEmail(e.target.value)} id="first_name" class="form-control input-sm" placeholder="Email" /> */}
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                <input
                    className="form-control input-sm"
                    type="date"
                    min={disablePastDate()}
                    value={endDate}
                    onChange={(e) => changeToDate(e)}
                  />
                                    {/* <input type="text" name="last_name" id="last_name" onChange={(e) => setPassword(e.target.value)} class="form-control input-sm" placeholder="Password" /> */}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" name="Notes" value={notes}  onChange={(e) => setNotes(e.target.value)}  class="form-control input-sm" placeholder="Notes..." />
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
 
const mapStateToProps = state => {
	return {
		emps:state.employees,
	};
};

export default connect(mapStateToProps)(CreateProject);
