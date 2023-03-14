import {ActionInterface, ActionType, ProductInterface} from "../../Types/global";
import {ChangeEvent} from "react";
import Trash from "../../Assets/trash.svg";
import {ProductCartContentStyled, ProductCartStyled} from "./ProductCartCss";

interface ProductCartProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
  dispatch: React.Dispatch<ActionInterface>;
  id: string,
}

export default function ProductCart(props: ProductCartProps) {
  const {image, name, price, quantity, dispatch, id} = props;
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {id: id, quantity: Number(e.target.value)}
    })
  }

  return (
    <ProductCartStyled>
      <div className="thumb">
        <img width="150px" src={image} alt={name}/>
      </div>

      <ProductCartContentStyled>
        <div>
          <h2>{name}</h2>
          <span>${price}</span>
          <div><select defaultValue={quantity} onChange={(e) => handleChange(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select></div>
        </div>

        <button onClick={() => dispatch({type: "REMOVE", payload: id})} >
          <img src={Trash} alt="" />
        </button>
      </ProductCartContentStyled>
    </ProductCartStyled>
  )
}