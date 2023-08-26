import TaskItem from "./TaskItem";

export default function TasksList({ tasks}) {
  return (
    <div className="taskItme flex flex-col gap-2 bg-gray-900 mx-auto container p-10">
     
     {tasks.map((task)=> <TaskItem key={task.id} task={task} />)}
     
    </div>
  );
}
