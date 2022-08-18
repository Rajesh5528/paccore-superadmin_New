import React, { Component } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import moment from 'moment';
  import { Bar } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
     
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      legend: {
        display: false,
        
    },
      scales: {
        yAxes: [
          {
            type:'time',
            time: {
                
                unit: "hour",
                displayFormats: {
                  hour: 'hh:mm:ss'
                },
              }
          }
        ],
        xAxes: [
          {
            grid: {
                lineWidth: 0,
                opacity:0,
                
            }
          }
        ]
      }
      },
  };

const DayBarChart = (props) => {
    let lab = [];
    let dee = [];
    
    const det = props.data.timeInterval.map(async l => {
       
            lab.push(l.punchIn);
        dee.push(l.duration);
        
       
        
    })
    console.log(dee,'data');
    const data = {
        labels:lab,
        
        datasets: [
          {
              // Label for bars
              fill: false,
              label: "total count/value",
              
              // Data or value of your each variable
              data: dee,
              // backgroundColor:
              // Color of each bar
              backgroundColor: 'white',
              // Border color of each bar
              // borderColor: ["aqua", "green", "red", "yellow"],
              borderWidth: 0.5,
            },
        ],
      };
    return ( 
        <div>
           
             {lab && dee ? lab.length > 0 && dee?.length ? 
                <Bar height={100} color={'white'}  options={options} data={data} /> : <p style={{color:'white'}}>there is no data</p> :  <p style={{color:'white'}}>there is no data</p>
            }
        </div>
     );
}
 
export default DayBarChart;