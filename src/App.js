import React from "react";
import "./style.css";
import Button from './Button'

export default function App() {
const handleClick = ()=>{
  alert('Button has been clicked')
}
  return (
    <div>
      <Button name ={'Click'} callBack={handleClick}/>
    </div>
  );
}
