"use client";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar/index";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <div lang={i18n.language}>{children}</div>
    </>
  );
}
