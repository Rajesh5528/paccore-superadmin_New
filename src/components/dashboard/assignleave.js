import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'16px',
      width:'40%'
    },
  };
const AssignLeave = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
      }
    return ( 
        <div class="leave">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div onClick={() => setIsOpen(true)} style={{border:'1px solid rgb(206 206 217)',borderRadius:'10px',padding:'18px',cursor:'pointer'}}>
                        <div style={{textAlign:'center'}}>
                            <h6 style={{fontFamily:500,fontFamily: 'Poppins, sans-serif'}}>Rajesh Viswanadhapalli </h6>
                            <span style={{fontSize:'12px'}}>click to approve or Decline</span>
                        </div>
                        <div style={{marginTop:'22px',display:'flex'}}>
                            <div>
                        <div >
                            <p style={{fontSize:'14px',fontFamily:500,color:'grey', fontFamily: 'Poppins, sans-serif'}}>Half Day Leave Application</p>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>WED, 16 Nov</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        <div style={{marginTop:'4px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>Casual</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        </div>
                        <div style={{float:'right',marginLeft:'36%'}}>
                        <div>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Leaves Taken : 5</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Sick: 2 Casual: 3</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',backgroundColor:'#fff2c0',fontFamily:500,textAlign:'center',borderRadius:'10px', fontFamily: 'Poppins, sans-serif',color:'rgb(169 133 46)'}}>Awaiting</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div style={{border:'1px solid rgb(206 206 217)',borderRadius:'10px',padding:'18px'}}>
                        <div style={{textAlign:'center'}}>
                            <h6 style={{fontFamily:500,fontFamily: 'Poppins, sans-serif'}}>JithendraNath Chavva</h6>
                            <span style={{fontSize:'12px'}}>click to approve or Decline</span>
                        </div>
                        <div style={{marginTop:'22px',display:'flex'}}>
                            <div>
                        <div >
                            <p style={{fontSize:'14px',fontFamily:500,color:'grey', fontFamily: 'Poppins, sans-serif'}}>Half Day Leave Application</p>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>WED, 16 Nov</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        <div style={{marginTop:'4px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>Sick</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        </div>
                        <div style={{float:'right',marginLeft:'36%'}}>
                        <div>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Leaves Taken : 5</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Sick: 2 Casual: 3</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',backgroundColor:'#fff2c0',fontFamily:500,textAlign:'center',borderRadius:'10px', fontFamily: 'Poppins, sans-serif',color:'rgb(169 133 46)'}}>Awaiting</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'20px'}} class="row">
                <div class="col-sm-6 col-md-6">
                    <div style={{border:'1px solid rgb(206 206 217)',borderRadius:'10px',padding:'18px'}}>
                        <div style={{textAlign:'center'}}>
                            <h6 style={{fontFamily:500,fontFamily: 'Poppins, sans-serif'}}>Lokesh Pramod Gadamsetti</h6>
                            <span style={{fontSize:'12px'}}>click to approve or Decline</span>
                        </div>
                        <div style={{marginTop:'22px',display:'flex'}}>
                            <div>
                        <div >
                            <p style={{fontSize:'14px',fontFamily:500,color:'grey', fontFamily: 'Poppins, sans-serif'}}>Full Day Leave Application</p>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>WED, 16 Nov</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        <div style={{marginTop:'4px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>Casual</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        </div>
                        <div style={{float:'right',marginLeft:'36%'}}>
                        <div>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Leaves Taken : 5</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Sick: 2 Casual: 3</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',backgroundColor:'#fff2c0',fontFamily:500,textAlign:'center',borderRadius:'10px', fontFamily: 'Poppins, sans-serif',color:'rgb(169 133 46)'}}>Awaiting</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div style={{border:'1px solid rgb(206 206 217)',borderRadius:'10px',padding:'18px'}}>
                        <div style={{textAlign:'center'}}>
                            <h6 style={{fontFamily:500,fontFamily: 'Poppins, sans-serif'}}>Ganesh Garide</h6>
                            <span style={{fontSize:'12px'}}>click to approve or Decline</span>
                        </div>
                        <div style={{marginTop:'22px',display:'flex'}}>
                            <div>
                        <div >
                            <p style={{fontSize:'14px',fontFamily:500,color:'grey', fontFamily: 'Poppins, sans-serif'}}>Half Day Leave Application</p>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>WED, 16 Nov</p>
                           
                        </div>
                        <div style={{marginTop:'4px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>Sick</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        </div>
                        <div style={{float:'right',marginLeft:'36%'}}>
                        <div>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Leaves Taken : 5</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Sick: 2 Casual: 3</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',backgroundColor:'#fff2c0',fontFamily:500,textAlign:'center',borderRadius:'10px', fontFamily: 'Poppins, sans-serif',color:'rgb(169 133 46)'}}>Awaiting</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'rgba(0,0,0,0.75)'}}>
            <Modal
            
        isOpen={modalIsOpen}
        
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
       <h6 style={{fontFamily:500,fontFamily: 'Poppins, sans-serif',textAlign:'center'}}>Rajesh Viswanadhapalli </h6>
       <div onClick={() => setIsOpen(false)} style={{float:'right',position:'absolute',right:20,top:20,cursor:'pointer'}}>
        <span><i style={{fontSize:'22px',color:'red'}} class="fa fa-times"></i></span>
       </div>
       </div> 
       <div style={{marginTop:'22px',display:'flex'}}>
                            <div>
                        <div >
                            <p style={{fontSize:'14px',fontFamily:500,color:'grey', fontFamily: 'Poppins, sans-serif'}}>Half Day Leave Application</p>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>WED, 16 Nov</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        <div style={{marginTop:'4px'}}>
                        <p style={{fontSize:'14px',fontFamily:600, fontFamily: 'Poppins, sans-serif'}}>Casual</p>
                            {/* <h5>Wed, 16 Dec</h5> */}
                        </div>
                        </div>
                        <div style={{float:'right',marginLeft:'36%'}}>
                        <div>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Leaves Taken : 5</p>
                            </div>
                            <div style={{marginTop:'8px'}}>
                            <p style={{fontSize:'14px',fontFamily:500, fontFamily: 'Poppins, sans-serif'}}>Sick: 2 Casual: 3</p>
                            </div>
                            <div style={{marginTop:'8px',display:'flex'}}>
                                <div style={{backgroundColor:'#8dcca8',padding:'4px',borderRadius:'10px',width:'100%'}}>
                                <p style={{fontSize:'14px',fontFamily:500,textAlign:'center',borderRadius:'10px', fontFamily: 'Poppins, sans-serif',color:'rgb(3 65 30)'}}>Approve</p>
                                </div>
                                <div style={{backgroundColor:'#d9a6a3',padding:'4px',borderRadius:'10px',width:'100%',marginLeft:'10px'}}>
                                <p style={{fontSize:'14px',fontFamily:500,textAlign:'center',borderRadius:'10px', fontFamily: 'Poppins, sans-serif',color:'#6a100b'}}>Decline</p>
                                </div>
                            </div>
                        </div>
                        </div>
      </Modal>
      </div>
        </div>
     );
}
 
export default AssignLeave;
// background-color: #8dcca8;
// padding: 4px;
// border-radius: 10px;
// width: 100%;