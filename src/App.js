import './App.css';
import AddressForm from './Page/Address-form';
import PaymentDetail from './Page/Payment-Detail';
import PDForm from './Page/PD-form';
import { useState} from 'react'
import Thanks from './Page/Thanks';


function App() {
  const [FormNo, setFormNo] = useState(0)
  const data = (e) => {
    setFormNo(e)
  }
  return (
    <div className="App">
      {FormNo===0?<PDForm data={data} />:FormNo===1?<AddressForm data={data} />:FormNo===2?<PaymentDetail data={data} />:<Thanks data={data}/>}
    </div>
  );
}

export default App;
