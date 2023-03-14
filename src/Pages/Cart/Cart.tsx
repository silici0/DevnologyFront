import {ActionInterface, ActionType, StateInterface} from "../../Types/global";
import React, {useEffect, useState} from "react";
import ProductCart from "../../Components/ProductCart/ProductCart";
import {CartStyled} from "./CartCss";

interface Props {
  state: StateInterface;
  dispatch: React.Dispatch<ActionInterface>;
  ctx?: React.Context<StateInterface>
}

interface ITotalAmount {
  subtotal: number;
  taxes: number;
  total: number;
}

const totalAmountInitial: ITotalAmount = {
  subtotal: 0,
  taxes: 0,
  total: 0
}

export default function Cart(props: Props) {
  const {state, dispatch} = props;
  const {shoppingCart} = state
  const [totalAmount, setTotalAmount] = useState<ITotalAmount>(totalAmountInitial)
  useEffect(() => {

    if (shoppingCart.length) {
      let subtotal = 0;
      let taxes = 0;
      let total = 0;

      shoppingCart.forEach(product => {
        subtotal += product.price * (product.quantity as number)
        taxes += subtotal * 0.16;
        total += subtotal + taxes;
      })

      setTotalAmount({
        subtotal: Math.round(subtotal),
        taxes: Math.round(taxes),
        total: Math.round(total)
      })
    }
  }, [shoppingCart])
  return (
    <section className="Cart">
      {shoppingCart.length ? (
        <section>
          <article>
            {shoppingCart.map(product => (
              <ProductCart
                key={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity as number}
                image={product.image}
                dispatch={dispatch}
                id={product.id}
              />
            ))}
          </article>

          <CartStyled>
              <div className="Cart__total--subtotal">
                <h2>Subtotal</h2>
                <span>${totalAmount.subtotal}</span>
              </div>

              <div className="Cart__total--subtotal">
                <h2>Taxes</h2>
                <span>${totalAmount.taxes}</span>
              </div>

              <div className="Cart__total--total">
                <h2>Total</h2>
                <span>${totalAmount.total}</span>
              </div>


          </CartStyled>
        </section>
      ) : (
        <span className="Cart__msg">The cart is empty</span>
      )}
    </section>
  )
}