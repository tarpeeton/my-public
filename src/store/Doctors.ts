import { create } from "zustand";
import { IDoctorFull } from "@/types/Doctor";
import { IClinicFull } from "@/types/Clinick";

interface DoctorStore {
  doctors: IDoctorFull[];
  clinick: IClinicFull[];
  minPrice: number | null;
  setDoctors: (doctors: IDoctorFull[]) => void;
  setClinick: (clinick: IClinicFull[]) => void;
  
  getMinPriceByServiceId: (slug: string) => number | null;
  filterClinickByService: (serviceId: number) => void
  updateMinPrice: (slug: string) => void;
}

export const useDoctorStore = create<DoctorStore>((set, get) => ({
  doctors: [],
  clinick: [],
  minPrice: null,
  setDoctors: (doctors: IDoctorFull[]) => set({ doctors }),
  setClinick: (clinick: IClinicFull[]) => set({ clinick }),


  getMinPriceByServiceId: (slug) => {
    const { doctors , clinick } = get();
    
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

  filterClinickByService: (serviceId) => {
    const { clinick } = get();
    const filteredClinick = clinick.filter((clinic) =>
      clinic.services.some((s) => s.service.categoryId === serviceId)
    );
    set({ clinick: filteredClinick });
  },



}));
