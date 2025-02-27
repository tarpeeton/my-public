"use client";
import axios from "axios";
import { useState } from "react";
import { SuccessModal } from "./SuccessModal";
import { ErrorModal } from "./ErrorModal";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLocale } from "next-intl";

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
  type,
}: IClinickAppLicationProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const locale = useLocale();
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
      setSuccess(true);
      setClose();
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <>
      <SuccessModal
        title={{
          ru: "Вы успешно записались на прием",
          uz: "Siz muvaffaqiyatli qabulga yozildingiz",
          en: "You have successfully booked an appointment",
        }}
        subtitle={{
          ru: "Спасибо, ваша запись подтверждена. Мы с нетерпением ждём встречи с вами. До встречи!",
          uz: "Rahmat, sizning yozuvingiz tasdiqlandi. Biz siz bilan uchrashishni intiqlik bilan kutyapmiz. Ko'rishguncha!",
          en: "Thank you, your booking has been confirmed. We are looking forward to meeting you. See you soon!",
        }}
        open={success}
        close={() => setSuccess(false)}
      />
      <ErrorModal
        title={{
          ru: "Техническая ошибка",
          uz: "Texnik xato",
          en: "Technical error",
        }}
        subtitle={{
          ru: "Что-то пошло не так. Попробуйте еще раз",
          uz: "Biror narsa noto'g'ri ketdi. Iltimos, yana urinib ko'ring",
          en: "Something went wrong. Please try again",
        }}
        open={error}
        close={() => setError(false)}
      />
      <Dialog open={success ? false : open} onOpenChange={setClose}>
        <DialogContent className="w-[340px] lg:w-[400px] rounded-[12px]">
          <DialogHeader className="text-left">
            <DialogTitle className="font-semibold text-[22px] lg:text-[25px]">
              {locale === "ru"
                ? "Записаться на прием"
                : locale === "uz"
                  ? "Qabulga yozilish"
                  : "Book an appointment"}
            </DialogTitle>
            <p className="lg:text-[14.2px] text-[#747474]">
              {locale === "ru"
                ? "Поделитесь проблемой, и свяжется с Вами в ближайшее время"
                : locale === "uz"
                  ? "Muammoingizni ulashing, va siz bilan tez orada bog‘lanishadi"
                  : "Share your problem, and you will be contacted soon"}
            </p>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <input
              placeholder={
                locale === "ru"
                  ? "ФИО"
                  : locale === "uz"
                    ? "F.I.SH"
                    : "Full Name"
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#F8F8F8] px-[16px] h-[50px] outline-[#4869fce7] rounded-[8px] text-[#747474]"
            />
            <input
              placeholder={
                locale === "ru"
                  ? "Ваш номер телефона"
                  : locale === "uz"
                    ? "Telefon raqamingiz"
                    : "Your phone number"
              }
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-[#F8F8F8] px-[16px] h-[50px] outline-[#4869fce7] rounded-[8px] text-[#747474]"
            />
            <textarea
              placeholder={
                locale === "ru"
                  ? "Комментарий"
                  : locale === "uz"
                    ? "Izoh"
                    : "Comment"
              }
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-[#F8F8F8] px-[16px] pt-2 h-[100px] outline-[#4869fce7] rounded-[8px] text-[#747474]"
            />
          </div>
          <DialogFooter>
            <button
              type="button"
              onClick={handleSave}
              className="w-full outline-primary font-medium hover:bg-blue-600 h-[54px] rounded-[12px] flex items-center justify-center text-white bg-[#0129E3]"
            >
              {locale === "ru"
                ? "Записаться"
                : locale === "uz"
                  ? "Qabulga yozilish"
                  : "Book an appointment"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
