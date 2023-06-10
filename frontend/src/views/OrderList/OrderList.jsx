import React, { useRef, useState } from "react";
import SideBar from "../../components/SideBar";
import "./OrderList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OrderList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    className: "sliderOrderList",
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="OrderSideBar">
      <div className="footerNav">
        <SideBar whereIm="orderlist" />
      </div>

      <div className="orderCartContainer">
        <h1>Mi carrito de compras</h1>

        <div className="orderCart">
          <div className="sliderOrderListContainer">
            <Slider ref={sliderRef} {...settings}>
              <div class="cart-container">
                <div class="cart-row-Colums">
                  <div class="cart-column">Plato</div>
                  <div class="cart-column">Variantes</div>
                  <div class="cart-column">Cantidad</div>
                  <div class="cart-column">Total</div>
                </div>
                <div class="cart-row">
                  <div class="cart-column">Hamburguesa</div>
                  <div class="cart-column">Sin tomate, sin cebolla</div>
                  <div class="cart-column">5</div>
                  <div class="cart-column">$5</div>
                </div>
                <div class="cart-row">
                  <div class="cart-column">Hamburguesa</div>
                  <div class="cart-column">Sin tomate, sin cebolla</div>
                  <div class="cart-column">5</div>
                  <div class="cart-column">$5</div>
                </div>
              </div>
              <div>asdasd</div>
              <div>asdasd</div>
            </Slider>
          </div>

          <div className="">
            asdasd
            {currentSlide > 0 && (
              <button onClick={handlePrev}>Retroceder</button>
            )}
            {currentSlide < 2 ? (
              <button onClick={handleNext}>Siguiente</button>
            ) : (
              <button>Confirmar Pedido</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
