import { useEffect, useRef } from "react";

export default function YandexMap({ location }: { location: [number, number] }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initializeMap = () => {
      if (mapRef.current?.getAttribute("data-initialized")) return;
      mapRef.current.setAttribute("data-initialized", "true");

      const map = new window.ymaps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });

      const placemark = new window.ymaps.Placemark(location);
      map.geoObjects.add(placemark);
    };

    if (window.ymaps && window.ymaps.ready) {
      window.ymaps.ready(initializeMap);
    } else {
      let script = document.querySelector("#yandex-map-script") as HTMLScriptElement;

      if (!script) {
        script = document.createElement("script");
        script.id = "yandex-map-script";
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        script.async = true;
        script.onload = () => window.ymaps.ready(initializeMap);
        document.body.appendChild(script);
      } else {
        script.onload = () => window.ymaps.ready(initializeMap);
      }
    }
  }, [location]);

  return <div ref={mapRef} style={{ width: "500px", height: "300px", margin: "0 auto" }} />;

}
