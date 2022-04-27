import React, { useEffect, useState } from 'react'
import '../style/register.css'
const RParish = () => {

    const [parishes, setParishes] = useState([])
    const [parish, setParish] = useState(0)
    const [dean, setDean] = useState(0)
    const [deans, setDeans] = useState([])
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [access, setAccess] = useState('')
    const [status, setStatus] = useState(null)
    const [paymentInitiated, setPaymentInitiated] = useState()
    useEffect(() => {
        getDeans()
        getPaymentStatus()
    })

    const getDeans = async () => {


        fetch('http://codeninja-001-site5.itempurl.com/Deaneries/GetDeaneries',
            {
                method:'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Host': 'codeninja-001-site5.itempurl.com',
                    'User-Agent': 'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0'
                }
            })
            .then((res) => res.json())
            .then((json) => setDeans(json))


    }
    const getParishes = async (dean) => {
        setStatus(false)
        setPaymentInitiated(false)
        setAccess(0)
        fetch(`http://codeninja-001-site5.itempurl.com/Parishes/GetParishes?deaneryId=${dean}`,
            {   
                method:'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Host': 'codeninja-001-site5.itempurl.com',
                    'User-Agent': 'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0'
                }
            })
            .then((res) => res.json())
            .then((json) => setParishes(json))
    }
    const makePayment = (e) => {
        e.preventDefault()
        var payment
        console.log('yesboss')
        const body = {
            email: email,
            ParishId: parish,
            DeaneryId: dean,
            isParish: true,
            CustomerName: name,
            CustomerPhone: phone

        }
        console.log(body)
        fetch(`http://codeninja-001-site5.itempurl.com/api/Payment/InitiateParishTransaction`,
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(body)
                
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json.data.data.reference)
                setAccess(json.data.data.reference)
                console.log(json)
                payment = window.open(json.data.data.authorization_Url)

            })
            .then(()=>setPaymentInitiated(true))

        if(payment){
            payment.onClose = ()=>{
                console.log('closed')
            }
        }

    }
    const getPaymentStatus = () =>{
        if(paymentInitiated){
            console.log('waiting for status')
            fetch(`http://codeninja-001-site5.itempurl.com/api/payment/paystackVerifyTransaction?trxref=${access}&reference=${access}`)
                .then((res)=>res.json())
                .then((json)=> setStatus(json.status))
                .then(()=>console.log(status))
        }
    }
    return (
        <div className='rparish'>
            <div className="header">AYD Parish Registration</div>
            <form method='POST' onSubmit={makePayment}>
                {!!status  &&   
                <p className='status'> {status == 'success' ? 'payment complete' : 'processing payment'}</p>

                    
                    
                }
                <div className="deaneary">
                    <p>Deanery</p>
                    <select name="deaneary" id="deaneary" placeholder='deneary' required onInput={() => console.log('boss is done')} onChange={(event) => {
                        getParishes(event.target.value)
                        setDean(event.target.value)
                    }
                    }>
                        <option value=''>Select...</option>
                        {deans && deans.map((dean, key) => <option key={key} value={dean.id}>{dean.deaneryName}</option>)}
                    </select>
                </div>
                <div className="Parish">
                    <p>Parish</p>
                    <select name="parish" id="parish" placeholder='parish' required onChange={(event) => setParish(event.target.value)}>
                        <option value=''>Select...</option>

                        {parishes && parishes.map((parish, key) => <option key={key} value={parish.id}>{parish.parishName}</option>)}
                    </select>
                </div>
                <div className="contactperson">
                    <p>Contact Person</p>
                    <input type="text" name="contactperson" id="contactperson" required onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="contactemail">
                    <p>Contact Email</p>
                    <input type="text" name="contactemail" id="contactemail" required onChange={(event) => setEmail(event.target.value)} />
                </div>
                
                <div className="contactphone">
                    <p>Contact Phone</p>
                    <input type="text" name="contactphone" id="contactphone" required onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div className="parishlevy">
                    <p>Parish Levy</p>
                    <input type="text" name="parishlevy" id="parishlevy" value={3000} required readOnly />
                </div>
                <button type="submit">Make Payment</button>
            </form>

        </div>
    )
}

export default RParish