import React,{useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
        display: true
    },
    scales: {
        y: {
          ticks: {
            display: false,
          }
        }
      }
    },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 
const BarChart = (props) => {
   
    let lab = [];
    let dee = [];
    
    const det = props.bardata.map(async l => {
        if(props.tab === 'weekly'){
            lab.push(l.day.slice(0,3));
        dee.push(l.workinghour.slice(0,2));
        
        }else{
            console.log(props.tab,'tab');
            lab.push(l.month.slice(0,3));
        dee.push(l.workhours.slice(0,3))
        }
        
    })
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
              backgroundColor: props.tab === 'weekly' ? dee.map(k => k <8 ? ['#3f8cff']:['#6c5dd3']) : dee.map(k => k < 150 ? ['#3f8cff']:['#6c5dd3']),
              // Border color of each bar
              // borderColor: ["aqua", "green", "red", "yellow"],
              borderWidth: 0.5,
            },
        ],
      };
    return ( 
        <div>
            {lab && dee ? lab.length > 0 && dee?.length ? 
                <Bar height={200}   options={options} data={data} /> : <p>there is no data</p> :  <p>there is no data</p>
            }
        
        </div>
     );
}
 
export default BarChart;




