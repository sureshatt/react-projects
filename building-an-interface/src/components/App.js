import React, { useState, useEffect } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointment from './SearchAppointments';
import ListAppointments from './ListAppointments';

function App() {

  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const appts = result.map(item => {
          return item;
        })

        // change if and only if the array has changed. 
        if (myAppointments.length !== appts.length) {
          setMyAppointments(appts);
        }
      })
  })



  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">

              <AddAppointments />
              <SearchAppointment />
              <ListAppointments appointments={myAppointments} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
