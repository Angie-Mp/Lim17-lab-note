import { db } from "../../../../../firebase/connection.js";
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from "react";
import Read from "../Read/Read.js";
import createImg from "../../../../Assets/createImg.png"
import "./Style.css";

const Create =() => {
  const usersCollectionRef = collection(db, "notas");
  const [title, setTitle] = useState([""])
  const [description, setDescription] = useState([""])

  //guardar nota
  const saveNote = (event) =>{
    event.preventDefault()
    addDoc(usersCollectionRef,{
      title:title, description:description, created:Timestamp.now()
    })
    //que se limpien los campos al guardar nota
    setTitle("");
    setDescription("");
  }
  
  return (
    <div className='containerStyle'>
      <form onSubmit={saveNote} className='containerFormStyle'>
        <input
          className="inputTitleStyle"
          type='text'
          value={title}
          placeholder=' Titulo'
          onChange={(event) => setTitle(event.target.value.toUpperCase())}   
        />
        <br/>
        <textarea 
          className="contentsStyle"
          value={description}
          placeholder=' Descripcion de la Nota'
          onChange={(event) => setDescription(event.target.value)}>
        </textarea>
        <br/>
        <button className="buttonSaveStyle" type='submit'>Guardar</button>
        <img className="imgStyle" src={createImg}></img>
     
        <div className="v-line">
        </div>
      </form> 
   
      <div className="containerReadStyle">
        <Read/>
      </div>
    </div>
  )
}
export default Create;