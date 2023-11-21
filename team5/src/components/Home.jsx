import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { useState } from "react";
import { Button } from "reactstrap";
import Header from "./Header";

const Home = (props) => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="Home">
      <Header></Header>
      
      {/* <h1 className="text-center">React Calendar</h1> */}
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p> */}

      <div className="add-ticket-btn home-screen-btn">
      <Link className="add-ticket-btn-link" to='/addticket'>    
        <Button block color="primary" onClick={() => props.setUserData({date:date})}>
          Add Ticket
        </Button>
        </Link>
      </div>

      <div className="view-waitlist home-screen-btn">
        <Link className="wait-list-btn-link" to='/waitlist'>    
            <Button block color="primary">
            View Waitlist
            </Button>
        </Link>
      </div>

    </div>
  );
};

export default Home;
