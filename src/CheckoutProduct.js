import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';
function CheckoutProduct({id,title,price,image,rating}) {
    const [{basket},dispatch] = useStateValue();
    const RemovefromBasket =() =>{
            //Removing 
            dispatch({
                type: 'REMOVE FROM BASKET',
                id: id,
            })
    };
    return (
            <div className="checkoutProduct">
            <img src={image} alt="" className="Checkout_image"/>
                <div className="Checkout_info">
                    <div>
                    <p>{title}</p>
                    </div>    
                        <p className="Product_price">
                            <small>₹</small>
                            <strong>{price}</strong>
                        </p>

                        <div className="Product_rating">
                                        {
                                            Array(rating)
                                            .fill()
                                            .map((_) =>(
                                                <StarIcon/>
                                            ))
                                        }     
                        </div>
                        <button onClick={RemovefromBasket}>Remove from  basket</button>                     
                </div>
            
            </div>
       
    )
}

export default CheckoutProduct
