import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Task from "./Task";
import CreateNewTask from "./CreateNewTask";


function App() {

    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then(response => {
                console.log(response)
                console.log(response.data)
                setTasks(response.data)
            })
            .catch(error => {
                console.log(error)
                alert("Something went wrong, try again later")
            })
    }

    useEffect(() => {
        getTasks()
    }, [])

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res => getTasks())
            .catch(err => alert("Something went wrong, try again later"))
    }


    const createTask = (name) => {
        const newTask = {
            name: name,
            description: "some description",
            status: "1",
            priority: "todo",
        };
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => getTasks())
            .catch(err => alert("Something went wrong, try again later"))
    }

    const editTask = (id, newName) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {name: newName})
            .then(res => getTasks())
            .catch(err => alert("Something went wrong, try again later"))
    }



    return (
        <div className="App">
            <h1>ToDo List</h1>
            <CreateNewTask createTask={createTask} />
            <hr/>
            {tasks.map(task =>
                <Task
                    key={task._id}
                    task={task}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            )}
        </div>
    );
}

export default App;
