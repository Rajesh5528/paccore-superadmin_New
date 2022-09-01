import React, { Component } from 'react';
import events from "./common/events";
import {Calendar,momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment)

// const allViews = Object.keys(Calendar.Views).map(
//   (k) => Calendar.Views[k]
// );
const LeaveCalender = () => {
    return ( 
        <div
    style={{
      height: 500,
      borderRadius: 60,
      borderWidth: 1,
    }}
  >
    <Calendar
      margin={20}
      localizer={localizer}
      events={events}
      step={60}
      startAccessor="start"
      endAccessor="end"
      // views={allViews}
      defaultDate={new Date()}
    />
  </div>
     );
}
 
export default LeaveCalender;