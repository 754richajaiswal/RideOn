import React, { useState } from 'react';
import '../Style/payment.css';
import phonepe from '../assets/phonepe.webp';
import qrcode from '../assets/qr.jpg';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash"); // Default is Cash

  return (
    <div className='payment_gateway'>
      <div className="heading">
        <h3><i className="fa-solid fa-arrow-left"></i> Payments</h3>
        <h4>Total Fare :</h4>
      </div>

      {/* Cash Payment Option */}
      <div className="others">
        <h4>Others</h4>
        <div className='input'>
          <label>
            <i className="fa-solid fa-money-bill"></i> Cash
          </label>
          <input 
            type="radio" 
            value="cash" 
            name="payment" 
            checked={paymentMethod === "cash"} 
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
      </div>

      {/* UPI Payment Options */}
      <div className="upi">
        <h4>Pay by any UPI App</h4>
        <div className='input'>
          <label>
            <img src={phonepe} alt="PhonePe" /> PhonePe
          </label>
          <input 
            type="radio" 
            value="phonepe" 
            name="payment" 
            checked={paymentMethod === "phonepe"} 
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>

        {/* Show QR Code only when PhonePe is selected */}
        {paymentMethod === "phonepe" ? (
          <div className="image show-image">
            <img src={qrcode} alt="QR Code for Payment" />
          </div>
        ) : (
            <div className="image"></div>
        )}
      </div>

      {/* Proceed Button */}
      <div className="proceed">
        <button>Proceed</button>
      </div>
    </div>
  );
}

export default Payment;
