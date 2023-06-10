import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const FoodVariantsDescription = ({
  title,
  description,
  id,
  img,
  isAvailable,
  variantOrQuanty,
  price,
  menu,
  setOrder,
}) => {
  const [quanty, setQuanty] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const [selectedFood, setSelectedFood] = useState(0);

  const selectType = (id) => {
    setSelectedFood(id);
    setIsSelected((prevSelected) => (prevSelected === id ? 0 : id));
    setQuanty(0);
  };

  const createOrder = (event) => {
    event.preventDefault();

    if (quanty > 0) {
      const [clickedFood] = menu.filter((food) => food.id === selectedFood);
      clickedFood.quanty = quanty;

      const { id } = clickedFood;
      setOrder((prevOrders) => {
        const updatedOrders = { ...prevOrders }; //crea una copia del estado orders
        updatedOrders[id] = {
          //nombre de la clave
          ...updatedOrders[id], //Valor de la variante
          ...clickedFood, //Resto de informacion
          quanty: (updatedOrders[id]?.quanty || 0) + quanty, //Suma la cantidad de platos que el cliente especifico al darle click a anadir al carrito
        };
        return updatedOrders;
      });

      setQuanty(0);
      setIsSelected(0);
    }
  };

  const addingQuanty = () => {
    if (isSelected > 0) setQuanty(quanty + 1);
  };

  const substractQuanty = () => {
    if (quanty <= 0) return setQuanty(0);
    setQuanty(quanty - 1);
  };


  return (
    <div className="foodDescription variant v2">
      <div className="foodDescriptionInfo">
        <img
          src={img}
          width="150px"
          height="180px"
          style={{ borderRadius: "15px", transition: "all 0.3s" }}
        />

        <div className="titleAvailablePriceVariant">
          <div>
            <h1>{title}</h1>
            <span>{isAvailable ? "Disponible" : "No disponible"}</span>
          </div>
          <p>{description}</p>
          <h1>Cantidad</h1>
        </div>
      </div>

      <div className="variantQuantyContainer">
        <div className="variantQuanty">

          {variantOrQuanty && (
            <div className="variantTypeContainer">
              <button
                className={isSelected === id[0] ? "selected" : "variantType"}
                onClick={() => selectType(id[0])}
              >
                {variantOrQuanty[0]}
              </button>
              <div>${price[0]}</div>
            </div>
          )}

          {variantOrQuanty && variantOrQuanty[1] && (
            <div className="variantTypeContainer">
              <button
                className={isSelected === id[1] ? "selected" : "variantType"}
                onClick={() => selectType(id[1])}
              >
                {variantOrQuanty[1]}
              </button>
              <div>${price[1]}</div>
            </div>
          )}

          {variantOrQuanty && variantOrQuanty[2] && (
            <div className="variantTypeContainer">
              <button
                className={isSelected === id[2] ? "selected" : "variantType"}
                onClick={() => selectType(id[2])}
              >
                {variantOrQuanty[2]}
              </button>
              <div>${price[2]}</div>
            </div>
          )}

          {variantOrQuanty && variantOrQuanty[3] && (
            <div className="variantTypeContainer">
              <button
                className={isSelected === id[3] ? "selected" : "variantType"}
                onClick={() => selectType(id[3])}
              >
                {variantOrQuanty[3]}
              </button>
              <div>${price[3]}</div>
            </div>
          )}
          
        </div>
      </div>

      <form
        onSubmit={createOrder}
        className="foodDescriptionManagementVariants"
      >
        <div className="quanty">
          <button
            type="button"
            onClick={() => substractQuanty(id)}
            className="quantyButton minus"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span>{quanty}</span>

          <button
            type="button"
            onClick={() => addingQuanty(id)}
            className="quantyButton"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div>
          <input
            type="submit"
            className="submitQuanty"
            name="foodQuanty"
            value="Anadir al carrito"
          />
        </div>
      </form>
    </div>
  );
};

export default FoodVariantsDescription;
