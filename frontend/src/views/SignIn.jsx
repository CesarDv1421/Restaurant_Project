import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//imagenes
import porksgrill from "/porksGrillLogo.png";

//Componentes
import { AuthContext } from "../context/authContext";
import SnackbarMUI from "../components/SnackbarMUI.jsx";

//CSS
import "../css/Signin.css";

const SignIn = () => {
  const [errMessage, setErrMessage] = useState("");

  const { login, logout, userToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) return navigate("/menu");
  }, [userToken]);

  const formSignIn = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    if (!email && !password)
      return setErrMessage("Ingrese un email y contraseña");

    if (!email) return setErrMessage("Ingrese un email");

    if (!password) return setErrMessage("Ingrese una contraseña");

    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const { token, userName, rol, err } = await response.json();

      if (err) {
        logout();
        setErrMessage(err);
        return console.log(err);
      }
      if (response.status === 201) {
        login({ token, userName, rol });
        navigate("/menu");
      }
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div>
      {/* <NavBar className="navContainer" navUl="navUl" /> */}

      <div className="signinContainer">
        {/* <div className="welcome">
          <h1>¡Bienvenido de vuelta a Porks Grill!</h1>
          <p>
            Nos complace verte de nuevo y agradecemos sinceramente que hayas
            elegido regresar a nuestra página. Valoramos tu preferencia y nos
            enorgullece contar con tu apoyo. En Porks Grill, nuestro objetivo es
            brindarte una experiencia culinaria excepcional en cada visita.
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
        </div> */}

        <div>
          <form className="signin" onSubmit={formSignIn}>
            <img src={porksgrill} alt="" />
            <h1>Iniciar Sesion</h1>
            <h2>Email</h2>
            <input type="email" name="email" />
            <h2>Contraseña</h2>
            <input type="password" name="password" />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link to="/signup">No tengo cuenta, Resgistrarme</Link>
              <Link>Olvide la Contraseña </Link>
            </div>

            {errMessage && (
              <SnackbarMUI
                errMessage={errMessage}
                setErrMessage={setErrMessage}
              />
            )}

            <input type="submit" value="Iniciar Sesion" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
