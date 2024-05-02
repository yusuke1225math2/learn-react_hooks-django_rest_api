import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/', {
      headers: {
        'Authorization': 'Token c81294dab449be516d68dba5b9405625b4430afa'
      }
    })
    .then(res => {setTasks(res.data)})
  }, [])

  const getTask = () => {
    axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      headers: {
        'Authorization': 'Token c81294dab449be516d68dba5b9405625b4430afa'
      }
    })
    .then(res => {setSelectedTask(res.data)})
  }

  const deleteTask = () => {
    axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      headers: {
        'Authorization': 'Token c81294dab449be516d68dba5b9405625b4430afa'
      }
    })
    .then(res => console.log(res))
  }


  return (
    <div>
      <ul>
        {
          tasks.map(task => <li key={task.id}>{task.title}    {task.id}</li>)
        }
      </ul>

      Set id <br />
      <input type='text' value={id} onChange={evt=>setId(evt.target.value)}/>
      <br/>
      <button type='button' onClick={()=>getTask()}>Get task</button>
      <button type='button' onClick={()=>deleteTask()}>Delete</button>
      <h3>{selectedTask.title}    {selectedTask.id}</h3>
    </div>
  )
}

export default DrfApiFetch
