import React from 'react'
import '../style/register.css'

const Rdelegate = () => {
  return (
    <div className='rdelegate'>
    <div className="header">AYD Parish Registration</div>
    <form action="">
    <div className="firstname">
            <p>First Name</p>
            <input type="text" name="firstname" id="firstname" required/>
        </div>
        <div className="lastname">
            <p>Last Name</p>
            <input type="text" name="lastname" id="lastname" required/>
        </div>
        <div className="middlename">
            <p>Middle Name</p>
            <input type="text" name="middlename" id="middlename" required/>
        </div>
        <div className="email">
            <p>Email</p>
            <input type="email" name="email" id="email" required/>
        </div>
        <div className="phone">
            <p>Phone</p>
            <input type="phone" name="phone" id="phone" required/>
        </div>
        <div className="deaneary">
            <p>Deaneary</p>
            <select name="deaneary" id="deaneary" placeholder='deneary' required>
                <option value="deaneary01">Deaneary 01</option>
            </select>
        </div>
        <div className="Parish">
            <p>Parish</p>
            <select name="parish" id="parish" placeholder='parish' required>
                <option value="parish01">Parish 01</option>
            </select>
        </div>
        
        <div className="parishlevy">
            <p>Parish Levy</p>
            <input type="text" name="parishlevy" id="parishlevy" required/>
        </div>
        <button type="submit">Make Payment</button>
    </form>
</div>
  )
}

export default Rdelegate