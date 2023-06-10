
const Destacados = ({ title, price, description, img, className}) => {
  return (
    <div className="containerImgCarousel">
      <div className={className}>
        <img src={`../public/img/${img}.jpg`} className="imgCarousel" alt="" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="addCartLandingPage">
            <span>${price}</span>
            <button>Ordenar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destacados;
