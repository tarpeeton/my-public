import Image from "next/image";
import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const schedule = [
  { date: "27 янв", day: "Пн", times: ["15:00", "16:00", "16:30", "17:00"] },
  { date: "28 янв", day: "Вт", times: ["15:00", "16:00", "16:30", "17:00"] },
  { date: "29 янв", day: "Ср", times: ["15:00", "16:00", "16:30", "17:00"] },
  { date: "30 янв", day: "Чт", times: ["15:00", "16:00", "16:30", "17:00"] },
];

const DoctorCard = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="flex flex-col border-none shadow-xl shadow-gray-200/20">
      <div className="p-6 flex flex-col lg:flex-row gap-4 ">
        <div className="flex w-full xl:w-[70%] gap-10">
          <Image
            className="w-full md:w-[240px] md:h-[300px]"
            width={240}
            height={300}
            src={"/doc-doc1.png"}
            alt="doctor image"
          />
          <div className="flex flex-col space-y-3">
            <h3 className="text-[24px] font-semibold">
              Мирзаев Батыр Бахрамович
            </h3>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 p-2 px-5 rounded-full text-blue-600 text-sm font-medium">
                Гастроэнтеролог
              </span>
            </div>
            <p className="text-gray-600">
              Алголог, вертебролог, гериатр (геронтолог), детский невролог.
            </p>
            <h4 className="text-gray-700 font-medium">
              Стаж: <span className="font-bold text-black">10 лет</span>
            </h4>
            <div className="flex gap-x-4 items-center">
              <FaPhoneAlt
                className="text-blue-600 bg-blue-100 p-2 rounded-full"
                size={40}
              />
              <p className="text-lg font-medium">+ 998 (99) 838 80 78</p>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[30%]">
          <h2 className="text-lg font-medium">Эндомед клиник в Ташкент</h2>
          <p className="text-gray-600">ул. Ховос д. 22</p>
          <Link
            className="text-blue-600 font-semibold flex items-center gap-2 mt-2 mb-5"
            href={"#"}
          >
            Открыть в Яндекс Картах <MoveRight />
          </Link>
          {/* <iframe
            src={`https://yandex.uz/map-widget/v1/?ll=69.2401,41.2995&z=12`}
            width="100%"
            height="230px"
            style={{ border: 0, marginTop: "10px" }}
            allowFullScreen
          /> */}
        </div>
      </div>

      <div className="border-t-2">
        <Tabs defaultValue={schedule[0].date}>
          <TabsList className="items-start justify-start flex mt-3 gap-2">
            {schedule.map((day) => (
              <TabsTrigger
                key={day.date}
                value={day.date}
                className="rounded-2xl py-2 text-sm text-start border-gray-200 data-[state=active]:border-2 data-[state=active]:border-[#0129E3] data-[state=active]:bg-[#F2F4FE]"
              >
                {day.date} <br />({day.day})
              </TabsTrigger>
            ))}
          </TabsList>

          {schedule.map((day) => (
            <TabsContent
              key={day.date}
              value={day.date}
              className="mb-7 mt-10 transition-all duration-300 ease-in-out hidden data-[state=active]:block"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                  {day.times.map((time) => (
                    <Button
                      className="bg-[#0129E3] text-white rounded-xl py-6 px-6"
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                
                <Link
                  href={"d"}
                  className="bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-500"
                >
                  Подробнее
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorCard;