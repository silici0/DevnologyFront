import React from "react";
import {ActionInterface, ActionType} from "../Types/global";
import Header from "../Components/Header/Header";

interface LayoutProps {
  children: JSX.Element,
  dispatch: React.Dispatch<ActionInterface>
}

export default function Layout(props: LayoutProps) {
  const { children, dispatch } = props;

  return (
    <React.Fragment>
      <Header dispatch={dispatch} />
      {children}
    </React.Fragment>
  )
}