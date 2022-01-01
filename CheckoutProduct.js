import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from './StateProvider';
import './checkoutProduct.css'

function CheckoutProduct({ind}) {
    const[{basket},dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id : ind.id
        })
    }
    return (
        <div className="checkoutProduct">
           
                <img className='checkoutProduct_image' src={ind.image} alt="" />
            
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{ind.title}</p>
                <p className='checkoutProduct_price'> 
                   <small>$</small>  
                   <strong>{ind.price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(ind.rating).fill().map(()=><StarIcon style={{color :"yellow"}}/>)}
                </div>
                <div className="checkoutProduct_removeButton">
                    <button onClick={removeItem}>Remove from basket</button>
                </div>
            </div>
           
        
            
            
           
    </div>
    )
}

export default CheckoutProduct
