import React, {useEffect, useReducer} from 'react';
import Theme from "./Styles/Theme";
import {ThemeProvider} from "styled-components";
import { ctx } from "./Context";
import {initialState, reducerFn} from "./Reducer";
import {api} from "./Services/api";
import Layout from "./Layout";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import {StateInterface} from "./Types/global";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState())

  useEffect(() => {
    api
      .get('/products')
      .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data.data}))
  }, [])

  return (
    <div className="App">
      <ctx.Provider value={state}>
        <ThemeProvider theme={Theme}>
          <BrowserRouter>
            <Layout dispatch={dispatch}>
              <Routes>
                <Route path="/" element={
                  <Home
                    state={state as StateInterface}
                    dispatch={dispatch}
                    ctx={ctx}
                  />
                }/>
                <Route path="/products/:title" element={
                  <Product state={state} dispatch={dispatch} />
                }/>
                <Route path='/shopping-cart' element={
                  <Cart
                    state={state as StateInterface}
                    dispatch={dispatch}
                  />
                }/>
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </ctx.Provider>
    </div>
  );
}

export default App;
