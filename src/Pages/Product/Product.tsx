import {ActionInterface, ProductInterface, StateInterface} from "../../Types/global";
import {InfoStyled, ProductStyled} from "../Product/ProductCss";
import Item from "../../Components/Product/Item";
import {useParams} from "react-router-dom";
import ButtonCTA from "../../Components/ButtonCTA";

interface Props {
  state: StateInterface;
  dispatch: React.Dispatch<ActionInterface>;
  ctx?: React.Context<StateInterface>
}

export default function Product(props: Props) {
  const {state, dispatch, ctx} = props;
  const {title} = useParams()
  const {products} = state
  const item: ProductInterface = products.find(index => index.name.trim() === title?.trim()) as ProductInterface

  return (
    <ProductStyled>
        <article className="image">
          <img src={item.image} alt=""/>
        </article>

        <InfoStyled>
          <div className="Detail__info--header">
            <h2>{item.name}</h2>
            <ButtonCTA
              id={item.id}
              dispatch={dispatch}
              added={item.added}

            />
          </div>

          <div className="Detail__info--meta">
            <span className="Detail__price">${item.price}</span>
          </div>
        </InfoStyled>
    </ProductStyled>
  )
}