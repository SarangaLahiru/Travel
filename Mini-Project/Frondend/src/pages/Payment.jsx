import React, { useState } from 'react';
import './Payment.css';

const PaymentForm = () => {
    const [cardType, setCardType] = useState('');

    const handleCardTypeChange = (event) => {
        setCardType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log("Form submitted");
    };

    return (
        <div>
            <h1>
                Make Your Payment
            </h1>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h2>
                        Your Total: Rs. 450.00
                    </h2>
                    <label className="form-label">Card Type</label>
                    <div className="card-types">
                        <label>
                            <input
                                type="radio"
                                value="visa"
                                checked={cardType === 'visa'}
                                onChange={handleCardTypeChange}
                            />
                            <img src="public/Images/VISA.jpg" alt="VISA" className="card-logo" />
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="mastercard"
                                checked={cardType === 'mastercard'}
                                onChange={handleCardTypeChange}
                            />
                            <img src="public/Images/MASTER.jpg" alt="MasterCard" className="card-logo" />
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input type="text" id="cardNumber" className="form-input" placeholder="1234 5678 9012 3456" required />
                </div>

                <div className="form-group">
                    <label className="form-label">Expire Date</label>
                    <div className="expire-date">
                        <input type="text" id="expMonth" className="form-input" placeholder="MM" required />
                        <input type="text" id="expYear" className="form-input" placeholder="YY" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" id="cvv" className="form-input" placeholder="123" required />
                </div>

                <button type="submit" className="submit-button">Submit Payment</button>
            </form>
        </div>
    );
}

export default PaymentForm;
