import {useState} from 'react'
import EditTask from './ModalEdit.js'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../../../../../firebase/connection.js'
import "./StyleEdit.css"
function Task({id, title, description, completed, toEditTitle,toEditDescription}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  // funcion de eliminae 
  const handleDelete = async () => {
    const taskDocRef = doc(db, 'notas', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
    <div className= "containerEdit" >
      <div className='subContainerEdit'>
       <h2 className='styleTitle'>{title}</h2>
       <div className='vline'></div>
        <p className='styleDescription'>{description}</p>  
          <button 
              className='button' 
              onClick={() => setOpen({...open, edit : true})}>
              Editar
            </button>
            <button className='button' onClick={handleDelete}>Delete</button>
        <br/>
      </div>
      {open.edit &&
      <EditTask 
        onClose={handleClose} 
        toEditTitle={title} 
        toEditDescription={description} 
        open={open.edit}
        id={id} />
      }
    </div>
  <br/>
</div>
  )
}
export default Task