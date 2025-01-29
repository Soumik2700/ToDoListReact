/* eslint-disable react/jsx-key */
import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    function handleClick() {
        const inputValue = document.querySelector(".input").value.trim();
        if (inputValue) {
            setTasks(prevTasks => [...prevTasks, { text: inputValue, completed: false }]);
            document.querySelector(".input").value = "";
        }
    }

    // Function to update a task when edited
    function updateTask(index, newText) {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, text: newText } : task
            )
        );
    }

    // Function to delete a task
    function deleteTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    // Function to mark a task as completed
    function toggleComplete(index) {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    }

    return (
        <div className="w-[600px]">
            <div className="w-full flex justify-between items-center">
                <input className="input focus:outline-green-300" type="text" placeholder="Enter Task" />
                <button className="addBtn w-16 h-[40px] bg-blue-300 rounded-2xl" onClick={handleClick}>
                    Add
                </button>
            </div>

           <div className="space-y-2">
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={index}
                        taskDetails={task}
                        index={index}
                        updateTask={updateTask}  // Pass update function
                        deleteTask={deleteTask}  // Pass delete function
                        toggleComplete={toggleComplete} // Pass toggle function
                    />
                ))}
           </div>
        </div>
    );
}

export default ToDoList;
