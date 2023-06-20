import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Context
import { AuthContext } from "../context/authContext.jsx";

//Imagenes
import porksgrill from "/porksGrillLogo.png";

//Componentes
import SnackbarMUI from "../components/SnackbarMUI.jsx";

//CSS
import "../css/SignUp.css";

const SignUp = () => {
  const [errMessage, setErrMessage] = useState(false);
  const navigate = useNavigate();

  //Context
  const { login, logout, userToken } = useContext(AuthContext);

  useEffect(() => {
    if (userToken) return navigate("/menu");
  }, [userToken]);

  const formSignUp = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, email, password } = Object.fromEntries(formData);

    if (!name && !email && !password)
      return setErrMessage("Ingrese su nombre, email y contraseña");

    if (!email && !password)
      return setErrMessage("Ingrese un email y contraseña");

    if (!name && !password)
      return setErrMessage("Ingrese su nombre y contraseña");

    if (!name && !email) return setErrMessage("Ingrese su nombre y un email");

    if (!email) return setErrMessage("Ingrese un email");

    if (!password) return setErrMessage("Ingrese una contraseña");

    if (!name) return setErrMessage("El nombre es requerido");

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
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

      navigate("/menu");
    } catch (err) {
      setErrMessage(err);
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
            <h2>Nombre</h2>
            <input type="text" name="name" />
            <h2>Email</h2>
            <input type="email" name="email" />
            <h2>Contraseña</h2>
            <input type="password" name="password" />
            <span style={{ textAlign: "center" }}>
              Ya esta registrado? <Link to="/signin">Inicia Sesion</Link>
            </span>
            <input type="submit" value="Registrarse" />
          </form>
        </div>

        {errMessage && (
          <SnackbarMUI errMessage={errMessage} setErrMessage={setErrMessage} />
        )}

        {/* <div className="welcome">
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
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
