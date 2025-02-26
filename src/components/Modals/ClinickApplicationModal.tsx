"use client";
import axios from "axios";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface IClinickAppLicationProps {
    clinickID?: number;
    doctorID?: number;
    open: boolean;
    setClose: () => void;
    type: "CLINCIK" | "DOCTOR";
  }

export const ClinickAppLicationModal = ({
  clinickID,
  open,
  setClose,
  doctorID,
  type
}: IClinickAppLicationProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const payload = {
    name,
    phoneNumber,
    comment,
    ...(type === "CLINCIK" ? { clinicId: clinickID } : { doctorId: doctorID }),
  };

  const handleSave = async () => {
    try {
      await axios.post(
        "https://medyordam.result-me.uz/api/application",
        payload
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setClose}>
      <DialogContent className="w-[340px] lg:w-[400px] rounded-[12px]">
        <DialogHeader className="text-left">
          <DialogTitle  className="font-semibold text-[22px] lg:text-[25px]">
            Записаться на прием
          </DialogTitle>
          <p className="lg:text-[14.2px] text-[#747474]">
            Поделитесь проблемой, и врач свяжется с Вами в ближайшее время
          </p>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#F8F8F8] px-[16px] h-[50px]   outline-[#4869fce7] rounded-[8px] text-[#747474] "
          />
          <input
            placeholder="Ваш номер телефона"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-[#F8F8F8] px-[16px] h-[50px] outline-[#4869fce7]  rounded-[8px] text-[#747474] "
          />
          <textarea
            placeholder="Комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="bg-[#F8F8F8] px-[16px] pt-2 h-[100px] outline-[#4869fce7] rounded-[8px] text-[#747474] "
          />
        </div>
        <DialogFooter>
          <button
            type="button"
            onClick={handleSave}
            className="w-full outline-primary font-medium hover:bg-blue-600 h-[54px] rounded-[12px] flex items-center justify-center text-white bg-[#0129E3]"
          >
            Записаться
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
