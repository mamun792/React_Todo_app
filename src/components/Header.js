

import { LiaReact } from "react-icons/lia";

export default function Header() {
  return (
    <div >
      <header className="header bg-gray-900 p-10 container mx-auto border-b border-teal-900 border-dashed rounded-tl-xl rounded-tr-xl">
        <h1 className="font-semibold text-teal-500 uppercase tracking-wider flex gap-2 items-center ">
            <span>
           <LiaReact />
            </span>
            <span className="text-3xl">Todo App</span>
        </h1>
      </header>
    </div>
  )
}
