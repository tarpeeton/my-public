"use client";

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "next-intl";

interface ItemsPerPageSelectProps {
  perPage: number;   
  onChange: (value: number) => void;  
}

export function ItemsPerPageSelect({ perPage, onChange }: ItemsPerPageSelectProps) {
  const locale = useLocale() as "ru" | "uz" | "en";

  const itemsLabel = {
    ru: "/ Страница",
    uz: "/ Sahifa",
    en: "/ Page",
  }[locale];

  return (
    <Select
      value={perPage.toString()}
      onValueChange={(val) => onChange(Number(val))}
    >
      <SelectTrigger className="w-[150px] md:w-[180px] outline-none">
        <SelectValue placeholder="Items per page" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="9">{`9 ${itemsLabel}`}</SelectItem>
        <SelectItem value="12">{`12 ${itemsLabel}`}</SelectItem>
        <SelectItem value="15">{`15 ${itemsLabel}`}</SelectItem>
        <SelectItem value="18">{`18 ${itemsLabel}`}</SelectItem>
      </SelectContent>
    </Select>
  );
}
