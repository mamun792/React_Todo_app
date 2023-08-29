import React from "react";
import { useState } from "react";
import setLoading from "react";

export default function AddTouch({tasks, setTaski }) {
  const [task, setTask] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const TaskRef = React.useRef(null);

  const taskPerform = (e) => {
    e.preventDefault();
    // post task to the server
    taskPostin(task);

    TaskRef.current.blur();
    setTask("");
  };

  // add taskposting function

  const taskPostin = async (text) => {
    try {
      setLoading(true);
      const responce = await fetch(
        "https://trusting-gigantic-chili.glitch.me/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      )
      

      if (!responce.ok) {
        throw new Error(`HTTP error! Status: ${responce.status}`);
      }

      const data = await responce.json();
      setTaski([...tasks, data]);
     
    } catch (error) {
     setError(error.message);
      setLoading(false);
    }
    finally {
      setLoading(false)
    };
  };

  return (
    <form onSubmit={taskPerform}>
      <div className="flex justify-between container mx-auto bg-gray-900 p-10">
        <input
          type="text"
          required
          value={task}
          ref={TaskRef}
          onChange={(e) => setTask(e.target.value)}
          className=" bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5  focus:border-teal-600"
          placeholder="What things to do"
        ></input>

        <button className="bg-teal-900 hover:bg-teal-600 text-gray-100 px-5 py-2 rounded">
         {!isLoading && "add"} 
        {isLoading && <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.293 2.293a1 1 0 001.414 1.414L10 13.414l2.293 2.293a1 1 0 001.414-1.414L11.414 12l2.293-2.293a1 1 0 00-1.414-1.414L10 10.586 7.707 8.293a1 1 0 00-1.414 1.414L8.586 12l-2.293 2.293z"
              ></path>
            </svg>
 }

        </button>
      </div>
    </form>
  );
}
