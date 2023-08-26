import { LiaEdit } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
export default function TaskItem({ task }) {
  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-t hover:from-teal-600 hover:to-gray-800 group">
      <div className="task-item-left flex">
        <span className=" accent-teal-400 ">
          <input type="checkbox"  className="mr-2"></input>
        </span>
        <p className=" group-hover:text-teal-400">{task.name}</p>
      </div>

      <div className="task-item-right flex gap-3">
        <span>
          <LiaEdit className="text-gray-500 group-hover:text-teal-600 cursor-pointer duration-300" />
        </span>
        <span>
          <AiOutlineDelete className="text-gray-500 hover:text-red-700 cursor-pointer duration-300" />
        </span>
      </div>
    </div>
  );
}
