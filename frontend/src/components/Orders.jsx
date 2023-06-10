import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Orders = ({
  name,
  price,
  image,
  quantyOrder,
  variantOrQuanty,
  setOrders,
  orders,
  id,
  allVariants,
  setAllVariants,
}) => {
  const [totalQuantyOrders, setTotalQuantyOrders] = useState({});

  useEffect(() => {
    if (allVariants) {
      // Calcula la suma total de todos los quantyOrder por id
      const sumQuantyOrders = allVariants.reduce((sums, variant) => {
        const { idOrder, quantyOrder } = variant;
        idOrder.forEach((variantId) => {
          sums[variantId] = (sums[variantId] || 0) + quantyOrder;
        });
        return sums;
      }, {});

      setTotalQuantyOrders(sumQuantyOrders);
    }
  }, [allVariants]);

  const substractVariant = (
    currentQuantyOrder,
    currentVariantes,
    currentAdditional
  ) => {
    if (currentQuantyOrder > 1) {
      setAllVariants((prevVariants) => {
        const updatedVariants = [...prevVariants];

        updatedVariants.forEach((variant) => {
          if (
            variant.idOrder.includes(id) &&
            variant.variantes === currentVariantes &&
            variant.additional === currentAdditional
          ) {
            variant.quantyOrder = currentQuantyOrder - 1;
          }
        });

        return updatedVariants;
      });
    }
  };

  const addingVariant = (
    currentQuantyOrder,
    currentVariantes,
    currentAdditional
  ) => {
    setAllVariants((prevVariants) => {
      const updatedVariants = [...prevVariants];

      updatedVariants.forEach((variant) => {
        if (
          variant.idOrder.includes(id) &&
          variant.variantes === currentVariantes &&
          variant.additional === currentAdditional
        ) {
          variant.quantyOrder = currentQuantyOrder + 1;
        }
      });

      return updatedVariants;
    });
  };

  const addingQuanty = () => {
    const updatedOrders = { ...orders };
    updatedOrders[id].quanty += 1;
    setOrders(updatedOrders);
  };

  const substractQuanty = () => {
    if (quantyOrder <= 1) {
      const updatedOrders = { ...orders };
      delete updatedOrders[id];
      return setOrders(updatedOrders);
    }
    const updatedOrders = { ...orders };
    updatedOrders[id].quanty -= 1;
    setOrders(updatedOrders);
  };

  let idOrder;

  if (allVariants) {
    idOrder = allVariants.filter(({ idOrder }) => idOrder.includes(id));
  }

  return (
    <div className="orders">
      <div className="orderInfo">
        <div>
          <h1>{name}</h1>
          {variantOrQuanty && (
            <span className="orderQuanty">
              {variantOrQuanty} x{quantyOrder}
            </span>
          )}
        </div>
        <div className="variantesContainer">
          {allVariants &&
            allVariants
              .filter(({ idOrder }) => idOrder.includes(id))
              .map(({ quantyOrder, variantes, additional, idOrder }, index) => {
                return (
                  <div className="variantes" key={index}>
                    <span>
                      <button>
                        <FontAwesomeIcon
                          onClick={() =>
                            substractVariant(quantyOrder, variantes, additional)
                          }
                          icon={faMinus}
                        />
                      </button>
                      <span>{quantyOrder}</span>
                      <button>
                        <FontAwesomeIcon
                          onClick={() =>
                            addingVariant(quantyOrder, variantes, additional)
                          }
                          icon={faPlus}
                        />
                      </button>
                    </span>
                    {(additional || variantes) && ( //Si existen variantes o adicionales, los renderizas
                        <div className="variantExtras">
                          {variantes.length != 0 && ( //Parece redundante pero esto lo que hace es renderizar si existen variantes o adicionales, en caso de que uno no exista, simplemente no lo agrega
                            <div>
                              {variantes == "Con Todo"
                                ? "Con Todo"
                                : `- Sin ${variantes} `}
                            </div>
                          )}

                          {additional.length != 0 && (
                            <>
                              <div>
                                {additional == "Sin Agregado"
                                  ? null
                                  : `- Extra: ${additional}`}
                              </div>
                            </>
                          )}
                        </div>
                      )}
                  </div>
                );
              })}
        </div>

        <div className="orderModifyQuanty">
          {allVariants && idOrder.length > 0 ? (
            <div className="buttonsModifyQuanty">
              <span>{totalQuantyOrders[id]}</span>
            </div>
          ) : (
            <div className="buttonsModifyQuanty">
              <FontAwesomeIcon onClick={substractQuanty} icon={faMinus} />
              <span>{quantyOrder}</span>
              <FontAwesomeIcon onClick={addingQuanty} icon={faPlus} />
            </div>
          )}
          <span className="orderPrice">
            $
            {allVariants && idOrder.length > 0
              ? (price * totalQuantyOrders[id]).toFixed(1)
              : (price * quantyOrder).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Orders;
