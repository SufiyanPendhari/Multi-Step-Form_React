import '../App.css'
import FormInput from '../Component/formInput'
import {  useState } from 'react'


export default function PaymentDetail({data}) {
    const [cardOwner, setcardOwner] = useState('')
    const [expiryDate, setexpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [CardNumber, setCardNumber] = useState('')

    const [WarncardOwner, setWarncardOwner] = useState('0')
    const [WarnexpiryDate, setWarnexpiryDate] = useState('0')
    const [Warncvv, setWarnCvv] = useState('0')
    const [WarnCardNumber, setWarnCardNumber] = useState('0')

    const onClick = (e) =>{
        e.preventDefault()
        if (cardOwner&&expiryDate&&cvv&&CardNumber) {
            CardNumber[15]==null?setWarnCardNumber('Enter a valid number'):setWarnCardNumber('0')
            cvv[2]==null?setWarnCvv('enter a valid cvv'):cvv[3]?setWarnCvv('enter a valid cvv'):setWarnCvv('0')
            if(CardNumber[15]!==null&&!cvv[2]!==null&&cvv[3]===undefined){
                sessionStorage.clear()
                console.log('suceess');
                data(3)
            }else{
                console.log(CardNumber[15]!==null);
                console.log(!cvv[2]!==null);
                console.log(cvv[3]===undefined);
                console.log();
                console.error('fd');
            }
            
            
             
        }else{
            setWarncardOwner(!cardOwner?'Enter Card Owner':"0")
            setWarnexpiryDate(!expiryDate?'Enter Card Owner':"0")
            setWarnCvv(!cvv?'Enter Card Owner':"0")
            setWarnCardNumber(!CardNumber?'Enter Card Owner':"0")


        }
    }
    const onPrev = (e) => {
        e.preventDefault()
        data(1)
    }
    const onCoChange = (e) =>{
        setcardOwner(e.target.value)
        sessionStorage.setItem('card owner',e.target.value)
    }
    const onED = (e) =>{
        setexpiryDate(e.target.value)
        sessionStorage.setItem('expiry date',e.target.value)
    }
    const onCvv = (e) =>{
        setCvv(e.target.value)
    }
    const onCardNumber = (e) => {
        console.log(e.target.value.length);
        setCardNumber(e.target.value)
    }
    return (
        <div>
            <form autoComplete="" className="Form">
                <div className="Form-title">Payment Details</div>
                <FormInput title="Card Owner" type="text" onChange={onCoChange} warning={WarncardOwner==='0'?"":WarncardOwner}/>
                <div className="CD">
                    <FormInput title="Expiry date" type='text' onChange={onED} warning={WarnexpiryDate==='0'?"":WarnexpiryDate}/>
                    <FormInput title="CV Code" type='number' onChange={onCvv} warning={Warncvv==='0'?"":Warncvv}/>
                </div>
                <FormInput title="Card Number" type='text' onChange={onCardNumber} warning={WarnCardNumber==='0'?"":WarnCardNumber}/>
                <div className="AF-button" >
                    <button className="PD-buttonp" onClick={onPrev}>Previous</button>
                    <button className="PD-buttonn" type="button" onClick={onClick}>Pay</button>

                </div>
            </form>
        </div>
    )
}
