import React from "react";
import NavBar from "../../components/NavBar.jsx";
import "./SignUp.css";

import FacebookLogin from "react-facebook-login";
import porksgrill from "../../../public/porksGrillLogo.png";

import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    localStorage.setItem("token", response.accessToken);
    localStorage.setItem("userName", response.name);
  };

  const formSignUp = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, email, password } = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
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
        <div>
          <form className="signin" onSubmit={formSignUp}>
            <img src={porksgrill} alt="" />
            <h1>Registrate</h1>
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
            <h2>Nombre</h2>
            <input type="text" name="name" />
            <h2>Email</h2>
            <input type="text" name="email" />
            <h2>Contraseña</h2>
            <input type="password" name="password" />
            <span style={{ textAlign: "center" }}>
              {" "}
              Ya esta registrado?<Link to="/signin">Inicia Sesion</Link>
            </span>
            <input type="submit" value="Registrarse" />
          </form>
        </div>

        <div className="welcome">
          <h1>¡Bienvenido/a a Porks Grill!</h1>
          <p>
            Nos complace recibirte en nuestro restaurante, donde la pasión por
            la buena comida y la hospitalidad se unen desde 1989. Queremos que
            te sientas como en casa y disfrutes de una experiencia gastronómica
            inolvidable.
          </p>
          <p>
            Nuestro equipo de chefs talentosos se esfuerza por crear platos
            deliciosos y sabrosos que satisfarán tus antojos y despertarán tus
            papilas gustativas. Desde nuestras jugosas costillas de cerdo hasta
            nuestras jugosas hamburguesas, cada bocado está lleno de sabor y
            amor.
          </p>
          <p>
            Además de nuestra comida excepcional, también nos enorgullece
            ofrecer un servicio excepcional. Nuestro personal amable y atento
            está aquí para asegurarse de que tu visita sea especial y que todas
            tus necesidades sean atendidas.
          </p>
          <p>
            Explora nuestro menú y descubre una amplia selección de opciones
            tentadoras. Ya sea que prefieras platos clásicos o aventurarte con
            creaciones innovadoras, tenemos algo para todos los gustos.
          </p>
          <p>
            Acompaña tu comida con una selección de bebidas refrescantes, desde
            cócteles artesanales hasta vinos finos. Y no te olvides de dejarte
            tentar por nuestros irresistibles postres caseros.
          </p>
          <h1>¡Buen provecho!</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
