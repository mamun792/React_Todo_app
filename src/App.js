import { useEffect } from "react";
import AddTouch from "./components/AddTouch";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import TasksList from "./components/TasksList";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    GetData();
  });

  const GetData = async () => {
   try {
     const responce = await fetch(
       "https://trusting-gigantic-chili.glitch.me/tasks"
     );
     if (!responce.ok) {
       throw new Error(`HTTP error! Status: ${responce.status}`);
     }
     const data = await responce.json();
     setTasks(data);
   } catch (error) {
     console.log(error);
   }

  };

  return (
    <div
      className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen
    text-gray-100 text-xl flex flex-col py-10"
    >
      <Header/>
      <AddTouch  tasks={tasks} setTask={setTasks}/>
      <TasksList  tasks={tasks} />

      <Footer />
    </div>
  );
}

export default App;
