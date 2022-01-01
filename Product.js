import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from './StateProvider';
function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    console.log("this is basket"+basket[0]);
    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    } 
    return (
        <div className='product'>
            <div className="product_imageDiv">
                <img name="Product"src={image} alt="" className='product_image' />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
            <div className="product_info">
                
                <p>{title}</p>
                
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product_rating">
                    {Array(rating).fill().map(()=><StarIcon className='product_rating_star'/>)}
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Product
