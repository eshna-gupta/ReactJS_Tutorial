import React from  'react';
import ReactDOM from 'react-dom';

const fname = "Eshna";
const lname = "Gupta";
const today = new Date();
const curr =today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() ;
ReactDOM.render(
  <>
    <h1>
       {`My name is ${fname} ${lname} `}
    </h1>
    <p>
        {`Today is ${curr}`}     
    </p>
    <p>
       {` And the current time is ${time}`}
    </p>
  </>,
  document.getElementById("root")
);
