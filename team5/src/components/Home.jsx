import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { useState } from "react";
import { Button } from "reactstrap";

const Home = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="Home">
      <h1>Mike Wazwski - Office Hours</h1>
      <h3>Live Wait time: under 20 min</h3>
      
      {/* <h1 className="text-center">React Calendar</h1> */}
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p> */}

      <div className="add-ticket-btn home-screen-btn">
      <Link className="wait-list-btn-link" to='/'>    
        <Button block color="primary">
          Add Ticket
        </Button>
        </Link>
      </div>

      <div className="view-waitlist home-screen-btn">
        <Link className="wait-list-btn-link" to='/'>    
            <Button block color="primary">
            View Waitlist
            </Button>
        </Link>
      </div>

    </div>
  );
};

export default Home;
