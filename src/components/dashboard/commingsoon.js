import React, { Component } from 'react';
import Sidebar from './sidebar';


const CommingSoon = () => {
    return ( 
        <div class="cmg">
            <Sidebar />
        <div class="imcontain" >
          <img class="imgst"  src={process.env.PUBLIC_URL + '/assets/images/cmgsoo2.png'} />  
          <h1 class="imtxt">Coming Soon</h1>
        </div>
        </div>
     );
}
 
export default CommingSoon;