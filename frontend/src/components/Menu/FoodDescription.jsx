import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faXmark,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

import _ from "lodash";

//Components
import ToggleButton from "./ToggleButton";
import ToggleAditionalButton from "./ToggleAditionalButton.jsx";
//libraries
import Slider from "react-slick";

const FoodDescription = ({
  title,
  description,
  img,
  id,
  isAvailable,
  price,
  menu,
  setOrder,
  ingredientes,
  extras,
  extras_price,
  allVariants,
  setAllVariants,
}) => {
  const [quanty, setQuanty] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [descriptionModal, setDescriptionModal] = useState(false);

  const [variants, setVariants] = useState([]);
  const [variantSelected, setVariantSelected] = useState([0]);

  const [additional, setAdditional] = useState([]);
  const [additionalSelected, setAdditionalSelected] = useState([0]);

  let ingrediente;

  if (ingredientes != null) {
    ingrediente = ingredientes.split(",");
  }

  let extrasData = [];

  if (extras != null && extras_price != null) {
    const extrasArray = extras.split(", ");
    const extrasPriceArray = extras_price.split(", ");

    extrasData = extrasArray.map((add, index) => {
      return {
        name: add,
        price: extrasPriceArray[index],
      };
    });
  }

  const substractQuanty = () => {
    if (quanty <= 0) return setQuanty(0);
    setQuanty(quanty - 1);
  };

  const addingQuanty = () => {
    setQuanty(quanty + 1);
  };

  // useEffect(() => {
  //   console.log(allVariants);
  // }, [allVariants]);

  const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((item, index) => item === arr2[index]);
  };

  const viewOrder = (quantyOrder, variantes, additional) => {
    if (quanty != 0) {
      setAllVariants((prevOrders) => {
        if (!prevOrders) {
          return [{ quantyOrder, variantes, additional, idOrder: id }];
        }

        const existingSimiliarOrders = prevOrders.find(
          (order) =>
            compareArrays(order.additional, additional) &&
            compareArrays(order.variantes, variantes)
        );

        if (!existingSimiliarOrders) {
          return [
            ...prevOrders,
            { quantyOrder, variantes, additional, idOrder: id },
          ];
        } else {
          const updatedOrders = prevOrders.map((order) => {
            if (
              compareArrays(order.additional, additional) &&
              compareArrays(order.variantes, variantes)
            ) {
              return {
                ...order,
                quantyOrder: order.quantyOrder + quantyOrder,
              };
            }
            return order;
          });

          return updatedOrders;
        }
      });
    }
  };

  const createOrder = (event) => {
    event.preventDefault();

    if (quanty > 0) {
      const [idFood] = id;
      const [clickedFood] = menu.filter((food) => food.id === idFood);
      clickedFood.quanty = quanty;

      setOrder((prevOrder) => ({
        ...prevOrder,
        [clickedFood.id]: {
          ...clickedFood,
          variantes: allVariants ? allVariants : "",
          quanty: (prevOrder[clickedFood.id]?.quanty || 0) + quanty,
        },
      }));

      setQuanty(0);
    }
  };

  return (
    <div className="foodDescription">
      <div className="foodDescriptionInfo">
        <img
          onClick={() => setDescriptionModal(true)}
          src={img}
          width="180px"
          height="180px"
          style={{
            borderRadius: "15px",
            transition: "all 0.3s",
            cursor: "pointer",
          }}
        />

        <Modal
          className="descriptionModal"
          appElement={document.getElementById("root")}
          isOpen={descriptionModal}
          onRequestClose={() => setDescriptionModal(false)}
          ariaHideApp={true}
          style={{
            overlay: {
              // Estilos para el fondo del modal (superposición)
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <div className="containerModalDescription">
            <div className="imgModaContainer">
              <img src={img} width="100%" alt="" />
            </div>
            <div className="descriptionModa">
              <h1>{title}</h1>
              <p>
                {description}
              </p>
            </div>
          </div>
        </Modal>

        <div className="titleAvailablePrice">
          <div>
            <h1>{title}</h1>
            <span>{isAvailable ? "Disponible" : "No disponible"}</span>
          </div>

          <p>{description}</p>
          <div></div>
        </div>
      </div>

      <form onSubmit={createOrder} className="foodDescriptionManagement">
        <h1 className="price">
          <span className="dolar">$</span>
          {price}
        </h1>

        {extras || ingredientes ? (
          <>
            <div>
              <button className="addCart" onClick={() => setModalIsOpen(true)}>
                Ordenar
              </button>{" "}
            </div>

            <Modal
              className="variantsModal"
              appElement={document.getElementById("root")}
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              ariaHideApp={true}
              style={{
                zIndex: "10",
                overlay: {
                  // Estilos para el fondo del modal (superposición)
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <div className="contentModal">
                <div>
                  <div className="foodVariant">
                    <div className="quantyOfProduct">
                      <h2>Deseo ordenar</h2>
                      <div className="quantyFoodVariant">
                        <div
                          className="quantyButton minus"
                          onClick={() => substractQuanty()}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </div>

                        <span>{modalIsOpen ? quanty : 1}</span>

                        <div
                          className="quantyButton"
                          onClick={() => addingQuanty()}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </div>
                      <h2>{title}</h2>

                      {/* <button onClick={() => setModalIsOpen(false)}>
                       <FontAwesomeIcon icon={faXmark} />
                       </button> */}
                    </div>
                    <div className="border" />

                    {ingrediente != undefined && (
                      <>
                        <h3>Quiero mi {title} ...</h3>
                        <div className="removeIngredients">
                          <ToggleButton
                            option="Con Todo"
                            id={0}
                            setVariantSelected={setVariantSelected}
                            variantSelected={variantSelected}
                            setVariants={setVariants}
                            variants={variants}
                          />

                          {ingrediente != undefined &&
                            ingrediente.map((ingredientes, index) => {
                              return (
                                <ToggleButton
                                  key={index}
                                  option={ingredientes}
                                  id={(index += 1)}
                                  setVariantSelected={setVariantSelected}
                                  variantSelected={variantSelected}
                                  setVariants={setVariants}
                                  variants={variants}
                                />
                              );
                            })}
                        </div>
                      </>
                    )}

                    {extras && (
                      <>
                        <h4>Con un extra de ...</h4>

                        <div className="extras">
                          <ToggleAditionalButton
                            option="Sin Agregado"
                            id={0}
                            setVariantSelected={setAdditionalSelected}
                            variantSelected={additionalSelected}
                            setVariants={setAdditional}
                            variants={additional}
                          />

                          {extrasData.map(({ name, price }, index) => {
                            return (
                              <ToggleAditionalButton
                                key={index}
                                option={name}
                                id={(index += 1)}
                                setVariantSelected={setAdditionalSelected}
                                variantSelected={additionalSelected}
                                setVariants={setAdditional}
                                variants={additional}
                                price={price}
                              />
                            );
                          })}
                        </div>
                      </>
                    )}

                    <div className="notes">
                      <h2>Nota*:</h2>
                      <input type="text" placeholder="(Opcional)" />
                    </div>

                    <h5>
                      *La informacion obtenida a traves de la nota no garantiza
                      la posibilidad de el cambio o la modificacion del plato
                    </h5>

                    <div>
                      <button
                        className="aggOrder"
                        onClick={() => viewOrder(quanty, variants, additional)}
                      >
                        Ver pedido
                      </button>
                    </div>
                    <div className="orderContainer">
                      {allVariants &&
                        Object.values(allVariants)
                          .filter(({ idOrder }) => idOrder.includes(...id))
                          .map(
                            (
                              { quantyOrder, variantes, additional, idOrder },
                              index
                            ) => {
                              return (
                                <div key={index} className="order">
                                  <div className="signOrder">
                                    <button>
                                      <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span>x{quantyOrder}</span>
                                    <button>
                                      <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                  </div>
                                  <div style={{ margin: "auto 0" }}>
                                    {title}
                                  </div>
                                  <div className="dataOrder">
                                    {variantes.length != 0 && (
                                      <div>
                                        {variantes == "Con Todo"
                                          ? "Con Todo"
                                          : `Sin ${variantes}`}
                                      </div>
                                    )}
                                    {console.log(variantes, additional)}
                                    {additional.length != 0 && (
                                      <div>
                                        <h5>
                                          {additional == "Sin Agregado"
                                            ? "Sin Agregado"
                                            : `Extra: ${additional}`}
                                        </h5>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            }
                          )}
                    </div>

                    <div>
                      <button
                        className="addCart"
                        onClick={(event) => createOrder(event)}
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </>
        ) : (
          <>
            <div className="quanty">
              <div
                className="quantyButton minus"
                onClick={() => substractQuanty()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>

              <span>{quanty}</span>

              <div className="quantyButton" onClick={() => addingQuanty()}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="submitQuanty"
                name="foodQuanty"
                value="Anadir al carrito"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default FoodDescription;
