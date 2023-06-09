import {ActionInterface, StateInterface} from "../../Types/global";
import { HomeStyled } from "./HomeCss";
import Item from "../../Components/Product/Item";
import React from "react";

interface Props {
  state: StateInterface;
  dispatch: React.Dispatch<ActionInterface>;
  ctx?: React.Context<StateInterface>
}

export default function Home(props: Props) {
  const {state, dispatch } = props;
  return(
    <HomeStyled>
      {state.filteredItems.map(item => (
        <Item
          name={item.name}
          image={item.image}
          price={item.price}
          dispatch={dispatch}
        />
      ))}
    </HomeStyled>
  )
}