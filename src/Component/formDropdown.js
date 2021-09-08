import React from 'react'
import '../App.css'
export default function FormDropDown({title,onChange,warning}) {
    return (
        <div className="FormInput">   
            <div className="Title">
                <label htmlFor={title}>{title}</label>
            </div>
            <div className="select">

            <select className="FDD" onChange={onChange} defaultValue={sessionStorage.getItem('gender')}>
            <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
                <option value="Other">other</option>
            </select>
            </div>
            {warning!==""?<div className="Warning" >{warning}</div>:<div></div>}
        </div>
    )
}
