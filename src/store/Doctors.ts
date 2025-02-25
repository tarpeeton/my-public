import { create } from "zustand";
import { IDoctorFull } from "@/types/Doctor";

interface DoctorStore {
  doctors: IDoctorFull[];
  minPrice: number | null;
  setDoctors: (doctors: IDoctorFull[]) => void;
  
  getMinPriceByServiceId: (slug: string) => number | null;
 
  updateMinPrice: (slug: string) => void;
}

export const useDoctorStore = create<DoctorStore>((set, get) => ({
  doctors: [],
  minPrice: null,
  setDoctors: (doctors: IDoctorFull[]) => set({ doctors }),
  getMinPriceByServiceId: (slug) => {
    const { doctors } = get();
    const prices: number[] = doctors.flatMap((doctor) =>
      doctor.serviceList
        .filter((item) => item.service.slug === slug)
        .map((item) => item.price)
    );
    if (prices.length === 0) return null;
    return Math.min(...prices);
  },
  updateMinPrice: (slug) => {
    const minPrice = get().getMinPriceByServiceId(slug);
    set({ minPrice });
  },
}));
