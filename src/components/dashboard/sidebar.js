import React, { Component } from 'react';
import { Link,useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();
  console.log(location,'location');
    return ( 
      
        <div class="sidebar">
        
        <div class="sidebar__wrapper">
          <div class="sidebar__inner">
            <div class="sidebar__list">
              <div class="sidebar__group">
               
                <div class="sidebar__menu">
                  <Link to='/emplist' class={location.pathname === '/emplist' ? "sidebar__item active": 'sidebar__item'} >
                    {/* <div class="sidebar__icon">

                    </div> */}
                    <div class="sidebar__text">Employee Management</div>
                  </Link>
                  <Link to='/leavemanagent' class={location.pathname === '/leavemanagent' ? "sidebar__item active": 'sidebar__item'}  >
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Leave Management</div>
                  </Link><Link to='/prjmanagement' class={location.pathname === '/prjmanagement' ? "sidebar__item active": 'sidebar__item'}  >
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Project Management</div>
                  </Link><Link to='/asstmanagement' class={location.pathname === '/asstmanagement' ? "sidebar__item active": 'sidebar__item'} >
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Asset Management</div>
                  </Link><Link to='/complaints' class={location.pathname === '/complaints' ? "sidebar__item active": 'sidebar__item'} >
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Complaints</div>
                  </Link><Link to='/stickets' class={location.pathname === '/stickets' ? "sidebar__item active": 'sidebar__item'}>
                   
                    <div class="sidebar__text">Service Tickets</div>
                  </Link>
                  <Link to='/appraisals' class={location.pathname === '/appraisals' ? "sidebar__item active": 'sidebar__item'}>
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Appraisal's </div>
                  </Link>
                  <Link to='/salaries' class={location.pathname === '/salaries' ? "sidebar__item active": 'sidebar__item'}>
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Salaries </div>
                  </Link>
                  <Link to='/login' class='sidebar__item'>
                    {/* <div class="sidebar__icon"></div> */}
                    <div class="sidebar__text">Logout </div>
                  </Link>
                  </div>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
     );
}
 
export default Sidebar;