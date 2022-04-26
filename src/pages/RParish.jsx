import React from 'react'
import '../style/register.css'
const RParish = () => {
  return (
    <div className='rparish'>
        <div className="header">AYD Parish Registration</div>
        <form action="">
            <div className="deaneary">
                <p>Deaneary</p>
                <select name="deaneary" id="deaneary" placeholder='deneary' required>
                    <option value="deaneary01">Deaneary 01</option>
                </select>
            </div>
            <div className="contactperson">
                <p>Contact Person</p>
                <input type="text" name="contactperson" id="contactperson" required/>
            </div>
            <div className="contactemail">
                <p>Contact Email</p>
                <input type="text" name="contactemail" id="contactemail" required/>
            </div>
            <div className="Parish">
                <p>Parish</p>
                <select name="parish" id="parish" placeholder='parish' required>
                    <option value="parish01">Parish 01</option>
                </select>
            </div>
            <div className="contactphone">
                <p>Contact Phone</p>
                <input type="text" name="contactphone" id="contactphone" required/>
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

export default RParish