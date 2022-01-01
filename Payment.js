import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import  './payment.css'
import {useStateValue} from './StateProvider';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment_container'>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?user.email.slice(0,Array.from(user.email).findIndex((ch)=>ch==='@')):'Guest'}</p>
                        <p>Mariyamman Kovil street</p>
                        <p>Perambalur - 620 012</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                            <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                            {basket.map((item) => <CheckoutProduct ind={item}/>)}
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                            <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                           
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Payment
