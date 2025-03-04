"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLocale } from "next-intl";
import { useSearchMapStore } from "@/store/SearchMap";

export const DesktopFilter = () => {
  const locale = useLocale();
  const {
    sity,
    spesiality,
    service,
    clinick,
    setSpesialityID,
    setSityID,
    setGender,
    setMaxPrice,
    setMinPrice,
    setServiceSlug,
    setStage,
    setClinickName,
  } = useSearchMapStore();

  return (
    <div className="py-6 w-[340px] shadow-md rounded-[20px] px-5 flex flex-col gap-4 bg-white">
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Город</Label>
        <Select
          defaultValue={sity[0]?.id || ""}
          onValueChange={(value) => setSityID(value)}
        >
          <SelectTrigger className="w-full border-gray-300 focus:outline-none">
            <SelectValue placeholder="Город" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sity.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  {city.name[locale]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Врач</Label>
        <Select
          defaultValue={spesiality[0]?.id || ""}
          onValueChange={(value) => setSpesialityID(value)}
        >
          <SelectTrigger className="w-full border-gray-300 focus:outline-none">
            <SelectValue placeholder="Врач" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {spesiality.map((spec) => (
                <SelectItem key={spec.id} value={spec.id}>
                  {spec.name[locale]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Пол</Label>
        <Select defaultValue="male" onValueChange={(value) => setGender(value)}>
          <SelectTrigger className="w-full border-gray-300 focus:outline-none">
            <SelectValue placeholder="Пол" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="male">Мужской</SelectItem>
              <SelectItem value="female">Женский</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Стаж</Label>
        <Select defaultValue="26" onValueChange={(value) => setStage(value)}>
          <SelectTrigger className="w-full border-gray-300 focus:outline-none">
            <SelectValue placeholder="Стаж" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from({ length: 50 }, (_, i) => {
                const value = (i + 1).toString();
                return (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2 pl-1">
        <Checkbox id="house-call" />
        <Label htmlFor="house-call" className="text-sm font-normal">
          вызов на дом
        </Label>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Клиника</Label>
        <Select
          defaultValue={clinick[0]?.name || ""}
          onValueChange={(value) => setClinickName(value)}
        >
          <SelectTrigger className="w-full border-gray-300 focus:outline-none">
            <SelectValue placeholder="Клиника" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {clinick.map((clinic) => (
                <SelectItem key={clinic.id} value={clinic.name}>
                  {clinic.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Услуга</Label>
        <Select
          defaultValue={service[0]?.slug || ""}
          onValueChange={(value) => setServiceSlug(value)}
        >
          <SelectTrigger className="w-full border-gray-300 focus:outline-none">
            <SelectValue placeholder="Услуга" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {service.map((srv) => (
                <SelectItem key={srv.id} value={srv.slug}>
                  {srv.name[locale]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Цена сум</Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              type="number"
              placeholder="от"
              defaultValue="120000"
              onChange={(e) => setMinPrice(e.target.value)}
              className="border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <Input
              type="number"
              placeholder="до"
              defaultValue="220000"
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border-gray-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
