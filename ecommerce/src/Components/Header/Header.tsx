import React, {useContext} from "react";
import {ActionInterface} from "../../Types/global";
import {NavigateFunction, useNavigate} from "react-router-dom";
import Search from "../../Assets/search.svg";
import Cart from "../../Assets/cart.svg";
import {ButtonStyled, CartInfoStyled, HeaderStyled} from "./HeaderCss"
import {ctx} from "../../Context";

interface Props {
  dispatch: React.Dispatch<ActionInterface>
}

export default function Header(props: Props) {
  const { dispatch } = props;
  const navigate: NavigateFunction = useNavigate();
  const state = useContext(ctx);
  const isProduct: boolean = window.location.pathname.includes("products")
  let {shoppingCart} = state;

  const handleSearchDesktop = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "SEARCHING", payload: e.target.value})
    if (!e.target.value) {
      dispatch({type: "FILTER", payload: "All items"})
    }
  }

  return (
    <HeaderStyled>
      <React.Fragment>
        {isProduct ? (
          <button onClick={() => navigate("/")}>
            BACK
          </button>
        ): (
          <button className="Header__logo" onClick={() => navigate("/")}>
            <img src="https://placeimg.com/40/40/logo" alt=""/>
          </button>
        )}


        {!isProduct ? (
          <div className="search-field">
            <label htmlFor="search">
              <img width="15" height="15" src={Search} alt=""/>
            </label>

            <input
              type="text"
              id="search"
              placeholder="Search..."
              onChange={handleSearchDesktop}

            />
          </div>
        ): (<div></div>)}
        <ButtonStyled
          onClick={() => navigate("shopping-cart")}
        >

          <img width="15" height="15" src={Cart} alt=""/>
          {(shoppingCart.length > 0) && (
            <CartInfoStyled>{shoppingCart.length}</CartInfoStyled>
          )}
        </ButtonStyled>
      </React.Fragment>
    </HeaderStyled>
  )
}