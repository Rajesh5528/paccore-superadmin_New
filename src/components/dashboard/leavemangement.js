import React, { Component, useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';

const LeaveManagement = () => {
    const [tabs,setTabs] = useState(['Leave List','Assign Leave','Leave Calender'])
    return ( 
        <div class="leave">
            <Header />
            <div class="mobsid">
            <Sidebar />
            </div>
            <div class="tabs_container">
            {tabs.map(l => {
                return(
                    <div class="tab"><p class="tab_text">{l}</p></div>
                )
            })}
           </div>
            <div class="page__content page__content_pt64">
            <div class="page__stat"></div>
            </div>
        </div>
     );
}
 
export default LeaveManagement;