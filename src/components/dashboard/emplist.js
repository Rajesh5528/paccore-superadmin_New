import React, { Component,useEffect,useState,useRef } from 'react';
import Sidebar from './sidebar';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import get_employees from '../../redux/actions/employeesAction';
import Header from './header';
import get_projects from '../../redux/actions/projectsAction';
import Pagination from './common/pagination';
import { paginate } from './common/paginate';

const EmpList = (props) => {
    const [data,setData] = useState([]);
    const [ddata,setDData] = useState([]);
    const [loader,setLoader] = useState(true);
    const [options, setOptions] = useState([]);
    const [ooptions, setoOptions] = useState([]);
    const [selectedValue,setselectedValue] = useState([]);
    const [pageSize,setPageSize] = useState(5);
    const [currentPage,setcurrentPage]= useState(1)
    const multiselectRef = useRef();
    let navigate = useNavigate();
    useEffect(() => {
        get_employees();  
   
        get_projects();
        
        
     },[])
     useEffect(() => {
       
    //    setdatw();
    
        setfet()
    
        setproj()
        
     },[props.emps.data,props.projs.data])
     const setfet = async() => {
        console.log(props.emps,'aftcalling');
        if(props.emps.data?.length > 0){
            console.log(props.emps.data,'data');
            
            await setData(props.emps.data)
            await setDData(props.emps.data)
            await setLoader(false)
        }
     }
     const setproj = async() => {
        console.log(props.projs,'projs');
        if(props.projs.data?.length > 0){
          console.log(props.projs.data,'data');
          await setOptions(props.projs.data)
          await setoOptions(props.projs.data)
          await setLoader(false)
      }
     }
     const selectprojs = async(item) => {
        console.log(item,'item');
        let itemid = '';
        let emps = [];
    
        const det = ddata && ddata.length > 0 && ddata.map(l => {
            l.projects?.length > 0 && l.projects.map(k => {
              if(k._id === item[0]._id){
                emps.push(l)
              }
            })
         
        })
        
        await setData(emps)
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
       const sendcrtemp = () => {
        navigate("/createemploye");
       }
       const handlePageChange = (page) => {
          setcurrentPage(page)
       }
       console.log(currentPage,'currentPage');
       const pdata = paginate(data, currentPage, pageSize);
      console.log(pdata,'pdata');
    return ( 
        
        <div class="emplist">
          <Header />
          <div class="mobsid">
            <Sidebar />
            </div>
            <div class="page__content page__content_pt64">
            <div class="page__stat">
            <div class="products__more" style={{float:'right'}}><button onClick={() => sendcrtemp()} class="products__btn btn btn_purple">Create Employee</button></div>
           
            <div class="page__title h6">Employee List</div>
             
           
              
              <div class="sorting">
                <div class="sorting__row">
                  <div class="sorting__col">
                    <div class="sorting__dropdowns">
                      <div class="dropdown js-dropdown">
                      <Multiselect
                                    placeholder='All Projects'
                                    options={options}
                                    class="dropdown__head js-dropdown-head"
                                    selectedValues={selectedValue}
                                    singleSelect={true}
                                    defaltValue={selectedValue}
                                    displayValue="name"
                                    ref={multiselectRef}
                                    onSelect={(value) => selectprojs(value)}
                                />
                        
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
                    
                  <div class="products__cell">Employee Name</div>
                    <div class="products__cell">Employee Email</div>
                    <div class="products__cell">Employee Phone</div>
                    <div class="products__cell">Total Leaves</div>
                    <div class="products__cell">Leaves Taken</div>
                    <div class="products__cell">Sick Leaves</div>
                    <div class="products__cell">Casual Leaves</div>
                    <div class="products__cell"></div>
                  </div>
                 {!loader ? pdata && pdata.length > 0 ? 
                      pdata.map((k,index) => {
                          return(
                           
                               <div style={{cursor:'pointer'}} onClick={() => sendsheet(k)} class="products__row">
                    
                    <div class="products__cell">
                        
                        <div class="products__details">
                          <div class="products__title title">{k.empName.length > 16 ? k.empName.slice(0,16)+'...' : k.empName}</div>
                          <div class="products__info caption color-gray">{k.empId}</div>
                        </div>
                    </div>
                    <div class="products__cell">
                      <div class="products__payment">{k.email.length > 16 ? k.email.slice(0,16)+'...' : k.email}</div>
                    </div>
                    
                    <div class="products__cell">
                      <div class="products__cost">
                        <div class="products__money"> +{k.phone}</div>
                        
                      </div>
                    </div>
                    <div class="products__cell">
                      <div class="products__rating">12</div>
                    </div>
                    <div class="products__cell">
                      <div class="products__rating">5</div>
                    </div>
                    <div class="products__cell">
                      <div  class="products__rating">2</div>
                    </div>
                    <div class="products__cell">
                      <div  class="products__rating">3</div>
                    </div>
                    <div class="products__cell">
                    <div  class="products__status caption bg-green">View</div>
                    </div>
                  
                  <div class="products__body">
                  
                    <div class="products__line">
                      <div class="products__col">
                        {/* <div class="products__money">240</div> */}
                        <div style={{cursor:'pointer'}} onClick={() => sendsheet(k)} class="products__status caption bg-green">View</div>
                      </div>
                      {/* <div class="products__col">37 in stock</div>
                      <div class="products__col color-green">5.0</div> */}
                    </div>
                  </div>
                  </div>     
                          )
                      }) : <p>No Data Found</p>:<p>Loading</p>
                  }
                 
                 
                 
                  
                  
                </div>
                <div style={{marginTop:'20px',marginLeft:'40%'}}>
                 <Pagination 
            itemsCount={data.length} 
            pageSize={pageSize}
            currentPage={currentPage} 
            onPageChange={(page) => handlePageChange(page)} 
          />
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

export default connect(mapStateToProps)(EmpList);
