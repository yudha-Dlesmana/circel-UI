export function ForgotForm(){
  return(
    <form className= "flex flex-col w-[412px] space-y-3">
      <input type="text" placeholder="Email" className="
      p-2
    text-white placeholder-[var(--gray-color)]
      focus:outline-0 focus:border-[var(--primary-color)] 
      border-1 border-[var(--gray-color))] rounded-md"/>
      <button className="bg-[var(--primary-color)] 
      py-2 px-4
    text-white font-bold text-xl
      rounded-full
      hover:bg-[var(--hover-color)]">
        Send Instruction</button>
      </form>
  )
}