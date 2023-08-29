import { LiaEdit } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { deleteContext } from "../App";
import { editContext } from "../App";

export default function TaskItem({
  task,
  editText,
  setEditText,
  handelSubmiter,
}) {
  const HandleDelete = useContext(deleteContext);
  const handleEdits = useContext(editContext);

  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-t hover:from-teal-600 hover:to-gray-800 group">
      <div className="task-item-left flex">
        <span className=" accent-teal-400 ">
          <input type="checkbox" className="mr-2"></input>
        </span>
        {/* // <p className=" group-hover:text-teal-400">{task.text}</p> */}

        {task.isEditable && (
          <form onSubmit={(e)=>handelSubmiter(e,task.id)}>
            <input type="text" className=" bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
           
          </form>
        )}

        {!task.isEditable && (
          <p className=" group-hover:text-teal-400">{task.text}</p>
        )}
      </div>

      <div className="task-item-right flex gap-3">
        <button onClick={() => handleEdits(task.id)}>
          {/* onClick={()=>handleEdit(task.id)} */}
          <LiaEdit className="text-gray-500 group-hover:text-teal-600 cursor-pointer duration-300" />
        </button>
        <button onClick={() => HandleDelete(task.id)}>
          <AiOutlineDelete className="text-gray-500 hover:text-red-700 cursor-pointer duration-300" />
        </button>
      </div>
    </div>
  );
}
