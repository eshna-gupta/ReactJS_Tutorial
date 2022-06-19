import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading2 from './Heading2';
import ListImage from './ListImage';


const name = "Eshna Gupta";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://picsum.photos/";

const heading = {
  color: ' #fa9191',
  textAlign: 'center',
  fontFamily: 'Indie Flower', 
  margin: '50px'
}

const images = {
  justifyContent: 'center',
  display: 'flex'
}
ReactDOM.render(
  <>
  <h1 style={heading} >
    My name is {name}
  </h1>
  <Heading2 />
  <div style={images}>
  <img src= {img1}  alt = "Random Image" />
    <img src= {img2}  alt = "Random Image" />
    <a href= {link} target = "_blank">
    <img src= {img3}  alt = "Random Image" />
    </a>
  </div>
{/* <ol>
  <li> Image for view 1</li>
  <li> Image for view 2</li>
  <li> Image for view 3</li>
</ol> */}
  {/* <ol style={images}>
   <li style={{  fontSize: "2rem" }}> <img src= {img1}  alt = "Random Image" /></li>
   <li style={{ fontSize: "2rem"}} > <img src= {img2}  alt = "Random Image" /> </li>
   <li style={{ fontSize: "2rem"}}><a href= {link} target = "_blank"><img src= {img3}  alt = "Random Image" /></a></li>
  </ol>  */}
   <ListImage />
  </>,
  document.getElementById("root")
  
);