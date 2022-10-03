import { db } from "../../../../../firebase/connection.js";
import { collection,query, orderBy, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from "react";
import Task from "../Edit/Edit.js";
import "./Style.css"

const Read = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const taskDocRef = query(collection(db, 'notas'), orderBy('created', 'desc'))
    onSnapshot(taskDocRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return(
    <div className="containerStyle">
      <div className="containerNotes">
        {tasks.map((task) => (
           <Task
           key = {task.id}
           id = {task.id}
           title = {task.data.title}
           description = {task.data.description}
          />
        ))}
      </div>
    </div>
  )
}
export default Read