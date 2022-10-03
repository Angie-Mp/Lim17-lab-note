import {useState} from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../firebase/connection.js'
import React from 'react';
import Modal from 'react-modal';
import "./StyleModal.css"

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {
  let subtitle;
  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  // fguaeda en firestore 
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'notas', id)
    try{
      await updateDoc(taskDocRef, {
        title: title,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }
  
  return (
    <div>
    <Modal isOpen={open} onRequestClose={onClose} className="modalStyle">
       <form onSubmit={handleUpdate} className='containerModal'>
        <input className="inputTitleStyleModal" type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
        <br/>
        <textarea className="descriptionStyleModal" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <br/>
        <button className="buttonEditStyleModal" type='submit'>Guardar Cambios</button>
      </form> 
    </Modal>
  </div>
);
}
export default EditTask