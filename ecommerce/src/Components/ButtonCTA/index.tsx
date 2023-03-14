import {ActionInterface, ProductInterface} from "../../Types/global";
import React from "react";

export interface ButtonCTAProps {
  ItemId?: number;
  dispatch?: React.Dispatch<ProductInterface>;
  added?: boolean;
  content?: string;
  onclick?: Function
}

interface ItemProps {
  id: string;
  added?: boolean;
  dispatch: React.Dispatch<ActionInterface>;
}

export default function ButtonCTA(props: ItemProps) {
  const {added, dispatch, id} = props;
  const handleClick = () => {
    const action: string = added ? "REMOVE" : "ADD_TO_CART";
    dispatch && dispatch({type: action, payload: id})
  }

  return (
    <button className={`ButtonCTA ${added && "added"}`} onClick={handleClick}>
      {
          added ? `Remove` : `Add to cart`
      }
    </button>
  )
}