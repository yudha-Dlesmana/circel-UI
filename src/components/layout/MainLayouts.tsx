import { ReactNode } from "react";
import { SidebarLeft } from "../sidebars/LeftSidebars";
import { SidebarRight } from "../sidebars/RightSidebars";


export function Main({children} : {children: ReactNode}){
  return (
    <>
      <SidebarLeft/>
      <div className="w-full pl-[16.7%] pr-[25%]">
        <main className="p-2 ">
          {children}
          </main>
        </div>
      <SidebarRight/>
    </>
  )
}