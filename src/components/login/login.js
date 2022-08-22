import React, { Component,useState,useRef,useEffect } from 'react';
import { toast } from 'react-toastify';
import authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import get_employees from '../../redux/actions/employeesAction';
import Lottie from 'react-lottie';
import penguin from '../dashboard/penguin.json'
const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: penguin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYEnd slice',
      progressiveLoad: false,
    }
  };
  
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [btndis,setBtndis] = useState(false);
 
    let navigate = useNavigate();
    const handleChange = async(e) => {
        await setEmail(e.target.value)
        
    }
    const handleChangepass = async(e) => {
        await setPassword(e.target.value)
        
    }
    const handleSubmit = async() => {
        await setBtndis(true)
        console.log(password.length,'password');
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           await setBtndis(false)
            toast.error('Invalid Email Format', {
                position: toast.POSITION.BOTTOM_LEFT
              });
        }else if(password?.length < 4){
            await setBtndis(false)
            toast.error('Password Must have Minimum 4 Characters', {
                position: toast.POSITION.BOTTOM_LEFT
              });
        }else {
            try {
                const obj = {
                    email:email,
                    password:password
                }
               
                const deta = await authService.login(obj);
               
                if(deta.data.status === true){
                    setBtndis(false)
                    get_employees();
                    navigate("/emplist", { replace: true });
                    toast.success('Login SuccessFull', {
                        position: toast.POSITION.BOTTOM_LEFT
                      });
                }else {
                    setBtndis(false)
                    toast.error(deta.data.message, {
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
        <div >
            <div class="split left">
                
  <div  class="centered">
    <div class="left_container" >
      <div>
  <img src={process.env.PUBLIC_URL + '/assets/images/pactimelogo2.png'} />
  {/* <h1 style={{color:'white',fontSize:'60px',fontFamily:'Barlow,sans-serif',lineHeight:'0.4'}}>Pactime</h1> */}
  </div>
  {/* <h1 style={{color:'white',fontSize:'60px',fontFamily:'Barlow,sans-serif',lineHeight:'0.4'}}>Pactime</h1> */}
  <div class="login schedules">
              <div class="schedules__container">
                
                <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fa fa-user"></i></span>
						</div>
						<input type="email" name='email' onChange={(e) => handleChange(e)}  class="form-control" placeholder="Email" />
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fa fa-key"></i></span>
						</div>
						<input name="password" type="password" onChange={(e) => handleChangepass(e)} class="form-control" placeholder="password" />
					</div>
                    <div>
                    {!btndis ? 
                            <button onClick={() => handleSubmit()} class="quality__btn btn btn_purple btn_wide">Login</button> : 
                            <button  class="quality__btn btn btn_purple btn_wide">Processing...</button>
                        }
                    
                    </div>
              </div>
            </div>
  </div>

  </div>
</div>

<div class="split right">

  {/* <div class="centered">
    <div>
    <img src={process.env.PUBLIC_URL + '/assets/images/pactimelogo2.png'} />
  <h1 style={{color:'white',fontSize:'60px',fontFamily:'Barlow,sans-serif',lineHeight:'0.4'}}>Pactime</h1>

    </div>
   
    
   
  </div> */}
  <div class="lottie_cont">

    <Lottie options={defaultOptions}
              
              />
    </div>
</div>
            <div >

            </div>
            <div >
            {/* <div class="login schedules">
              <div class="schedules__container">
                <h3 style={{color:'#6C5DD3',textAlign:'center'}}>Sign In</h3>
                <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fa fa-user"></i></span>
						</div>
						<input type="email" name='email' onChange={(e) => handleChange(e)}  class="form-control" placeholder="Email" />
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fa fa-key"></i></span>
						</div>
						<input name="password" type="password" onChange={(e) => handleChangepass(e)} class="form-control" placeholder="password" />
					</div>
                    <div>
                    {!btndis ? 
                            <button onClick={() => handleSubmit()} class="quality__btn btn btn_purple btn_wide">Login</button> : 
                            <button  class="quality__btn btn btn_purple btn_wide">Processing...</button>
                        }
                    
                    </div>
              </div>
            </div> */}
            </div>
            
        </div>
     );
}
 
export default Login;