import React from 'react';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import add from './add.jpg';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (

       <div className="Checkout_container">
            <div className="Checkout">
                <img src={add}
                alt=""
                className="Checkout_image_add"
                />
                <div className="Checkout_information">
                        {basket?.length == 0 ? (
                            <div className="Checkout_title">
                                <h2 >Your Shopping Basket is Empty</h2>
                                <p>You have no Item in your basket. buy some items by clicking 
                                    "Add to basket" option next to the product.
                                </p>
                            </div>
                        ) : (
                            <div >
                                <h2 className="Checkout_title">Your Shopping Basket</h2>
                                {/* List all the checkout products  */}
                                {basket.map(item =>(
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                            </div>

                        )}
                </div>
            </div>
            <div className="subtotal">
                <Subtotal/>
            </div>
       </div>
    )
}

export default Checkout
