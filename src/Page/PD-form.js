import '../App.css'
import FormInput from '../Component/formInput'
import {useEffect, useState } from 'react'
import FormDropDown from '../Component/formDropdown'

export default function PDForm({data}) {

   const [name,setName]= useState('')
   const [Email, setEmail] = useState('')
   const [phoneNumber, setPhoneNumber] = useState()
   const [Age, setAge] = useState(0)
   const [Gender, setGender] = useState('')

   useEffect(()=>{
    setName(sessionStorage.getItem('name')?sessionStorage.getItem('name'):"")
    setEmail(sessionStorage.getItem('email')?sessionStorage.getItem('email'):"")
    setPhoneNumber(sessionStorage.getItem('phonenumber')?sessionStorage.getItem('phonenumber'):"")
    setAge(sessionStorage.getItem('age')?sessionStorage.getItem('age'):"")
    setGender(sessionStorage.getItem('gender')?sessionStorage.getItem('gender'):"")
    
   },[])
   
   const onName=(e)=>{
       setName(e.target.value)
       sessionStorage.setItem('name',e.target.value)
    }
    const onEmail=(e)=>{
        setEmail(e.target.value)
        sessionStorage.setItem('email',e.target.value)
    }
    const onPN=(e)=>{
        setPhoneNumber(e.target.value)
        sessionStorage.setItem('phonenumber',e.target.value)
    }
    const onAge=(e)=>{
        setAge(e.target.value)
        sessionStorage.setItem('age',e.target.value)
    }
    const onGender=(e)=>{
        setGender(e.target.value)
        sessionStorage.setItem('gender',e.target.value)
    }
    let [warnName, setwarnName] = useState('0')
    let [warnEmail, setwarnEmail] = useState('0')
    let [warnPn, setwarnPn] = useState('0')
    let [warnAge, setwarnAge] = useState('0')
    let [warnGender, setwarnGender] = useState('0')
    const onClick = (e) => {
        e.preventDefault()
        if(name&&Email&&phoneNumber&&Age&&Gender){
            setwarnName( '0')
            setwarnEmail('0')
            setwarnAge('0')
            setwarnGender('0')
            if (phoneNumber[9]==null) {
                setwarnPn('Enter valid phone number*') 
            }else{
                setwarnPn('0')
                data(1)
            }
        } else {
            setwarnName( !name?'Enter name*':'0')
            setwarnEmail(!Email?'Enter Email*':"0")
            setwarnPn(!phoneNumber?'Enter valid phone number*':'0')
            setwarnAge(!Age?'Enter Age*':'0')
            setwarnGender(!Gender?'Enter Gender*':'0')
        }
        console.log(warnName);
    }
    return (
        <div>
            <form  className="Form">
                <div className="Form-title">Personal details</div>
                <FormInput title="Name" type="text" onChange={onName} warning={warnName==='0'?"":warnName} value={sessionStorage.getItem('name')}/>
                <FormInput title="Email" type="email" onChange={onEmail} warning={warnEmail==='0'?"":warnEmail} value={sessionStorage.getItem('email')}/>
                <FormInput title="Phone Number" type="number" onChange={onPN} warning={warnPn==='0'?"":warnPn} value={sessionStorage.getItem('phonenumber')}/>
                <FormInput title="Age" type="number" onChange={onAge} warning={warnAge==='0'?"":warnAge} value={sessionStorage.getItem('age')}/>
                <FormDropDown title="Gender"  onChange={onGender} warning={warnGender==='0'?"":warnGender} value={sessionStorage.getItem('gender')}/>
                    <button className="PD-buttonn"  onClick={onClick}>Next</button>
            </form>
        </div>
    )
}
