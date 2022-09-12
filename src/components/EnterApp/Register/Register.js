import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../../firebase/connection.js"
import { auth } from "../../../firebase/connection.js";
import arcoIris from "../../Assets/arcoIris.png"

import "./Style.css"

const Register = () => {

  const navigate = useNavigate();
  const usersCollectionRef = collection(db,"usuarios");
  const [name, setName] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, SetPassword] = useState([""]);
  const [errorMesage, setErrorMesage] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  //mostrar y ocultar contraseña
  const [passwordShown, setPasswordShown] = useState(false);
  //funcion del boton ocultar y mostrar
  const hideShowPassword = () => {
    setPasswordShown(!passwordShown);
  };
  //

  const handleSubmission = () => {
    if (!name || !email || !password) {
      setErrorMesage("Ingrese datos ");
      return;
    }
    setErrorMesage("");
  
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        ///////
        try {
          const register = addDoc(usersCollectionRef, {
            name: name,
            email: email,
          });
          console.log(register);
          
        } catch (e) {
          console.error('Error, no se pudo registrar ', e);
        }

       setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMesage("Ingrese datos validos");
      });
  };

  return (
    <div>
      <div className="ContainerRegisterView">
      <img className="ContainerRegisterImage" src={arcoIris} ></img>
      <h1 className="StyleRegisterTitle">Registrarse</h1>

      <div>
        <h3 className="StyleRegisterText">Ingresar Nombre</h3>
        <input className="StyleRegisterInput"
          label="Name"
          onChange={(event) =>
            setName(event.target.value)}
        />

        <h3 className="StyleRegisterText">Ingresar Correo</h3>
        <input className="StyleRegisterInput"
          label="Email"
          onChange={(event) =>
            setEmail(event.target.value)}
        />

        <h3 className="StyleRegisterText">Ingresar Contraseña</h3>
        <input className="StyleRegisterInputPassword"
          type={passwordShown ? "text" : "password"}
          label="Password"
          onChange={(event) =>
            SetPassword(event.target.value)}
        />
         <button className="StyleButtonPassword" onClick={hideShowPassword}>
            {passwordShown ? 'Ocultar':'Mostrar'} 
          </button>

      </div>

      <div>
        <p className="StyleRegisterErrorMesage">{errorMesage}</p>
          <button className="StyleRegisterButton" disabled={submitButtonDisabled} onClick={handleSubmission}>
            Registrar
          </button>
          <br/>
           <p className="StyleLogin">
            <Link to="/" className="StyleLogin">Iniciar Secion</Link>
           </p>
      </div>
      </div>
    </div>
  );
}

export default Register;




/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


//import InputControl from "../InputControl/InputControl";
import { auth } from "../../../firebase/connection.js";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div >
      <div >
        <h1 >registrate</h1>

        <input
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <input
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <input
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div >
          <b>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/home">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
*/