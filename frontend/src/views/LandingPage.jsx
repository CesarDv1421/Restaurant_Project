import React from "react";
import "../css/LandingPage.css";

//Images
import leftOrnamet from "../../public/leftOrnament.jpg";
import rightOrnamet from "../../public/rightOrnament.jpg";
import ubicationPorksGrill from "../../public/ubicationPorksGrill.jpg";
import PostRollCachapa from "../../public/PostRollCachapa.jpg";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//Componentes
import Destacados from "../components/Destacados";
import NavBar from "../components/NavBar";

//Libraries
import Slider from "react-slick";
import MapBox from "../components/MapBox"; //API
import { Link } from "react-router-dom";

const LandingPage = () => {
  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-next-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );

  const settings = {
    autoplay: true,
    autoplaySpeed: 2900,
    infinite: true,
    slidesToShow: 3,
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

  return (
    <>
      <header className="headerLandingPage">
        <NavBar className="navContainer" navUl="navUl" />

        <div className="containerBanner">
          <img
            className="banner"
            src="../public/Banner-01-01-01.png"
            width="100%"
            height="715px"
            alt=""
          />
          <div className="headerFocus">
            <div className="textFocus">
              <h1>
                Saborea momentos inolvidables en PORK'S GRILL, tu destino
                gastronómico por excelencia
              </h1>
              <div>
                <button className="buttonFocus">Ordenar</button>
              </div>
            </div>
            <div className="imageFocus">
              <img
                src="../public/img/ChickenGrainCrispy.jpg"
                width="300px"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="AboutUsContainer">
          <div>
            <Slider {...setingsAbout}>
              <img src="../../public/PorksGrill2_1.jpg" alt="" />
              <img src="../../public/PorksGrill2_2.jpg" alt="" />
              <img src="../../public/PorksGrill2_3.jpg" alt="" />
              <img src="../../public/PorksGrill2_4.jpg" alt="" />
              <img src="../../public/PorksGrill2_5.jpg" alt="" />
              <img src="../../public/PorksGrill2_6.jpg" alt="" />
            </Slider>
          </div>
          <div className="AboutUs">
            <h1>Sobre Nosotros</h1>
            <p>
              Bienvenidos a Porks Grill, lugar donde encontrarás lo mejor de la
              gastronomía en un ambiente único. En nuestro acogedor local, te
              deleitarás con una combinación perfecta de un agradable entorno,
              buena música y un lugar encantador.
            </p>

            <p>
              Pero eso no es todo, nuestra verdadera joya se encuentra en
              nuestros platos. Nuestra cocina es reconocida por ofrecer una
              excelente comida, preparada con pasión y dedicación por nuestros
              talentosos chefs. Cada plato es una obra maestra culinaria,
              cuidadosamente elaborada para satisfacer los paladares más
              exigentes.
            </p>
            <p>
              Y no podemos olvidar mencionar nuestro equipo de atención al
              cliente, siempre dispuesto a brindarte una experiencia
              inolvidable. Nuestro personal amable y profesional te hará sentir
              como en casa desde el momento en que pises nuestro restaurante.
            </p>
            <p>
              En resumen, en Porks Grill encontrarás un lugar hermoso, música
              envolvente, una atención de calidad, y sobre todo, una comida
              excepcional. Te invitamos a visitarnos y disfrutar de una
              experiencia gastronómica única que te cautivará.
            </p>
            <button>Learn More ...</button>
          </div>
        </div>

        <div className="trendingDishes">
          <div className="titleTrending">
            <img src={leftOrnamet} alt="" />
            <h1>Platos Destacados</h1>
            <img src={rightOrnamet} alt="" />
          </div>
          <div className="sliderContainer">
            <Slider {...settings}>
              <Destacados
                title="Killers Mixta"
                price="8.5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                img="KillersMixta"
                className={"dataCarousel"}
              />
              <Destacados
                title="Roll Tradicional"
                price="7"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                img="RollTradicional"
                className={"dataCarousel"}
              />
              <Destacados
                title="Pulled Pork"
                price="7.2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                img="PulledPork"
                className={"dataCarousel"}
              />
              <Destacados
                title="Killer Crispy"
                price="6.8"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  fugit!"
                img="KillerCrispy"
                className={"dataCarousel"}
              />
            </Slider>
          </div>
        </div>

        <div>
          <div className="titleTrending" style={{ margin: "120px 0" }}>
            <img src={leftOrnamet} alt="" />
            <h1>Nuestras Sedes</h1>
            <img src={rightOrnamet} alt="" />
          </div>
          <div className="containerUbication">
            <div>
              <img src={ubicationPorksGrill} width="150px" alt="" />
              <div>
                <h1>Calle #1, La Soledad</h1>
                <h2>(Desde las 11:30am hasta las 10:00pm)</h2>
              </div>
            </div>
            <div>
              <MapBox longitud={-67.592634} latitud={10.258787} />
            </div>
          </div>
          <div className="containerUbication">
            <div>
              <MapBox longitud={-67.587437} latitud={10.226609} />
            </div>
            <div>
              <img src={ubicationPorksGrill} width="150px" alt="" />
              <div>
                <h1>Av. Intersan (Calle del Colesterol)</h1>
                <h2>(Desde las 11:30am hasta las 5:00pm)</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rollCachapaTitle">
            <h1>Pioneros en la Creación e Innovación del ...</h1>
            <div className="titleTrending">
              <img src={leftOrnamet} alt="" />
              <h1>Roll de Cachapa</h1>
              <img src={rightOrnamet} alt="" />
            </div>
          </div>
          <div className="RollCachapa">
            <div className="descriptionRoll">
              <h1>En nuestra apasionante aventura gastronómica ...</h1>
              <br />
              <p>
                Hemos dado un giro audaz a la tradicional cachapa venezolana
                (literalmente). Somos los visionarios que han creado el
                increíble y único roll de cachapa, una fusión magistral de
                sabores y texturas que te sorprenderá.
              </p>
              <br />
              <p>
                Imagina una deliciosa cachapa, tierna y dorada, rellena con una
                exquisita combinación de ingredientes frescos y sabrosos. Cada
                bocado es una explosión de autenticidad y creatividad culinaria.
              </p>
              <br />
              <p>
                Nuestro equipo de chefs expertos ha trabajado incansablemente
                para perfeccionar esta innovadora creación, logrando un
                equilibrio perfecto entre lo tradicional y lo vanguardista. Cada
                rollo de cachapa es una obra maestra que te transportará a
                nuevas dimensiones gastronómicas.
              </p>
              <br />
              <p>
                Ven y experimenta el sabor revolucionario de nuestra creación.
                En Porks Grill, te sumergirás en un ambiente acogedor y moderno,
                mientras disfrutas de la frescura y la autenticidad de nuestra
                comida. Permítenos llevar tu paladar a un viaje culinario
                inigualable.
              </p>
              <br />
              <p>
                No pierdas la oportunidad de probar las diferentes variantes del
                roll de cachapa que ha conquistado a los amantes de la
                gastronomía. Únete a nosotros y sé parte de esta revolución
                culinaria. ¡Te garantizamos una experiencia gastronómica única e
                inolvidable!
              </p>
              <br />
              <h2>¡Bienvenido al lugar donde nació el rollo de cachapa!</h2>
              <Link to="/rollcachapa">Leer mas sobre el Roll de Cachapa</Link>
            </div>
            <div>
              <img
                src={PostRollCachapa}
                width="70%"
                style={{ borderRadius: "20px" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="metodosDePagoContainer">
          <div className="titleTrending">
            <img src={leftOrnamet} alt="" />
            <h1>Multiples Metodos de Pago</h1>
            <img src={rightOrnamet} alt="" />
          </div>
          <div className="metodosDePago">
            <img src="../../public/cash.png" width="200px" alt="" />
            <img src="../../public/BinanceLogo.png" width="200px" alt="" />
            <img src="../../public/pagoMovilLogo.png" width="200px" alt="" />
            <img src="../../public/zelleLogo.png" width="200px" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
