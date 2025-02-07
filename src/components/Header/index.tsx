import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./header.css";

export const Header = () => {
  return (
    <div className="relative max-w-[95%] mx-auto bg-gradient-to-b from-[#4FADF7] to-[#0052D4] text-white p-10 rounded-3xl shadow-lg overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Текстовая часть */}
        <div className="flex-1">
          <Card className="bg-white  rounded-xl shadow-lg">
            <CardContent>
              <h1 className="text-3xl md:text-4xl font-bold text-black">
                Найдите лучших врачей и клиники рядом с вами
              </h1>
              <p className="mt-2 text-lg text-gray-700">
                Med Yordam — это современная платформа, которая объединяет
                врачей, клиники и пациентов.
              </p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
                Найти врача
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Графическая часть */}
        <div className="flex justify-center relative bottom-10">
          <img
            src="./big-logo1.png"
            alt="big-logo"
            className="mb-6 animate-logo"
          />
          <p className="absolute bottom-12 text-white text-4xl font-semibold">
            Med Yordam
          </p>
        </div>
      </div>

      {/* Линия ЭКГ */}
      <div className="absolute bottom-0 left-0 right-0">
        <img src="./Vector1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
