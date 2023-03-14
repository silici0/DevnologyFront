import {ActionInterface, ChangeQuantityInterface, StateInterface} from "../Types/global";
import {ProductInterface} from "../Types/global";

export const initialState = (): StateInterface => {
  return {
    products: [],
    shoppingCart: [],
    filteredItems: [],
  }
}

export const reducerFn = (state: StateInterface, action: ActionInterface): StateInterface => {
  const { type, payload } = action
  let index: number | undefined;
  let newItem: ProductInterface;
  let newShoppingCart: ProductInterface[];
  const getIndex = () => {
    return state.products.findIndex(item => item.id === payload)
  }

  switch (type) {
    case "ADD_PRODUCTS":
      console.log(payload);
      return {
        ...state,
        products: payload as ProductInterface[]
      }

    case "ADD_INITIAL_ITEMS":
      state.products = payload as ProductInterface[];
      state.filteredItems = state.products;
      return {
        ...state,
      }

    case "ADD_TO_CART":
      index = getIndex()
      if (index >= 0) {
        newItem = state.products[index]
        newItem.quantity = 1
        newShoppingCart = [
          ...state.shoppingCart,
          newItem
        ]
      } else {
        newShoppingCart = state.shoppingCart
      }
      state.products[index].added = true;
      return {
        ...state,
        shoppingCart: newShoppingCart
      }

    case "REMOVE":
      index = getIndex()
      newShoppingCart = state.shoppingCart.filter(product => product.id !== payload)
      state.products[index].added = false;
      return {
        ...state,
        shoppingCart: newShoppingCart
      }

    case "SEARCHING":
      state.filteredItems = state.products.filter(item => {
        let searching: string = payload as string
        return item.name.toLowerCase().includes(searching.toLowerCase())
      })
      return {
        ...state
      }

    case "CHANGE_QUANTITY":
      index = state.shoppingCart.findIndex(
        item => item.id === (payload as ChangeQuantityInterface).id
      )
      newShoppingCart = [...state.shoppingCart]
      newShoppingCart[index].quantity = (payload as ChangeQuantityInterface).quantity

      return {
        ...state,
        shoppingCart: newShoppingCart
      }

    default: return state
  }
}