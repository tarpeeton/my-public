import { NavigationActiveTab } from "@/types/AcitveTabMap";
import { create } from "zustand";
import { IDoctorFull, IMultiLang } from "@/types/Doctor";
import { IClinicFull } from "@/types/Clinick";

interface ISity {
  id: string;
  name: string;
}

interface ISpesiality {
  id: string ,
  slug: null | string,
  name: IMultiLang,
  active: boolean,
}

interface IService {
  id: number;
  categoryId: number;
  slug: string;
  name: IMultiLang;
  useCount: number;
  categorySlug: string;
}

// A type for mixed filter results: each item is either a doctor or a clinic.
export type FilteredResult =
  | { type: "doctor"; data: IDoctorFull }
  | { type: "clinick"; data: IClinicFull };

interface SearchMapStore {
  doctor: IDoctorFull[];
  clinick: IClinicFull[];
  service: IService[];
  sity: ISity[];
  spesiality: ISpesiality[];
  // filter fields
  searchByName: string;
  clinickName: string;
  serviceSlug: string;
  minPrice: string;
  maxPrice: string;
  gender: string;
  spesialityID: string;
  sityID: string;
  stage: string;
  activeTab: NavigationActiveTab;

  // setters
  setSity: (sity: ISity[]) => void;
  setSearchName: (name: string) => void;
  setClinickName: (name: string) => void;
  setServiceSlug: (slug: string) => void;
  setMinPrice: (min: string) => void;
  setMaxPrice: (max: string) => void;
  setStage: (stageText: string) => void;
  setGender: (genderText: string) => void;
  setSpesialityID: (id: string) => void;
  setService: (services: IService[]) => void;
  setSityID: (sityID: string) => void;
  setDoctors: (doctors: IDoctorFull[]) => void;
  setClinick: (clinicks: IClinicFull[]) => void;
  setActiveTab: (tab: NavigationActiveTab) => void;
  setSpesiality: (spec: ISpesiality[]) => void;
  // New property to hold the mixed filtered results
  filteredResults: FilteredResult[];
  setFilteredResults: (results: FilteredResult[]) => void;

  // The filter function will update the mixed results in the store
  filter: () => void;
}

export const useSearchMapStore = create<SearchMapStore>((set, get) => ({
  doctor: [],
  clinick: [],
  sity: [],
  service: [],
  spesiality: [],
  activeTab: NavigationActiveTab.FILTER,
  searchByName: "",
  clinickName: "",
  serviceSlug: "",
  minPrice: "",
  maxPrice: "",
  gender: "",
  spesialityID: "",
  sityID: "",
  stage: "",
  filteredResults: [],

  setSity: (sity) => set({ sity }),
  setSpesiality: (spec) => set({ spesiality: spec }),
  setSearchName: (name) => set({ searchByName: name }),
  setClinickName: (name) => set({ clinickName: name }),
  setServiceSlug: (slug) => set({ serviceSlug: slug }),
  setMinPrice: (min) => set({ minPrice: min }),
  setMaxPrice: (max) => set({ maxPrice: max }),
  setStage: (stageText) => set({ stage: stageText }),
  setGender: (genderText) => set({ gender: genderText }),
  setSpesialityID: (id) => set({ spesialityID: id }),
  setSityID: (sityID) => set({ sityID }),
  setDoctors: (doctors) => set({ doctor: doctors }),
  setClinick: (clinicks) => set({ clinick: clinicks }),
  setService: (services) => set({ service: services }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setFilteredResults: (results) => set({ filteredResults: results }),

  filter: () => {
    const {
      doctor,
      clinick,
      searchByName,
      clinickName,
      serviceSlug,
      minPrice,
      maxPrice,
      gender,
      spesialityID,
      sityID,
      stage,
    } = get();

    // --- Filter Doctors ---
    const filteredDoctors = doctor.filter((doc) => {
      // Search by name across three languages (case insensitive)
      const search = searchByName.toLowerCase();
      const nameMatch =
        !search ||
        doc.name.ru.toLowerCase().includes(search) ||
        doc.name.uz.toLowerCase().includes(search) ||
        doc.name.en.toLowerCase().includes(search);

      // Filter by gender
      const genderMatch = !gender || doc.gender.toLowerCase() === gender.toLowerCase();

      // Filter by specialty – assuming doctor.speciality is an array
      const specialtyMatch =
        !spesialityID ||
        (doc.speciality && doc.speciality.some((spec) => String(spec.id) === spesialityID));

      // Filter by city – doctor.city.id is a number so convert to string for comparison
      const sityMatch = !sityID || String(doc.city.id) === sityID;

      // Filter by stage – here assumed to compare experience (doc.exp) with a number from stage
      const stageMatch = !stage || doc.exp === parseInt(stage, 10);

      // Filter by price range – checking if any reception time falls within the range
      const min = minPrice ? parseFloat(minPrice) : null;
      const max = maxPrice ? parseFloat(maxPrice) : null;
      let priceMatch = true;
      if (min !== null || max !== null) {
        priceMatch = doc.receptionTime.some((rt) => {
          const price = rt.price;
          if (min !== null && price < min) return false;
          if (max !== null && price > max) return false;
          return true;
        });
      }

      return nameMatch && genderMatch && specialtyMatch && sityMatch && stageMatch && priceMatch;
    });

    // --- Filter Clinics ---
    const filteredClinicks = clinick.filter((clinic) => {
      // For clinics, we use a single language filter for the name (here using lower-case comparison)
      const search = searchByName.toLowerCase();
      const nameMatch = !search || clinic.name.toLowerCase().includes(search);

      // Additional filtering using clinickName from the store
      const clinicNameMatch =
        !clinickName || clinic.name.toLowerCase().includes(clinickName.toLowerCase());

      // Filter clinics by service slug: check if any service inside clinic.services matches
      const serviceSlugMatch =
        !serviceSlug ||
        (clinic.services && clinic.services.some((s) => s.service.slug === serviceSlug));

      // Price range filtering for clinics using receptionTimes array
      const min = minPrice ? parseFloat(minPrice) : null;
      const max = maxPrice ? parseFloat(maxPrice) : null;
      let priceMatch = true;
      if (min !== null || max !== null) {
        priceMatch = clinic.receptionTimes.some((rt) => {
          const price = rt.price;
          if (min !== null && price < min) return false;
          if (max !== null && price > max) return false;
          return true;
        });
      }

      return nameMatch && clinicNameMatch && serviceSlugMatch && priceMatch;
    });

    const mixedResults: FilteredResult[] = [
      ...filteredDoctors.map((doc) => ({ type: "doctor" as const, data: doc })),
      ...filteredClinicks.map((clinic) => ({ type: "clinick" as const, data: clinic })),
    ];
    

    set({ filteredResults: mixedResults });
  },
}));
