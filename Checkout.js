import React from 'react'
import './checkout.css'
import amazon_ad from './AmazonImages/Amazon_ad_banner.png'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const[{basket},dispatch] = useStateValue();
    
    return (
        <div className='checkout'>
            <div className="checkout_left">
            <img className='checkout_ad' src={amazon_ad} alt="" />

                <div>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                    
                </div>
                <div>
                    {basket.map((ind)=>{
                        return(
                            <CheckoutProduct ind={ind}/>
                        )
                       
                    })}
                </div>
            </div>
           <div className="checkout_right">
               <Subtotal />
           </div>
            
        </div>
    )
}

export default Checkout
