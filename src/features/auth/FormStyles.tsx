import { cn } from "tailwind-cn"

export const errorMessageStyles= cn(
  "mt-1 text-sm text-[var(--red-color)]",
  "animate-fade-in"
)

export const formStyles = cn(
  "flex flex-col", 
  "w-[412px] space-y-3")

export const inputStyles =  cn(
  "w-full",
  "p-2",
  "text-white placeholder-[var(--gray-color)]",
  "focus:outline-0 focus:border-[var(--primary-color)]",
  "rounded-md",
  "border-1 border-[var(--gray-color)]"
)
export const buttonStyles = cn(
  "bg-[var(--primary-color)]",
  "py-2 px-4",
  "text-white font-bold text-xl",
  "rounded-full",
  "hover:bg-[var(--hover-color)]"
)