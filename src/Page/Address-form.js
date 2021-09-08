import React, { useEffect } from 'react'
import FormInput from '../Component/formInput'
import { useState} from 'react'


export default function AddressForm({data}) {
    const [Al1, setAl1] = useState('')
    const [Al2, setAl2] = useState('')
    const [Al3, setAl3] = useState('')
    const [Pc, setPc] = useState(0)
    const [District, setDistrict] = useState('')
    const [State, setState] = useState('')

    useEffect(()=>{
        setAl1(sessionStorage.getItem('al1')?sessionStorage.getItem('al1'):"")
        setAl2(sessionStorage.getItem('al2')?sessionStorage.getItem('al2'):"")
        setAl3(sessionStorage.getItem('al3')?sessionStorage.getItem('al3'):"")
        setPc(sessionStorage.getItem('pc')?sessionStorage.getItem('pc'):"")
        setDistrict(sessionStorage.getItem('district')?sessionStorage.getItem('district'):"")
        setState(sessionStorage.getItem('state')?sessionStorage.getItem('state'):"")
        
    },[])
 
    const onAL1=(e)=>{
        setAl1(e.target.value)
        sessionStorage.setItem('al1',e.target.value)
    }
    const onAL2=(e)=>{
        setAl2(e.target.value)
        sessionStorage.setItem('al2',e.target.value)
    }
    const onAL3=(e)=>{
        setAl3(e.target.value)
        sessionStorage.setItem('al3',e.target.value)
    }
    const onPc=(e)=>{
        setPc(e.target.value)
        sessionStorage.setItem('pc',e.target.value)
    }
    const onDistrict=(e)=>{
        setDistrict(e.target.value)
        sessionStorage.setItem('district',e.target.value)
    }
    const onState=(e)=>{
        setState(e.target.value)
        sessionStorage.setItem('state',e.target.value)
    }

    let [warnAl1, setwarnAl1] = useState('0')
    let [warnAl2, setwarnAl2] = useState('0')
    let [warnAl3, setwarnAl3] = useState('0')
    let [warnPc, setwarnPc] = useState('0')
    let [warnDistrict, setwarnDistrict] = useState('0')
    let [warnState, setwarnState] = useState('0')
    const onClick = (e)=>{
        e.preventDefault()
        if(Al1&&Al2&&Al3&&Pc&&District&&State){
            data(2)
            setwarnAl1('0')
            setwarnAl2('0')
            setwarnAl3('0')
            Pc.length<6?setwarnPc('Enter valid pincode*'):setwarnPc('0')
            setDistrict('0')
            setState('0')
        }else{
            setwarnAl1(!Al1?'Enter address*':'0')
            setwarnAl2(!Al2?'Enter address*':'0')
            setwarnAl3(!Al3?'Enter address*':'0')
            Pc?setwarnPc('Enter valid pincode*'):setwarnPc('0')
            setwarnDistrict(!District?'Enter district*':'0')
            setwarnState(!District?'Enter State*':'0')
        }
    }

    const onPrev=()=>{
        data(0)
    }
    return (
        <div>
            <form  className="Form">
                <div className="Form-title">Address</div>
                <FormInput title="Address line 1" type="text" onChange={onAL1} warning={warnAl1==='0'?"":warnAl1} value={sessionStorage.getItem('al1')}/>
                <FormInput title="Address line 2" type="text" onChange={onAL2} warning={warnAl2==='0'?"":warnAl2} value={sessionStorage.getItem('al2')}/>
                <FormInput title="Address line 3" type="text" onChange={onAL3} warning={warnAl3==='0'?"":warnAl3} value={sessionStorage.getItem('al3')}/>
                <FormInput title="Pincode" type="number" onChange={onPc} warning={warnPc==='0'?"":warnPc} value={sessionStorage.getItem('pc')}/>
                <FormInput title="District" type="text" onChange={onDistrict}warning={warnDistrict==='0'?"":warnDistrict} value={sessionStorage.getItem('district')}/>
                <FormInput title="State" type="text" onChange={onState} warning={warnState==='0'?"":warnState} value={sessionStorage.getItem('state')}/>
                <div className="AF-button" >
                    <button className="PD-buttonp" onClick={onPrev} >Previous</button>
                    <button className="PD-buttonn" type="button" onClick={onClick}>Next</button>
                </div>
            </form>
        </div>
    )
}
