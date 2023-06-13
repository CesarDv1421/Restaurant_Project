import { useEffect } from "react";

const ToggleButton = ({
  option,
  id,
  variants,
  setVariants,
  variantSelected,
  setVariantSelected,
}) => {
  useEffect(() => {
    if (id == 0) {
      //Estilos y Array por defecto
      setVariantSelected([id]);
      setVariants([option]);
    }
  }, []);

  useEffect(() => {
    if (variants.length == 0) {
      //Cuando deseleccione todas las variantes
      setVariantSelected([0]); //Estilizo el boton "Con Todo"
      setVariants(["Con Todo"]); //Agrego "Con Todo" al array
    }
  }, [variants]);

  const handleVariantSelected = (id, option) => {
    if (id != 0) {
      //Seleccionando cualquier boton que no sea "Con Todo"

      setVariants((prevVariant) => {
        //Actualizando el estado con los removidos o los adicionales en un array

        if (prevVariant.includes("Con Todo")) {
          //Si dentro de mi array esta la palabra "Con Todo"
          const variants = prevVariant.filter(
            (variant) => variant != "Con Todo"
          ); //Lo quito ...

          setVariantSelected([id]); // Y le doy los estilos al boton que seleccione

          return variants ? [...variants, option] : [option]; //Y agrego el texto del boton al array
        }

        if (prevVariant.includes(option)) {
          //Si ya existe dentro del array un texto con la misma indicacion

          setVariantSelected((prev) =>
            prev.filter((deselected) => deselected != id)
          ); //le quito los estilos

          return prevVariant.filter((variant) => variant != option); //Y quito el texto del array
        } else {
          //Sino
          setVariantSelected((prev) => (prev ? [...prev, id] : [id])); //Agrego los estilos al boton
          return prevVariant ? [...prevVariant, option] : [option]; //Agrego el texto al array
        }
      });
    } else {
      //Cuando le doy click al boton "Con Todo"
      setVariantSelected([id]); //Resetea los valores por defecto
      setVariants([option]);
    }
  };

  return (
    <div>
      <label htmlFor="">
        <button
          onClick={() => handleVariantSelected(id, option)}
          className={
            variantSelected.includes(id)
              ? "ingredientsOptionsNotSelected"
              : "ingredientsOptions"
          }
        >
          {option == "Con Todo" ? "Con Todo" : `Sin ${option}`}
        </button>
      </label>
    </div>
  );
};

export default ToggleButton;
