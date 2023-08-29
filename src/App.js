import { createContext, useEffect, useState } from "react";
import AddTouch from "./components/AddTouch";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import TasksList from "./components/TasksList";

export const deleteContext = createContext();
const deleteProvider = deleteContext.Provider;
export const editContext = createContext();
const editProvider = editContext.Provider;

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editText, setEditText] = useState("");
  const [toggleEdit, settoggleEdit] = useState(true);
  

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const responce = await fetch(
        "https://trusting-gigantic-chili.glitch.me/tasks/"
      );
      if (!responce.ok) {
        throw new Error(`Something Worng: ${responce.status}`);
      }
      const data = await responce.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // delete task function
  const HandleDelete = async (id) => {
    try {
      // delete task from the server
      deleteTask(id);
      // update the state
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(
        `https://trusting-gigantic-chili.glitch.me/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Edit task function

  const handleEdit = async (id) => {
  
      //set element to id
      const [edittable] = tasks.filter((tasks) => tasks.id === id);
      edittable.isEditable = true;
      setEditText(edittable.text);

      setTasks([...tasks]);
      settoggleEdit(false);
      //rerange the state
      tasks
        .filter((tasks) => tasks.id !== id)
        .map((target) => (target.isEditable = false));

      // editing data props
      //set editate text

     
  };

  //handerinput

  const handerEditInput = (e, id) => {
    e.preventDefault();
    settoggleEdit(!toggleEdit);
    const editParing = {
      text: editText,
      id: id,
    };

    puttingRequest(editParing, id);

    //reail time update
    const [edittable] = tasks.filter((tasks) => tasks.id === id);
    
    edittable.isEditable = false;
    
    edittable.text = editParing.text;

  setTasks([...tasks]);
 
  };

  const puttingRequest = async (newData, id) => {
    await fetch(`https://trusting-gigantic-chili.glitch.me/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  };

  return (
    <div
      className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen
    text-gray-100 text-xl flex flex-col py-10"
    >
      <deleteContext.Provider value={HandleDelete}>
        <editContext.Provider value={handleEdit}>
          <Header />
          <AddTouch tasks={tasks} setTaski={setTasks} />
          <TasksList
            tasks={tasks}
            error={error}
            loading={loading}
            editText={editText}
            setEditText={setEditText}
            handelSubmiter={handerEditInput}
            
          />
          <Footer />
        </editContext.Provider>
      </deleteContext.Provider>
    </div>
  );
}

export default App;
