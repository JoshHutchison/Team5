import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { useState } from "react";
import { Button } from "reactstrap";
import Header from "./Header";

const Home = (props) => {
  const [date, setDate] = useState(new Date());

  const isAvailableTime = (selectedDate) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = selectedDate.getDay()
    if ( dayIndex == 0) {
        return "12pm - 3pm"
    } else if(dayIndex <= 4){
        return "5pm - 8pm"
    }else {
        return "No After Hours Available"
    }  
  }

  return (
    <div className="Home">
      <Header></Header>   
      
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      
      <div className="availability-box">        
        <p>
          Available Time: {isAvailableTime(date)}          
        </p>
      </div>

      <div className="add-ticket-btn home-screen-btn">
        <Link className="add-ticket-btn-link" to="/addticket">
          <Button
            className="btn"
            block
            onClick={() => props.setUserData({ date: date })}
          >
            Add Ticket
          </Button>
        </Link>
      </div>

      <div className="view-waitlist home-screen-btn">
        <Link className="wait-list-btn-link" to="/waitlist">
          <Button className="btn" block>
            View Waitlist
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
