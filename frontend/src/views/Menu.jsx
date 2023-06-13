import { useEffect, useState } from "react";
import porksGrillLogo from "../../public/porksGrillLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faListUl,
  faClock,
  faFileInvoice,
  faGear,
  faMagnifyingGlass,
  faUtensils,
  faCartShopping,
  faL,
  faXmark,
  faSlash,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

//Componentes
import FoodVariantsDescription from "../components/Menu/FoodVariantsDescription";
import FoodDescription from "../components/Menu/FoodDescription";
import Category from "../components/Menu/Category";
import Options from "../components/Menu/Options";
import Orders from "../components/Orders";
import Destacados from "../components/Destacados";
import SideBar from "../components/SideBar";

//Libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/menu.css";
import { useNavigate } from "react-router-dom";

function App({isAdmin}) {
  const [allMenu, setAllMenu] = useState("");
  const [originalMenu, setOriginalMenu] = useState([]);
  const [originalVariantsMenu, setOriginalVariantsMenu] = useState([]);
  const [categories, setCategories] = useState("");
  const [orders, setOrder] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [whereEat, setWhereEat] = useState(false);
  const [styleCategory, setStyleCategory] = useState(1);
  const [variantMenu, setVariantMenu] = useState([]);

  const [allVariants, setAllVariants] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const showMenu = async () => {
      try {
        const response = await fetch("http://localhost:3000", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { menu, categories, variantMenu, err } = await response.json();

        if (err) {
          console.log(err);
          localStorage.removeItem("token");
          localStorage.removeItem("userName");
          navigate("/signin");
        }

        setAllMenu(menu); // Todo el menu
        setCategories(categories); //Categorias
        setOriginalMenu(menu); // Mismo menu, pero para funcionalidades
        setVariantMenu(variantMenu); //Menu con variantes
        setOriginalVariantsMenu(variantMenu); //Mismo menu con variantes, pero para funcionalidades
      } catch (err) {
        console.log(err);
      }
    };
    showMenu();
  }, []);

  // useEffect(() => {
  //   console.log(allMenu);
  // }, [allMenu]);

  const handleFilterSearch = (input) => {
    if (input.length === 0) setStyleCategory(1);
    const filteredFood = originalMenu.filter((food) =>
      food.name.toLowerCase().includes(input)
    );
    return setAllMenu(filteredFood);
  };

  const handleWhereEat = (id) => {
    setWhereEat(id);
    setWhereEat((prevSelected) => (prevSelected == id ? id : 0));
  };

  const groupedMenu = (menu) => {
    //Crea un objeto cuya clave es el nombre del plato y el valor los valores acumulados del mismo nombre del plato
    const reduce = menu.reduce((acc, curr) => {
      if (!acc[curr.name]) {
        //Si no existe el nombre del plato dentro del objeto, lo crea
        acc[curr.name] = {
          //El objeto va a ser igual a "Nombre del plato" : { ...resto de la informacion, valores acumulados }
          ...curr,
          price: [curr.price],
          id: [curr.id],
          variantOrQuanty: [curr.variantOrQuanty],
        };
      } else {
        //Si ya existe el nombre, en el objeto, se agregan los valores name, id y variantOrQuanty dentro de un array
        acc[curr.name].price.push(curr.price);
        acc[curr.name].id.push(curr.id);
        acc[curr.name].variantOrQuanty.push(curr.variantOrQuanty);
      }
      return acc;
    }, {});
    return reduce;
  };

  useEffect(() => {
    if (styleCategory === 1) setAllMenu(originalMenu);
  }, [styleCategory]);

  const showCartClick = () => {
    setShowCart((prevSelected) => (prevSelected ? false : true));
  };

  const showCategory = (id) => {
    if (id === 1) {
      setStyleCategory(1);
      setAllMenu(originalMenu);
      setVariantMenu(originalVariantsMenu);
    }

    setStyleCategory((prevSelected) => (prevSelected === id ? 1 : id));
    const categorizedMenu = originalMenu.filter(
      (menu) => menu.id_category === id
    );
    const categorizedVariantMenu = originalVariantsMenu.filter(
      (menu) => menu.id_category === id
    );
    setAllMenu(categorizedMenu);
    setVariantMenu(categorizedVariantMenu);
  };

  const CustomNextArrow = ({ onClick }) => (
    <button className="menuNextArrow" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button className="menuLeftArrow" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );

  const sliderSettings = {
    infinite: true,
    slidesToShow: 6,
    arrows: true,
    nextArrow: <CustomNextArrow />, // Componente personalizado para el botón "Next"
    prevArrow: <CustomPrevArrow />,
  };

  const sliderTrendingSettings = {
    className: "sliderMenu",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2900,
    slidesToShow: 2,
    arrows: true,
    nextArrow: <CustomNextArrow />, // Componente personalizado para el botón "Next"
    prevArrow: <CustomPrevArrow />,
  };

  const setingsAbout = {
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 2900,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    nextArrow: <CustomNextArrow />, // Componente personalizado para el botón "Next"
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <section className="sectionMenu">
        <div className="footerNav">
          <SideBar whereIm={"menu"} />
        </div>

        <div className="menuContainer">
          <div className="searchProducts">
            <div className="search-container">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                type="text"
                placeholder="Search menu"
                onChange={(event) => handleFilterSearch(event.target.value)}
              />
            </div>

            <div className="personalData">
              <h2>
                Cesar <br /> Rodriguez
              </h2>

              <div className="circle">
                <img src={porksGrillLogo} alt="Imagen aleatoria" />
              </div>

              <div onClick={showCartClick} className="iconCartContainer">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ fontSize: "25px" }}
                />
                {Object.keys(orders).length > 0 && (
                  <span className="cart-count">
                    {Object.keys(orders).length}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div style={{ overflowY: "scroll", height: "90%" }}>
            <h1 style={{ margin: "20px", fontSize: "30px" }}>
              Bienvenido, {localStorage.getItem("userName")}{" "}
            </h1>
            <h1
              style={{ textAlign: "center", margin: "20px", fontSize: "30px" }}
            >
              Novedades
            </h1>

            <Slider {...sliderTrendingSettings}>
              <img src="../../public/BannerMenu.jpg" alt="" />
              <img src="../../public/BannerMenu.jpg" alt="" />
            </Slider>

            <div className="sliderContainerMenu">
              <h1
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "35px",
                }}
              >
                Platos Destacados
              </h1>
              <Slider {...settings}>
                <Destacados
                  title="Killers Mixta"
                  price="8.5"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                  img="KillersMixta"
                  className="sliderDataMenu"
                />
                <Destacados
                  title="Roll Tradicional"
                  price="7"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                  img="RollTradicional"
                  className="sliderDataMenu"
                />
                <Destacados
                  title="Pulled Pork"
                  price="7.2"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                  img="PulledPork"
                  className="sliderDataMenu"
                />
                <Destacados
                  title="Killer Crispy"
                  price="6.8"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                  img="KillerCrispy"
                  className="sliderDataMenu"
                />
              </Slider>
            </div>

            <h1 className="categoriesTitle">Categorias</h1>

            <nav className="categoriesContainer">
              <ul style={{ width: "90%", margin: "10px auto" }}>
                <Slider {...sliderSettings}>
                  {categories &&
                    categories.map(({ category, id }, index) => {
                      return (
                        <Category
                          key={index}
                          icon={faUtensils}
                          title={category}
                          id={id}
                          showCategory={showCategory}
                          styleCategory={styleCategory}
                          setStyleCategory={setStyleCategory}
                        />
                      );
                    })}
                </Slider>
              </ul>
            </nav>

            {/* Cambia las columnas a 2 si existen ordenes, sino ocupa 3 columnas */}
            <div
              className={
                showCart
                  ? "foodDescriptionContainerOrdersActive"
                  : "foodDescriptionContainer"
              }
            >
              {allMenu &&
                Object.values(groupedMenu(allMenu)).map(
                  (
                    {
                      name,
                      description,
                      id,
                      image,
                      price,
                      variantOrQuanty,
                      ingredientes,
                      extras,
                      extras_price,
                    },
                    index
                  ) => (
                    <FoodDescription
                      key={index}
                      title={name}
                      description={description}
                      id={id}
                      img={`../public/img/${image}`}
                      isAvailable={true}
                      price={price}
                      menu={allMenu}
                      setOrder={setOrder}
                      ingredientes={ingredientes}
                      extras={extras}
                      extras_price={extras_price}
                      allVariants={allVariants}
                      setAllVariants={setAllVariants}
                    />
                  )
                )}
              {variantMenu &&
                Object.values(groupedMenu(variantMenu)).map(
                  (
                    {
                      id,
                      name,
                      variantOrQuanty,
                      description,
                      price,
                      image,
                      id_category,
                    },
                    index
                  ) => (
                    <FoodVariantsDescription
                      key={index}
                      title={name}
                      id={id}
                      description={description}
                      isAvailable={true}
                      price={price}
                      variantOrQuanty={variantOrQuanty}
                      img={`../public/img/${image}`}
                      menu={variantMenu}
                      setOrder={setOrder}
                    />
                  )
                )}
            </div>
          </div>
        </div>

        {/* Si existen ordenes, muestra el carrito, sino, lo oculta */}
        <div className={showCart ? "cartContainer" : "cartContainerOculted"}>
          <div>
            <div className="titleCart">
              <h1>Carrito</h1>
              <span>Order #1321</span>
              <div className="buttonCloseCart" onClick={showCartClick}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>

            <div className="whereEat">
              <button
                className={whereEat == 1 ? "whereEatSelected" : ""}
                onClick={() => handleWhereEat(1)}
              >
                Delivery
              </button>
              <button
                className={whereEat == 2 ? "whereEatSelected" : ""}
                onClick={() => handleWhereEat(2)}
              >
                Pick Up
              </button>
              <button
                className={whereEat == 3 ? "whereEatSelected" : ""}
                onClick={() => handleWhereEat(3)}
              >
                Eat in Restaurant
              </button>
            </div>
          </div>

          <div className="ordersContainer">
            {Object.keys(orders).length > 0 ? (
              Object.values(orders).map(
                (
                  { name, price, image, quanty, variantOrQuanty, id },
                  index
                ) => {
                  return (
                    <Orders
                      key={index}
                      name={name}
                      price={price}
                      image={`../public/img/${image}`}
                      id={id}
                      quantyOrder={quanty}
                      variantOrQuanty={variantOrQuanty}
                      setOrders={setOrder}
                      orders={orders}
                      menu={allMenu}
                      allVariants={allVariants}
                      setAllVariants={setAllVariants}
                    />
                  );
                }
              )
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <h1 style={{ margin: "auto" }}>No hay ordenes</h1>
              </div>
            )}
          </div>

          <div className="totalContainer">
            <div className="items">
              <h2>Items</h2>
              <span>{Object.keys(orders).length}</span>
            </div>

            <div className="border" />

            <div className="total">
              <h2>Total</h2>

              <span>
                {orders &&
                  (() => {
                    const totalPrice = Object.values(orders).reduce(
                      (accumulator, { price, quanty }) => {
                        return accumulator + price * quanty;
                      },
                      0
                    );

                    return <span>{totalPrice.toFixed(1)}</span>;
                  })()}
              </span>
            </div>

            <div className="CompleteOrderButton">
              <button>Proceder a Pagar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
