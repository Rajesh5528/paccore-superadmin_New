import React, { Component } from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

let wdt = false;
class LoginLottie extends Component {
    constructor(props) {
        super(props);
        
        this.myRef = React.createRef();
      }
    componentDidMount() {
       
        this.myRef.current.addEventListener('load', function (e) {
          
                  create({
          player: '#firstLottie',
          mode: 'chain',
          controls:false,
          actions: [
            {
              state: 'autoplay',
           
            transition: 'onComplete',
                
            count: 1,wdt:false
            },{
                path: 'https://assets10.lottiefiles.com/private_files/lf30_ll1hdda1.json',
              state: 'autoplay',
                wdt:true,
              loop:false,
              transition: 'onComplete',
             
            },{
                path: 'https://assets2.lottiefiles.com/private_files/lf30_ttgwkuhd.json',
              state: 'autoplay',
              reset: false,
              loop:false,
              transition: 'onComplete',
              count:1,
              wdt:false
            
            }
        ],
        });
        });
      }
    //   https://assets10.lottiefiles.com/private_files/lf30_ll1hdda1.json
    render() {
        console.log(wdt,'wdt'); 
        return (
            <div style={{textAlign:'center',marginTop:'10%'}} class="lottie">
                <lottie-player
          ref={this.myRef}
          id="firstLottie"
          loop={false}
          autoplay={false}
          mode="chain"
        //   style={{width:wdt === false ? '400px' : '200px',height:wdt === false ? '400px' : '200px',marginLeft:'10%'}}
          src="https://assets1.lottiefiles.com/packages/lf20_c9xh6c6x.json"
        ></lottie-player>
            </div>
        );
    }
}
 
export default LoginLottie;