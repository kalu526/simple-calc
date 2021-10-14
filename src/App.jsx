import logo from './logo.svg';
import './App.css';
import React from "react";

import {useState} from 'react';
function App() {
  const [calc, setcalc]=useState("");
  const [result, setresult]=useState("");
  const ops=['*','+','/','-'];
  const Updatecal=(value)=>{
    if ( ops.includes(value) && calc==="" ||
        ops.includes(value) && ops.includes(calc.slice(-1))){
          return;
        }
    setcalc(calc+value);
    if(!ops.includes(value)){
      setresult(eval(calc+value).toString());
    }
  }

 const createdigits=()=>{
    const digits=[];

    for (let i=1 ; i<10 ;i++){
       digits.push(
         <button key={i}  onClick={()=>Updatecal(i.toString())}>{i}</button>
       )
    }
    return digits;
  }
  const calculate=()=>{
    setcalc(eval(calc).toString());
  }
  const deletelast=()=>{
      if( calc===""){
        return;
      }
      const value=calc.slice(0,-1);
      setcalc(value);
  }
  const reset=()=>{
    setcalc("");
    setresult("");
  }
  const reverse=()=>{
    setcalc(calc*-1);
  }
  return(
    <div className="app">
   <div className="calculater">
     <div className="show">
       <div className="sp">
       {result ?<span>({result})</span> :"" } 
     {calc || "0"}
       </div>
     
     </div>
     <div className="operator">
      <button onClick={()=>Updatecal("/")}>/</button>
      <button onClick={()=>Updatecal("*")}>*</button>
      <button onClick={()=>Updatecal("-")}>-</button>
      <button onClick={()=>Updatecal("+")}>+</button>
      
     </div>
     <div className="digits">
         {createdigits()}
        <button onClick={()=>Updatecal("0")}>0</button>
        <button  onClick={()=>Updatecal(".")}>.</button>
        <button  onClick={()=>calculate()}>=</button>
        <button onClick={()=>deletelast()}>Delete</button>
      <button onClick={()=>reset()}>Reset</button>
      <button onClick={()=>reverse()}>+/-</button>
     </div>
   </div>
   </div>
  );
  
}

export default App;
