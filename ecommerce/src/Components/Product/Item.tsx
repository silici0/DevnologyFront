import React from "react";
import {DivImageStyled, H2Styled, ProductStyled} from "./ProductCss";
import {ActionInterface} from "../../Types/global";
import {NavigateFunction, useNavigate} from "react-router-dom";

interface ItemProps {
  name: string;
  image: string;
  price: number;
  dispatch: React.Dispatch<ActionInterface>;
}

export default function Item(props: ItemProps) {
  const {name, image, price, dispatch} = props;
  const navigate: NavigateFunction = useNavigate();
  const handleNavigation = () => {
    dispatch({
      type: "MOVING",
      payload: {}
    })
  navigate(`/products/${name}`)
  }
  return(
    <ProductStyled>
      <div className="Product">
        <DivImageStyled onClick={handleNavigation}>
          <img width="350px" src={image} alt={name} />
        </DivImageStyled>
        <H2Styled onClick={handleNavigation}>{name}</H2Styled>
        <p>R$ {price}</p>
      </div>
    </ProductStyled>
  )
}