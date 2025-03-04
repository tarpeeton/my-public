"use client";
import { useSearchMapStore } from "@/store/SearchMap";
import { useState, useEffect } from "react";
import { DesktopFilter } from "./DesktopFilter";
const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

export const ListOrFilter = () => {
  const { activeTab } = useSearchMapStore();
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 1024;

  return (
    <div className="mt-5 md:mt-7 lg:mt-8">
      {activeTab === "FILTER" ? (
        isMobile ? (
          <div className="">Мобильный фильтр</div>
        ) : (
            <DesktopFilter/>
        )
      ) : (
        <div className="py-10 px-5 flex flex-col gap-5">список</div>
      )}
    </div>
  );
};
