import React, { Component,useEffect,useState } from 'react';
import Sidebar from './sidebar';

import {useLocation} from 'react-router-dom';
// import BarChart from './barchart.js'
import moment from 'moment';
import authService from '../../services/authService.js';
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayBarChart from './daybarchart';
import Header from './header';

const Asheet = () => {
  const [defData,setDefData] = useState({});
    const [otTime,setOttime] = useState('00:00:00');
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [tab, setTab] = useState('weekly');
    const [barData,setBarData] = useState([]);
    let navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        getLogByDay();
        
        getanalytdata('weekly')
        
     },[])
     const getLogByDay = async() => {
        const date = moment().format('DD-MM-YYYY')
       
        try {
            const obj = {
            "date":date,
            "empId":location.state.data.empId
            }
            const data = await authService.getlogbyday(obj);
            if(data.status === true) {
                setDefData(data.data)
                if(data.data.duration > '09:00:00') {
                    let d = moment.duration(moment(data.data.duration, "HH:mm:ss" ).diff(moment('09:00:00', "HH:mm:ss")));
        
        setOttime(`${d._data.hours}:${d._data.minutes}:${d._data.seconds}`)
           
                }
            }else{
                toast.error('No Data Found', {
                    position: toast.POSITION.BOTTOM_LEFT
                  });
            }
            
        } catch (ex) {
            
        }
     }
      const calovttime = () => {
        
      }
const handleChange = async(e) => {
    await setSelectedDate(e)
    const date = moment(e).format('DD-MM-YYYY')
    console.log(date,'date');
    try {
        const obj = {
        "date":date,
        "empId":location.state.data.empId
        }
        console.log(obj,'obj');
        const data = await authService.getlogbyday(obj);
        console.log(data,'data.data.staus');
        if(data.status === true){
            setDefData(data.data);
            if(data.data.duration > '09:00:00') {
                let d = moment.duration(moment(data.data.duration, "HH:mm:ss" ).diff(moment('09:00:00', "HH:mm:ss")));
    
    setOttime(`${d._data.hours}:${d._data.minutes}:${d._data.seconds}`)
        
            }
        } else {
          setDefData({})
            toast.error('There is No data on That Date', {
                position: toast.POSITION.BOTTOM_LEFT
              });
        }
        

    } catch (ex) {
        
    }
}
const handleTab = async(ta) => {
    await setTab(ta)
   getanalytdata(ta)
}
const getanalytdata = async(t) => {

    try {
        const obj = {"analytic":t}
        console.log(obj,'obj');
        const deta = await authService.getanalytdata(obj)
        setBarData(deta.data)
        console.log(deta.data);
   } catch (ex) {
       
   }
}
const sendemppage = () => {
    navigate("/emplist", { replace: true });
}
    return ( 
        <div>
           <Header />
          <div class="mobsid">
            <Sidebar />
            </div>
            <div class="asheet">
            <div class="page__wrapper">
        <div class="page__center">
          <div class="page__row page__row_head page__row_border">
            <div class="page__col">
              <div class="page__hello h5">{location.state.data.empName},</div>
              <div class="page__welcome h2">{defData.duration}</div>
              <div class="page__col">
              <div class="details">
                <div class="details__container">
                  <div class="details__title h4">
                                                <Moment format="ddd" withTitle>
                                                    {defData.createDate}
                                                    </Moment> {' '}
                                                   
                                                        
                                                    
                                                <Moment format="DD" withTitle>
                                                    {defData.createDate}
                                                    </Moment> {' '} 
                                                    <Moment format="MMM" withTitle>
                                                    {defData.createDate}
                                                    </Moment>
                                                    💡</div>
                  {/* <div class="details__row">
                   
                    <div class="details__col">
                      <div class="details__box">
                        <div class="details__chart details__chart_counter">
                          <div id="chart-users-counter">
                          {defData && defData?.timeInterval?.length > 0 ? 
                           <DayBarChart data={defData} /> : null
                                
                            }
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div class="details__list details__list_three">
                    <div class="details__item">
                      <div class="details__head">
                        <div class="details__preview bg-purple"><img class="details__pic" src={process.env.PUBLIC_URL + '/assets/images/folder.svg'} alt="" /></div>
                        <div class="details__text caption-sm">Total Time</div>
                      </div>
                      <div class="details__counter h3">{defData.duration}</div>
                      <div class="details__indicator">
                        <div class="details__progress bg-purple" style={{width:'55%'}}></div>
                      </div>
                    </div>
                    
                    <div class="details__item">
                      <div class="details__head">
                        <div class="details__preview bg-blue"><img class="details__pic" src={process.env.PUBLIC_URL + '/assets/images/bag.svg'} alt="" /></div>
                        <div class="details__text caption-sm">Regular Time</div>
                      </div>
                      <div class="details__counter h3">09:00:00</div>
                      <div class="details__indicator">
                        <div class="details__progress bg-blue" style={{width:'55%'}}></div>
                      </div>
                    </div>
                    <div class="details__item">
                      <div class="details__head">
                        <div class="details__preview bg-pink"><img class="details__pic" src={process.env.PUBLIC_URL + '/assets/images/activity.svg'} alt="" /></div>
                        <div class="details__text caption-sm">Over Time</div>
                      </div>
                      <div class="details__counter h3">{otTime}</div>
                      <div class="details__indicator">
                        <div class="details__progress bg-pink" style={{width:'52%'}}></div>
                      </div>
                    </div>
                    {/* <div class="details__item">
                      <div class="details__head">
                        <div class="details__preview bg-red"><img class="details__pic" src={process.env.PUBLIC_URL + '/assets/images/activity.svg'} alt="" /></div>
                        <div class="details__text caption-sm">Items</div>
                      </div>
                      <div class="details__counter h3">68</div>
                      <div class="details__indicator">
                        <div class="details__progress bg-red" style={{width:'68%'}}></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
             
              {/* <div class="page__widgets">
                <div class="widget widget_users widget_shadow widget_p0">
                  <div class="widget__head">
                    <div class="widget__title">Users</div>
                  </div>
                  <div class="widget__body">
                    <div class="widget__flex">
                      <div class="widget__desc">
                        <div class="widget__category caption-sm">New Users</div>
                        <div class="widget__number h4">57m</div>
                        <div class="widget__percent">21.77%</div>
                      </div>
                      <div class="widget__chart widget__chart_users">
                        <div id="chart-users-blue"></div>
                      </div>
                    </div>
                    <div class="widget__flex">
                      <div class="widget__desc">
                        <div class="widget__category caption-sm">New Users</div>
                        <div class="widget__number h4">36m</div>
                        <div class="widget__percent">21.77%</div>
                      </div>
                      <div class="widget__chart widget__chart_users">
                        <div id="chart-users-purple"></div>
                      </div>
                    </div>
                  </div>
                  <div class="widget__foot"><a class="widget__link caption" href="#">Go to settings</a></div>
                </div>
                <div class="widget widget_chart widget_purple">
                  <div class="widget__title color-white">Income</div>
                  <div class="widget__wrap">
                    <div class="widget__chart widget__chart_earning">
                      <div id="chart-income"></div>
                    </div>
                    <div class="widget__btns"><button class="widget__btn btn btn_black btn_wide">Withdraw Earnings</button></div>
                  </div>
                </div>
              </div> */}
              <div class="page__widgets">
                <div class="widget widget_shadow">
                  <div class="widget__title">Working Projects</div>
                  <div class="quality">
                    <div class="quality__list">
                      <div class="quality__item quality__item_chart">
                        <div class="quality__preview bg-pink-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-1.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__title title">BIJBOL</div>
                          <div class="quality__info caption-sm">Dental Networking Application</div>
                        </div>
                        <div class="quality__chart">
                          <div id="chart-circle-purple"></div>
                          <div class="quality__percent caption-sm">90%</div>
                        </div>
                      </div>
                      <div class="quality__item quality__item_chart">
                        <div class="quality__preview bg-yellow-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-2.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__title title">Yira Life</div>
                          <div class="quality__info caption-sm">Health Care Application</div>
                        </div>
                        <div class="quality__chart">
                          <div id="chart-circle-green"></div>
                          <div class="quality__percent caption-sm">90%</div>
                        </div>
                      </div>
                      <div class="quality__item quality__item_chart">
                        <div class="quality__preview bg-blue-light-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-3.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__title title">CarSimple</div>
                          <div class="quality__info caption-sm">Fleet Management Application</div>
                        </div>
                        <div class="quality__chart">
                          <div id="chart-circle-red"></div>
                          <div class="quality__percent caption-sm">15%</div>
                        </div>
                      </div>
                    </div><button class="quality__btn btn btn_black btn_wide">Discover More</button>
                  </div>
                </div>
                
              </div>
              <div class="widget widget_shadow">
                  <div class="widget__top">
                    <div class="widget__title mr-auto">Reporting To</div><a class="widget__next" href="#"><svg class="icon icon-arrow-next-fat">
                       
                      </svg></a>
                  </div>
                  <div class="quality">
                    <div class="quality__list">
                      <div class="quality__item">
                        <div class="quality__preview bg-pink-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-1.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__line">
                            <div class="quality__title title">Vikram</div>
                            <div class="quality__price title"><i  class="fa fa-chevron-right icon"></i></div>
                            
                          </div>
                          <div class="quality__info caption-sm">Reporting Manager</div>
                        </div>
                      </div>
                      <div class="quality__item">
                        <div class="quality__preview bg-pink-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-3.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__line">
                            <div class="quality__title title">Pawan Abhiram</div>
                            <div class="quality__price title"><i  class="fa fa-chevron-right icon"></i></div>
                          </div>
                          <div class="quality__info caption-sm">Technical Lead</div>
                        </div>
                      </div>
                      <div class="quality__item">
                        <div class="quality__preview bg-blue-opacity"><img class="quality__pic" src={process.env.PUBLIC_URL + '/assets/images/figure-5.png'} alt="" /></div>
                        <div class="quality__details">
                          <div class="quality__line">
                            <div class="quality__title title">Rahul</div>
                            <div class="quality__price title"><i  class="fa fa-chevron-right icon"></i></div>
                          </div>
                          <div class="quality__info caption-sm">Lead Operations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <div class="page__col">
              <div class="page__group">
                {/* <div class='mobcalendar'>
              <DatePicker selected={selectedDate}  onChange={(e) => handleChange(e)} value={selectedDate} maxDate={new Date()} />
              </div> */}
                <div class="widget widget_shadow deskcalendar">
                  
                  <Calendar  onChange={(e) => handleChange(e)} value={selectedDate} maxDate={new Date()} />
                </div>
                {/* <div class="widget widget_empty widget_p0">
                  <div class="widget__title">Work Status</div>
                  <div class="widget__chart widget__chart_impressions">
                    <div id="chart-affiliate-impressions"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          
        </div>
      </div>
            </div>
        </div>
     );
}
 
export default Asheet;