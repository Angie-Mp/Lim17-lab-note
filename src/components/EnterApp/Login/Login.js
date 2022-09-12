import { React,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/connection.js";
import arcoIris from "../../Assets/arcoIris.png"
import "./Style.css"


const Login =() => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (!email || !password ) {
      setErrorMesage("Campos vacios");
      return;
    }
    setErrorMesage("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMesage("Ingrese datos correctos");
      });
  };

  return (
    <div>
      <div className="ContainerView">
        <img className="ContainerImage" src={arcoIris} ></img>
        <h1 className="StyleTitle">Lab Notes</h1>

        <div>
        <h3 className="StyleText">Correo</h3>
        <input className="StyleInput"
          label="Email"
          onChange={(event) =>
            setEmail(event.target.value)
          }/>

         <h3 className="StyleText">Contraseña</h3>
        <input className="StyleInputPassword"
          type={passwordShown ? "text" : "password"}
          label="Password"
          onChange={(event) =>
            setPassword(event.target.value)
          } />
          <button className="StyleButtonPassword" onClick={hideShowPassword}>
            {passwordShown ? 'Ocultar':'Mostrar'} 
          </button>
        </div>

        <div>
          <p className="StyleErrorMesage">{errorMesage}</p>
          <button className="StyleButton" disabled={submitButtonDisabled} onClick={handleSubmission}>
            Iniciar Secion
          </button>
          <br/>
           <p className="StyleRegister">
            No tienes cuenta?  
            <Link to="/register" className="StyleRegister">Registrarse</Link>
           </p>
        </div>
      </div>
    </div>
  );
}
export default Login;