import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider'
function Product({ id, title, price, rating, image }) {
    const [{basket},dispatch] = useStateValue();
    const addtoBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD TO BASKET',
            item: {
                id, 
                title, 
                price, 
                rating, 
                image,
            }
        })
    }; 
    return (
        <div className="Product">
           <div className="Product_info">
                <p>{title}</p>
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
            </div>
        <img src={image} alt="" className="Product_image"/>
        <button onClick={addtoBasket}>Add to basket</button>            
        </div>
    )
}
export default Product
