import React, { Component, useState } from 'react';
import AssignLeave from './assignleave';
import Header from './header';
import LeaveCalender from './leavecalender';
import LeaveList from './leavelist';
import Sidebar from './sidebar';

const LeaveManagement = () => {
    const [tabs,setTabs] = useState(['Leave List','Assign Leave','Leave Calender']);
    const [tab,setTab] = useState('Leave List')
    const tabpress = async(tab) => {
        await setTab(tab)
    }
    return ( 
        <div class="leave">
            <Header />
            <div class="mobsid">
            <Sidebar />
            </div>
            <div class="tabs_container">
            {tabs.map(l => {
                return(
                    <div style={{backgroundColor:tab === l ? '#6C5DD3' : 'white',color:tab === l ? 'white' : '#6C5DD3',cursor:'pointer'}} onClick={() => tabpress(l)} class="tab"><p class="tab_text">{l}</p></div>
                )
            })}
           </div>
            <div class="page__content page__content_pt64">
            <div class="page__stat">
                {tab === 'Leave List' ? 
                    <LeaveList /> :null
                }
                {tab === 'Assign Leave' ? 
                    <AssignLeave /> :null
                }
                {tab === 'Leave Calender' ? 
                   <LeaveCalender /> :null
                }
            </div>
            </div>
        </div>
     );
}
 
export default LeaveManagement;