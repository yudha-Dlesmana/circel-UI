import { ReactNode } from "react";
import { SidebarLeft } from "./SidebarLefts";
import { SidebarRight } from "./SidebarRight";


export function Center({children} : {children: ReactNode}){
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