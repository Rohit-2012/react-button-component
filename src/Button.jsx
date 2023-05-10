import React from 'react'
import Btn from './Button.module.css'
function Button({name, callBack}){
  return(
    <button className ={Btn.button} onClick={callBack}>
      {name}
    </button>
  )
}
export default Button