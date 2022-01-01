import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider';
import {useNavigate} from 'react-router-dom'
function Subtotal() {
    const[{basket},dispatch] = useStateValue();
    const navigate = useNavigate();
    const findTotal = () => {
        let total=0;
        basket.map((ind) => {
            let price=ind.price;
            total+=price;
        })
        return total;
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{value}</strong> 
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> 
                            This Contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={findTotal()}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}

            />
            <button onClick={(e) => navigate('/paymentPage')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
