import React from "react";
import NavBar from "../../components/NavBar.jsx";
import "../Signin/Signin.css";

import FacebookLogin from "react-facebook-login";
import porksgrill from "../../../public/porksGrillLogo.png";

import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  let responseFacebook;

  try {
    responseFacebook = (response) => {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("userName", response.name);
    };
  } catch (error) {
    console.log(error);
  }

  const formSignIn = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const { token, userName, err } = await response.json();

      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);

      if (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        return console.log(err);
      }

      navigate("/menu");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <NavBar className="navContainer" navUl="navUl" /> */}

      <div className="signinContainer">
        <div className="welcome">


        <h1>¡Bienvenido de vuelta a Porks Grill!</h1>
          <p>
            Nos complace verte de nuevo y agradecemos sinceramente que hayas
            elegido regresar a nuestra página. Valoramos tu preferencia y nos
            enorgullece contar con tu apoyo. En Porks Grill, nuestro
            objetivo es brindarte una experiencia culinaria excepcional en cada
            visita.
          </p>
          <p>
            ¡Gracias por confiar en nosotros una vez más! Estamos aquí para
            asegurarnos de que disfrutes de nuestros deliciosos platos y nuestro
            cálido ambiente. No dudes en explorar nuestro menú y descubrir
            nuevas delicias que te sorprenderán y deleitarán.
          </p>
          <p>
            Nuestro equipo está listo para atenderte con la misma pasión y
            dedicación de siempre. ¡Disfruta de tu estancia en Porks Grill y
            déjanos consentirte con nuestro sabor único!
          </p>
          <h1>Gracias por volver a preferirnos</h1>


          
        </div>

        <div>
          <form className="signin" onSubmit={formSignIn}>
            <img src={porksgrill} alt="" />
            <h1>Iniciar Sesion</h1>
            <div className="sesionAPIsContainer">
              <div className="sesionAPIs">
                <FacebookLogin
                  appId="815521926257723"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="facebook-login-button"
                  icon={<FaFacebook />}
                  textButton=""
                />
                <FacebookLogin
                  appId="815521926257723"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="facebook-login-button"
                  icon={<FaFacebook />}
                  textButton=""
                />
                <FacebookLogin
                  appId="815521926257723"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="facebook-login-button"
                  icon={<FaFacebook />}
                  textButton=""
                />
              </div>
              <span>O use su email</span>
            </div>
            <h2>Email</h2>
            <input type="text" name="email" />
            <h2>Contraseña</h2>
            <input type="password" name="password" />
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <Link to="/signup">No tengo cuenta, Resgistrarme</Link>
              <Link>Olvide la Contraseña </Link>
            </div>
            <input type="submit" value="Iniciar Sesion" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
