import TaskItem from "./TaskItem";

export default function TasksList({
  tasks,
  error,
  loading,
  editText,
  setEditText,
   handelSubmiter,
   
}) {
  return (
    <div className="taskItme flex flex-col gap-2 bg-gray-900 mx-auto container p-10">
      {loading ? (
        <p className=" text-center">{error ? error : "Loading...."}</p>
      ) : (
        tasks.length === 0 && <p className="text-center">No Task Added</p>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editText={editText}
          setEditText={setEditText}
          handelSubmiter={handelSubmiter}
         
        />
      ))}
    </div>
  );
}
