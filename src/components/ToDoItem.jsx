/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function ToDoItem({ taskDetails, index, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(taskDetails.text);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    updateTask(index, newTask); // Update task in parent state
    setIsEditing(false);
  }

  function handleDelete() {
    deleteTask(index); // Remove task from parent state
  }

  function handleComplete() {
    toggleComplete(index); // Toggle completion status
  }

  return (
    <div className={`w-[600px] h-[70px] rounded-lg flex justify-around px-5 ${taskDetails.completed ? 'bg-green-300' : 'bg-amber-200'}`}>
      <div className="w-[60%] h-full flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-400 px-2 py-1 rounded-md"
          />
        ) : (
          <h2 className={`${taskDetails.completed ? 'line-through text-gray-600' : ''}`}>{taskDetails.text}</h2>
        )}
      </div>

      <div className="w-[40%] h-full flex justify-center items-center gap-4">
        <button
          className="completeBtn w-[40px] h-[40px] bg-green-500 flex justify-center items-center rounded-full"
          onClick={handleComplete}
        >
          <FaCheckCircle className="text-white" />
        </button>

        {isEditing ? (
          <button
            className="saveBtn w-[80px] h-[40px] bg-green-400 flex justify-center items-center rounded-2xl"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="editBtn w-[80px] h-[40px] bg-slate-200 flex justify-center items-center rounded-2xl"
            onClick={handleEdit}
          >
            <CiEdit />
          </button>
        )}

        <button
          className="deleteBtn w-[80px] h-[40px] bg-red-400 flex justify-center items-center rounded-2xl"
          onClick={handleDelete}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
