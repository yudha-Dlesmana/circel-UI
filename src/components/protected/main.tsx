import { Outlet } from "react-router";
import { Main } from "../layout/MainLayouts";

export function MainProtected(){
  return (
    <Main>
      <Outlet/>
      </Main>
  )
}