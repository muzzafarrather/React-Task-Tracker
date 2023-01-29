import React from "react"
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//main app code for task tracker
function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learning React',
      day: '28th Jan at 2:30PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Cleaning the apartment',
      day: '29th Jan at 10:00PM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Cook food',
      day: '28th Jan at 12:30PM',
      reminder: true,
    }
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? {
        ...task, reminder: !task.reminder
      } : task))
  }

  return (
    <div className="container">

      <Header 
      onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder}
      />)
        : ('No Tasks to Show')
      }
    </div>

  )
}

export default App;
