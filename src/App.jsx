import "./App.css"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
function App() {

  return (
    <div className="flex flex-col items-center mt-35">
      <Header/>
      <ToDoList/>
    </div>
  )
}

export default App
