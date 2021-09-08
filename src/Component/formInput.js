import React from 'react'
import '../App.css'
export default function FormInput({title,type,onChange,warning,value}) {
    return (
        <div className="FormInput">   
            <div className="Title">
                <label htmlFor={title}>{title}<span className="mand">*</span> </label>
            </div>
            <input type={type} className="Input" name={title} onChange={onChange} defaultValue={!value?'':value}/>
            {warning!==""?<div className="Warning" >{warning}</div>:<div></div>}
        </div>
    )
}
