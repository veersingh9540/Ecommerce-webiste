import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider';
import {GetBasketTotal} from './reducer'
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="Subtotal">
            <h1>CHECKOUT</h1>
            <CurrencyFormat
                renderText ={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                        </p>
                        <small className="subtotal_Gift">
                            <input type="checkbox"/> This Order Contains a Gift
                        </small>
                    </>
                )}
                
                decimalScale = {2}
                value={GetBasketTotal(basket)}
                displayType={"text"}
                thousandSeparater={true}
                prefix={"₹"}

            />
            <button className="Subtotal_button">Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
