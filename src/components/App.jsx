import React from "react";
import Header from "./Header";
import Content from "./Content";
import Impact from "./Impact";
import Vaccination from "./Vaccination";
function Vaccine(){
  return (
  <div >
  <Header />
  <Content />
  <div className="impact" >
      <h1 className="secondtext">IMPACT</h1>
      <h2 className="text1">You donation will help:</h2>
      <Impact 
     image="/Mask-2.png"
     text="Create awareness on the importance of vaccination"
   />
    <Impact 
     image="/Vaccination.png"
     text="Help rural India access easy and quiker vaccination"
   />
    <Impact 
     image="/covid.png"
     text="Help India beat COVID-19"
   />
   </div>
   <Vaccination />
 
  </div>
  )
}
export default Vaccine;