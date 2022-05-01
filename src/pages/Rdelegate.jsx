import React, { useEffect, useState } from 'react'
import '../style/register.css'

const Rdelegate = () => {
    const [parishes, setParishes] = useState([])
    const [parish, setParish] = useState(0)
    const [dean, setDean] = useState(0)
    const [deans, setDeans] = useState([])
    const [email, setEmail] = useState('')
    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')
    const [payment, setPayment] = useState('')
    const [phone, setPhone] = useState('')
    const [access, setAccess] = useState('')
    const [status, setStatus] = useState(null)
    const [paymentInitiated, setPaymentInitiated] = useState()
    useEffect(() => {
        getDeans()
        getPaymentStatus()
    })

    const getDeans = async () => {


        fetch('/points/Deaneries/GetDeaneries',
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
        fetch(`/points/Parishes/GetPaidParishes?deaneryId=${dean}`,
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
        setPaymentInitiated(true)
        console.log('yesboss')
        const body = {
            email: email,
            ParishId: parish,
            DeaneryId: dean,
            isParish: true,
            CustomerName: `${fname} ${mname} ${lname}`,
            CustomerPhone: phone

        }
        console.log(body)
        fetch(`/points/api/Payment/InitiateDelegateTransaction`,
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
            

        if(payment){
            payment.onClose = ()=>{
                console.log('closed')
            }
        }

    }
    const getPaymentStatus = () =>{
        if(paymentInitiated){
            fetch(`/points/api/payment/paystackVerifyTransaction?trxref=${access}&reference=${access}`)
                .then((res)=>res.json())
                .then((json)=> setStatus(json.status))
        }
        if(status){
            window.location.reload()
        }
    }
  return (
    <div className='rdelegate'>
    <div className="header">AYD Delegate Registration</div>
    <form method="POST" action="" onSubmit={makePayment}>
    {!!status  &&   
                <p className='status'> {status == 'success' ? 'payment complete' : 'processing payment'}</p>

                    
                    
                }
                 {
                    paymentInitiated && !status &&

                   <div className="paymentportal">
                        <iframe src={payment} frameborder="0"></iframe>
                   </div>
                }
    <div className="firstname">
            <p>First Name</p>
            <input type="text" name="firstname" id="firstname" required onChange={(event) => setFName(event.target.value)} />
        </div>
        <div className="lastname">
            <p>Last Name</p>
            <input type="text" name="lastname" id="lastname" required onChange={(event) => setLName(event.target.value)} />
        </div>
        <div className="middlename">
            <p>Middle Name</p>
            <input type="text" name="middlename" id="middlename" required onChange={(event) => setMName(event.target.value)} />
        </div>
        <div className="email">
            <p>Email</p>
            <input type="email" name="email" id="email" required onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="phone">
            <p>Phone</p>
            <input type="phone" name="phone" id="phone" required onChange={(event) => setPhone(event.target.value)} />
        </div>
        <div className="deaneary">
            <p>Deaneary</p>
            <select name="deaneary" id="deaneary" placeholder='deneary' required onChange={(event) => {
                        getParishes(event.target.value)
                        setDean(event.target.value)
                    }}>
                <option>Select Deanery ...</option>
                {deans && deans.map((dean, key) => <option key={key} value={dean.id}>{dean.deaneryName}</option>)}
            </select>
        </div>
        <div className="Parish">
            <p>Parish</p>
            <select name="parish" id="parish" placeholder='parish' required onChange={(event) => setParish(event.target.value)}>
                <option >Select parish ...</option>
                {parishes && parishes.map((parish, key) => <option key={key} value={parish.id}>{parish.parishName}</option>)}
            </select>
        </div>
        
        <div className="parishlevy">
            <p>Parish Levy</p>
            <input type="text" name="parishlevy" id="parishlevy" required readOnly value={1000}/>
        </div>
        <button type="submit">Make Payment</button>
    </form>
</div>
  )
}

export default Rdelegate