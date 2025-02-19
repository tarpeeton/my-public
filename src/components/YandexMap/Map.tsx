"use client";
import { useEffect, useRef } from "react";

interface YandexMapProps {
  location: [number, number];
}

export default function YandexMap({ location }: YandexMapProps) {
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

    // Agar API allaqachon yuklangan bo'lsa, to'g'ridan-to'g'ri initializeMap chaqiramiz
    if (window.ymaps && window.ymaps.ready) {
      window.ymaps.ready(initializeMap);
      return;
    }

    // Script manzilini aniqlaymiz
    const scriptSrc = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    let existingScript = document.querySelector(
      `script[src="${scriptSrc}"]`
    ) as HTMLScriptElement | null;

    if (existingScript) {
      // Agar script mavjud bo'lsa, uning yuklanish tugaganini kutamiz
      existingScript.addEventListener("load", () => {
        window.ymaps.ready(initializeMap);
      });
    } else {
      // Agar script hali mavjud bo'lmasa, uni yaratamiz
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        window.ymaps.ready(initializeMap);
      };
      document.body.appendChild(script);
    }
  }, [location]);

  return (
    <div
      ref={mapRef}
      style={{ width: "500px", height: "300px", margin: "0 auto" }}
    />
  );
}
