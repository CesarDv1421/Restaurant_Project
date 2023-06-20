import { Doughnut } from "react-chartjs-2";

//Componentes
import SideBar from "../components/SideBar";

//Imagenes / Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faUser,
  faWallet,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

//CSS
import "chart.js/auto";
import "../css/Admin.css";

const Admin = () => {

  const data = {
    labels: ["Hamburguesa", "Sandwiches", "Costillas", "Sushi", "Parrilas"],
    datasets: [
      {
        label: "Pedidos",
        data: [240, 157, 12, 62],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // Opciones de configuración del gráfico
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        fontColor: "black",
        fontSize: 100,
      },
    },
  };

  return (
    <div className="AdminContainer">
      <div className="footerNav">
        <SideBar whereIm={"Admin"} />
      </div>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboardInfoContainer">
          <div className="dashboardInfo">
            <div className="dashboardInfoTitle">
              <FontAwesomeIcon icon={faMoneyBill} />
              <h3>Ganancias Totales</h3>
            </div>
            <span>$56,514.08</span>
          </div>
          <div className="dashboardInfo">
            <div className="dashboardInfoTitle">
              <FontAwesomeIcon icon={faUser} />
              <h3>Clientes</h3>
            </div>
            <span>248</span>
          </div>
          <div className="dashboardInfo">
            <div className="dashboardInfoTitle">
              <FontAwesomeIcon icon={faWallet} />
              <h3>Transacciones Totales</h3>
            </div>
            <span>8,513</span>
          </div>
          <div className="dashboardInfo">
            <div className="dashboardInfoTitle">
              <FontAwesomeIcon icon={faCartShopping} />
              <h3>Productos Totales</h3>
            </div>
            <span>124</span>
          </div>
        </div>
        <div className="chartCategory">
          <div>
            <h1>adsasd</h1>
            <div>
              <Doughnut data={data} options={options} />
            </div>
          </div>
          <div>
            asd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
