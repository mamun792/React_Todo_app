import React from "react";

export default function AddTouch() {
  const [task, setTask] = React.useState("");
  const TaskRef = React.useRef(null);

  const taskPerform = (e) => {
    e.preventDefault();
    // post task to the server
    taskPostin(task);
 

    TaskRef.current.blur();
    setTask("");
  };

  // add taskposting function

  const taskPostin = async (name) => {
    try {
       
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (!responce.ok) {
        throw new Error(`HTTP error! Status: ${responce.status}`);
      }
  

      const data = await responce.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <form onSubmit={taskPerform}>
      <div className="flex justify-between container mx-auto bg-gray-900 p-10">
        <input
          type="text"
          value={task}
          ref={TaskRef}
          onChange={(e) => setTask(e.target.value)}
          className=" bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5  focus:border-teal-600"
          placeholder="What things to do"
        ></input>

        <button className="bg-teal-900 hover:bg-teal-600 text-gray-100 px-5 py-2 rounded">
          Add Task
        </button>
      </div>
    </form>
  );
}
