import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiY2VzYXJkdjEzMjEiLCJhIjoiY2xpZ3JwZ3BsMG9zdDNkbXM0Mmp6YnA4ZCJ9.56b4g8i_PidMdUwrYjUYkw";

const MapBox = ({ longitud, latitud }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitud, latitud], // Cambia esto con las coordenadas deseadas
      zoom: 17, // Cambia esto según el nivel de zoom deseado
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "90%", height: "400px" }} />
  );
};

export default MapBox;
