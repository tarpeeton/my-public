import { create } from "zustand";
import { ISpesiality, ISity } from "@/types/Speciality";
import { Axios } from "@/axios/Axios";
import { IDoctorFull, IMultiLang } from "@/types/Doctor";
import { IClinicFull } from "@/types/Clinick";

interface SpecialityState {
  specialities: ISpesiality[];
  sity: ISity[];
  doctors: IDoctorFull[];
  clinick: IClinicFull[];
  sityID: number;
  spesialityID: number;
  name: IMultiLang | string;
  searchingName: string;
  // type for funsktion zb
  setSpecialities: (data: ISpesiality[]) => void;
  fetchSpecialities: () => Promise<void>;
  fetchSity: () => Promise<void>;
  fetchDoctors: () => Promise<void>;
  fetchClincik: () => Promise<void>;
  setDoctors: (doctors: IDoctorFull[]) => void;
  setClinick: (clinick: IClinicFull[]) => void;
  setSityID: (id: number) => void;
  setSpecialityID: (id: number) => void;
  setName: (name: IMultiLang | string) => void;
  setDoctorNameOrClinick:(search : string) => void;
}



export const useSpecialityStore = create<SpecialityState>((set) => ({
  specialities: [],
  sity: [],
  doctors: [],
  clinick: [],
  sityID: 0,
  spesialityID: 0,
  name: "",
  searchingName: "",
  // SET
  setSpecialities: (data: ISpesiality[]) => set({ specialities: data }),
  setSity: (data: ISity[]) => set({ sity: data }),
  setDoctors: (doctors: IDoctorFull[]) => set({ doctors }),
  setClinick: (clinick: IClinicFull[]) => set({ clinick }),
 setSityID: (id: number) => set({ sityID: id }),
  setSpecialityID: (id: number) => set({ spesialityID: id }),
  setName: (name: IMultiLang | string) => set({ name }),
  setDoctorNameOrClinick: (search:  string) => set({ searchingName: search }),


  // FETCH
  fetchSpecialities: async () => {
    try {
      const res = await Axios.get("/speciality");
      set({ specialities: res.data.data });
    } catch (error) {
      console.error("Ошибка при получении данных специальностей", error);
    }
  },
  fetchSity: async () => {
    try {
      const res = await Axios.get("/city");
      set({ sity: res.data.data });
    } catch (error) {
      console.error("Ошибка при получении данных ", error);
    }
  },
  fetchDoctors: async () => {
    try {
      const res = await Axios.get("/doctor");
      set({ doctors: res.data.data });
    } catch (error) {
      console.error("Ошибка при получении данных ", error);
    }
  },
  fetchClincik: async () => {
    try {
      const res = await Axios.get("/clinic");
      set({ clinick: res.data.data });
    } catch (error) {
      console.error("Ошибка при получении данных ", error);
    }
  },




}));
