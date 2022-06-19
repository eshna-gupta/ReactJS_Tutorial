import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const colors = { }                       /*creating a object with empty value*/
let greeting = '';        /* creating a variable with emplty value*/
let current = new Date();
current = current.getHours();
const name = "Eshna";
if(current <12 && current>=1)
{
      greeting = 'Good Morning';
      colors.color= 'Yellow';
}

else if(current>=12 && current<=17)
{
   greeting = 'Good Afternoon';
   colors.color= 'pink';
}

else
{
  greeting = ' Good Evening'; 
  colors.color= 'Blue';
}

const bgStyling = {
  BackgroundColor:'tan',
  AlignContent: 'center',
  textAlign:'center',
  display: 'flex',
  textTransform: 'capitalize'
};


ReactDOM.render(
  <>
  <div>
  <h1 >
     Hello {name}, <span style={colors}> {greeting} </span>:)
  </h1>
  </div>
{/*    
  <p>
    Congratulations! you made it till here :)
  </p>  */}
  </>,
  document.getElementById("root")
);