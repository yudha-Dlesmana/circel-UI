import { ReactNode } from "react";
import { SidebarLeft } from "../sidebars/LeftSidebars";
import { SidebarRight } from "../sidebars/RightSidebars";
import { useLocation } from "react-router";


export function Main({children} : {children: ReactNode}){
  const location = useLocation()
  const detailImage = location.pathname.startsWith("/detail-image")
  if(detailImage) return <>{children}</>

  return (
    <>
      <SidebarLeft/>
      <div className="w-full pl-[16.7%] pr-[25%]">
        <main className="">
          {children}
          </main>
        </div>
      <SidebarRight/>
    </>
  )
}