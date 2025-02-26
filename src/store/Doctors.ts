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
  filterClinickByService: (serviceId: number) => void;
  updateMinPrice: (slug: string) => void;
}

export const useDoctorStore = create<DoctorStore>((set, get) => ({
  doctors: [],
  clinick: [],
  minPrice: null,
  setDoctors: (doctors: IDoctorFull[]) => set({ doctors }),
  setClinick: (clinick: IClinicFull[]) => set({ clinick }),

  getMinPriceByServiceId: (slug) => {
    const { doctors, clinick } = get();

    const doctorPrices: number[] = doctors.flatMap((doctor) =>
      doctor.serviceList
        .filter((item) => item.service.slug === slug)
        .map((item) => item.price)
    );
    const minDoctorPrice = doctorPrices.length
      ? Math.min(...doctorPrices)
      : null;

    const clinicPrices: number[] = clinick.flatMap((clinic) =>
      clinic.services
        .filter((item) => item.service.slug === slug)
        .map((item) => item.price)
    );
    const minClinicPrice = clinicPrices.length
      ? Math.min(...clinicPrices)
      : null;

    if (minDoctorPrice !== null && minClinicPrice !== null) {
      return Math.min(minDoctorPrice, minClinicPrice);
    }
    return minDoctorPrice !== null ? minDoctorPrice : minClinicPrice;
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
