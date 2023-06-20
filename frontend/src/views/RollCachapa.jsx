//imagenes
import PostRollCachapa from "/PostRollCachapa.jpg";
import leftOrnamet from "/leftOrnament.jpg";
import rightOrnamet from "/rightOrnament.jpg";

//Componentes
import NavBar from "../components/NavBar";
import Destacados from "../components/Destacados";

//Librerias
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//CSS
import "../css/RollCachapa.css";

const RollCachapa = () => {
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
    className: "slider",
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
      <header>
        <NavBar className="navBarRoll" navUl="navUlRoll" />
      </header>
      <div style={{ paddingTop: "120px" }}>
        <div className="containerRollDescription">
          <div className="titleTrending">
            <img src={leftOrnamet} alt="" />
            <div>
              <h1>Roll de Cachapa</h1>
            </div>
            <img src={rightOrnamet} alt="" />
          </div>
          <div className="constancia">
            <img src={PostRollCachapa} alt="" />
            <div className="textConstancia">
              <h2>Una innovación que revolucionó la tradición</h2>
              <p>
                En nuestro restaurante, tenemos el honor de presentarles el
                emblemático Roll de Cachapa, una creación culinaria
                revolucionaria que ha cautivado a nuestros comensales desde su
                debut el 25 de Marzo del 2017. Esta delicia gastronómica es el
                resultado de la creatividad y pasión de dos talentosos chefs:
                José Daniel y Alejandro Aponte.
              </p>
              <h2>El nacimiento de una idea audaz</h2>
              <p>
                La historia del Roll de Cachapa comienza en un momento de
                inspiración durante un almuerzo. Tanto José Daniel como
                Alejandro, dos mentes apasionadas por la gastronomía, sintieron
                el deseo de crear algo único y fascinante. Fue en ese momento
                que surgió la idea de enrollar una cachapa tradicional de queso
                de mano, combinando así sabores auténticos con una presentación
                innovadora.
              </p>
            </div>
          </div>

          <h2>La constancia de un momento trascendental</h2>
          <p>
            Un mes después de su creación, el 25 de Marzo del 2017, José Daniel
            y Alejandro decidieron compartir su innovador plato con el mundo a
            través de una foto en Instagram. Esta foto se convirtió en un
            testimonio tangible de la fecha en la que el Roll de Cachapa hizo su
            primera aparición, marcando así un hito en la historia de nuestra
            cocina.
          </p>
          <h2>Desafíos y aceptación</h2>
          <div className="desafiosRoll">
            <div className="desafiosRollText">
              <p>
                Como toda creación innovadora, el Roll de Cachapa no estuvo
                exento de críticas iniciales. Algunos afirmaban que una cachapa
                tradicional no debía ser modificada de ninguna manera. Sin
                embargo, con el paso del tiempo, la combinación de sabores y la
                presentación única del Roll de Cachapa comenzaron a conquistar
                los paladares más exigentes.
              </p>
              <h2>Una experiencia culinaria inigualable</h2>
              <p>
                Hoy en día, el Roll de Cachapa es considerado una de nuestras
                especialidades más destacadas. Cada bocado te transportará a una
                fusión perfecta de sabores tradicionales y vanguardistas.
                Nuestros chefs continúan perfeccionando la receta y explorando
                nuevas variantes para sorprender y deleitar a nuestros
                comensales.
              </p>
            </div>
            <img src="/img/RollTradicional.jpg" alt="" />
          </div>

          <h2>Únete a nosotros y descubre el Roll de Cachapa</h2>
          <p>
            Te invitamos a visitarnos y descubrir por qué el Roll de Cachapa se
            ha convertido en un ícono de nuestra cocina. Sumérgete en esta
            historia culinaria llena de pasión, innovación y sabor. Permítenos
            brindarte una experiencia gastronómica única que no querrás olvidar.
          </p>
          <div className="titleTrending">
            <img src={leftOrnamet} alt="" />
            <div>
              <h1>Ordena tu Roll de Cachapa hoy mismo </h1>
              <h5>*Valido unicamente para Maracay*</h5>
            </div>
            <img src={rightOrnamet} alt="" />
          </div>
          <p>
            Estamos encantados de ofrecerte la oportunidad de disfrutar del Roll
            de Cachapa en la comodidad de tu hogar. A través de nuestra página
            web, ahora puedes realizar tu pedido y deleitarte con este exquisito
            manjar directamente en tu puerta. Solo tienes que hacer clic en el
            botón de "Ordenar ahora" y te garantizamos una experiencia culinaria
            única que te transportará a sabores inigualables.
          </p>
        </div>
        <div className="sliderContainer">
          <h1>
            Escoge el Roll de Cachapa de tu preferencia, tenemos variedad :)
          </h1>

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
    </>
  );
};

export default RollCachapa;
