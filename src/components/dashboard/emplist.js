import React, { Component,useEffect,useState } from 'react';
import Sidebar from './sidebar';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import get_employees from '../../redux/actions/employeesAction';



const EmpList = (props) => {
    const [data,setData] = useState([]);
    const [ddata,setDData] = useState([]);
    const [loader,setLoader] = useState(true);
    let navigate = useNavigate();
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
            console.log(props.emps.data,'data');
            await setData(props.emps.data)
            await setDData(props.emps.data)
            await setLoader(false)
        }
     }
     const sendsheet = (item) => {
        navigate("/asheet", {state:{data:item} });
       }
       const handleSearch = (e) => {
        if(e.target.value){
            const filtered = data.filter(i =>
                i.empName
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) || i.empId
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()),
              );
              setData(filtered)
        }else{
            setData(ddata)
        }
       
          
       }
       
    return ( 
        
        <div class="emplist">
            <Sidebar />
            <div class="page__content page__content_pt64">
            <div class="page__stat">
            <div class="products__more" style={{float:'right'}}><button class="products__btn btn btn_purple">Create Employee</button></div>
           
            <div class="page__title h6">Employee's List</div>
             
           
              
              <div class="sorting">
                <div class="sorting__row">
                  <div class="sorting__col">
                    <div class="sorting__dropdowns">
                      <div class="dropdown js-dropdown">
                        <div class="dropdown__head js-dropdown-head">All Projects</div>
                        <div class="dropdown__body js-dropdown-body"><a class="dropdown__item" href="#">
                            <div class="dropdown__title title">Bento 3D Kit </div>
                            <div class="dropdown__info caption">Illustration</div>
                          </a><a class="dropdown__item" href="#">
                            <div class="dropdown__title title">Bento 3D Kit </div>
                            <div class="dropdown__info caption">Illustration</div>
                          </a><a class="dropdown__item" href="#">
                            <div class="dropdown__title title">Collab UI Kit </div>
                            <div class="dropdown__info caption">Coded Template</div>
                          </a></div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="sorting__col">
                    <div class="sorting__line">
                      <div class="sorting__search"><button class="sorting__open"></button><input class="sorting__input" onChange={(e) => handleSearch(e)} type="text" placeholder="Search" /></div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="products products_history">
                <div class="products__table">
                  <div class="products__row products__row_head">
                    <div class="products__cell">S.No</div>
                    <div class="products__cell">Employee Name</div>
                    <div class="products__cell">Employee Email</div>
                    <div class="products__cell">Employee Phone</div>
                    <div class="products__cell">Leave Balance</div>
                    <div class="products__cell">Over Time</div>
                    <div class="products__cell">Total Work Hours</div>
                    <div class="products__cell"></div>
                  </div>
                   
       {!loader ? data && data.length > 0 ?
        data.map((k,index) => {
            return(
                <div class="products__row">
                        <div class="products__cell">1</div>
                        <div class="products__cell">
                            
                                
                                <div class="products__details">
                                <div class="products__title title">{k.empName.length > 16 ? k.empName.slice(0,16)+'...' : k.empName}</div>
                                <div class="products__info caption color-gray">{k.empId}</div>
                                </div>
                            
                        </div>
                        <div class="products__cell">{k.email}</div>
                        <div class="products__cell">
                        +{k.phone}
                            {/* <div class="products__status caption bg-green">Paid</div> */}
                        </div>
                        <div style={{textAlign:'center',color:'green'}} class="products__cell color-gray">10</div>
                        <div style={{textAlign:'center'}} class="products__cell color-gray">15</div>
                        <div style={{textAlign:'center'}} class="products__cell color-gray">240</div>
                        <div class="products__cell">
                       
                            <div style={{cursor:'pointer'}} onClick={() => sendsheet(k)} class="products__status caption bg-green">View</div>
                        </div>
                    </div>
            )}) : null : <p>Loading...</p>}
                  
                    
                    
                  
                 
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
     );
}
 
const mapStateToProps = state => {
	return {
		emps:state.employees
	};
};

export default connect(mapStateToProps)(EmpList);
