import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./header.css";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative max-h-[100%] max-w-[95%] mx-auto bg-gradient-to-b from-[#4FADF7] to-[#0052D4] text-white p-10 rounded-3xl shadow-lg overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Текстовая часть */}
        <div className="flex-1">
          <Card className="bg-white  rounded-xl shadow-lg">
            <CardContent className="pt-[24px]">
              <h1 className="text-3xl md:text-4xl font-bold text-black mt-4 md:mt-0">
                Найдите лучших врачей и клиники рядом с вами
              </h1>
              <p className="mt-2 text-lg text-gray-700">
                Med Yordam — это современная платформа, которая объединяет
                врачей, клиники и пациентов.
              </p>
              <Button className="mt-4 bg-[#0129E3] hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-3xl">
                Найти врача
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Графическая часть */}
        <div className="flex justify-end relative bottom-10">
          <Image
            src="/big-logo1.png"
            width={500}
            height={500}
            alt="big-logo"
            className="mb-6 animate-logo"
          />
          <p className="md:mb-12 absolute bottom-12 text-white text-4xl font-semibold justify-end">
            Med Yordam
          </p>
        </div>
      </div>

      {/* Линия ЭКГ */}
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/Vector1.png"
          alt="big-logo"
          width={2500}
          height={2500}
          className="object-contain mb-16"
        />
      </div>
    </div>
  );
};

export default Header;
