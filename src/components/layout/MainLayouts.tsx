import { ReactNode } from "react";
import { SidebarLeft } from "./LeftSidebars";
import { SidebarRight } from "./RightSidebars";


export function Main({children} : {children: ReactNode}){
  return (
    <div className="flex min-h-screen">
      <SidebarLeft/>
      <main className="flex-1">
        {children}
      </main>
      <SidebarRight/>
    </div>
  )
  
}