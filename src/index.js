import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Cards from "./Cards";
// import Sdata from './Sdata';
import App from './App';   

// function ncard(val){
//   return(
//   <Cards imgsrc={val.imgsrc}
//   title={val.title}
//   sname={val.sname}
//   link={val.link}
//   />
//   );
// }

// ReactDOM.render(
//   <>
//   <h1 className='heading_style'>List of Top 5 Netflix series in 2022</h1>
  
//   {/* {Sdata.map(ncard)}  */}
//   {/* {Sdata.map(function ncard(val){
//     return(
//         <Cards 
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         link={val.link}
//   />
//     );
//   })}  */}

//   {Sdata.map((val,index)=> {
//     return(
//         <Cards 
//         key={val.id}
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         link={val.link}
//   />
//     );
//   })} 
//   </>,
  
//   document.getElementById('root') 
// );


ReactDOM.render(
  <App/>,
  document.getElementById("root")
);


