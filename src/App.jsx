import React from 'react';
import Cards from "./Cards";
import Sdata from './Sdata';
import Netflix from './Netflix'; 
import Amazon from './Amazon'; 

const favseries="netflix";

// const FavS=()=>{
// if(favseries==="netflix"){
//   //   return(
//   //       <Cards 
//   //       key={Sdata[1].id}
//   //       imgsrc={Sdata[1].imgsrc}
//   //       title={Sdata[1].title}
//   //       sname={Sdata[1].sname}
//   //       link={Sdata[1].link}
//   // />
//   //   );
//  return  <Netflix/>
// }
// else{
// //   return(
// //     <Cards 
// //     key={Sdata[4].id}
// //     imgsrc={Sdata[4].imgsrc}
// //     title={Sdata[4].title}
// //     sname={Sdata[4].sname}
// //     link={Sdata[4].link}
// // />
// // );
//   return <Amazon/>
// }
// }


const App = () => (
  <>
  <h1 className='heading_style'>List of Top 5 Netflix series in 2022</h1>
  {Sdata.map((val,index)=> {
    return(
        <Cards 
      key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
  />
    );
  })} 

  {/* <FavS/> */}

  {/* {favseries==="netflix" ? <Netflix/> : <Amazon/>} */}
  </>

);

export default App;


