import { create } from "zustand";
import { ISpesiality, ISity } from "@/types/Speciality";
import { Axios } from "@/axios/Axios";
import { IDoctorFull, IMultiLang } from "@/types/Doctor";
import { IClinicFull } from "@/types/Clinick";

function getMultiLangString(obj?: {
  ru?: string;
  uz?: string;
  en?: string;
}): string {
  if (!obj) return "";
  const { ru = "", uz = "", en = "" } = obj;
  return [ru, uz, en].join(" ");
}

function getNameAllLang(name: IMultiLang | string): string {
  if (typeof name === "string") {
    return name.trim().toLowerCase();
  } else {
    return getMultiLangString(name).toLowerCase();
  }
}

function getDoctorFullNameAllLang(doctor: IDoctorFull): string {
  const fullName = [
    getMultiLangString(doctor.name),
    getMultiLangString(doctor.surname),
    getMultiLangString(doctor.patronymic),
  ]
    .join(" ")
    .toLowerCase();

  return fullName;
}

type TDoctorClinic =
  | { type: "doctor"; data: IDoctorFull }
  | { type: "clinic"; data: IClinicFull };

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
  setDoctorNameOrClinick: (search: string) => void;
  // FILTER
  getFilteredAll: () => TDoctorClinic[];
}

export const useSpecialityStore = create<SpecialityState>((set, get) => ({
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
  setDoctorNameOrClinick: (search: string) => set({ searchingName: search }),

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

  getFilteredAll: () => {
    const { doctors, clinick, sityID, spesialityID, searchingName, name } =
      get();
    console.log(name, "NAME SERVEr");

    const searchLower = searchingName.trim().toLowerCase();

    const nameLower = getNameAllLang(name);

    const combined: TDoctorClinic[] = [
      ...doctors.map((doc) => ({ type: "doctor" as const, data: doc })),
      ...clinick.map((cl) => ({ type: "clinic" as const, data: cl })),
    ];

    return combined.filter((item) => {
      if (item.type === "doctor") {
        const doctor = item.data;

        if (sityID && doctor.city.id !== sityID) {
          return false;
        }

        if (
          spesialityID &&
          !doctor.speciality.some((sp) => sp.id === spesialityID)
        ) {
          return false;
        }

        const docAllName = getDoctorFullNameAllLang(doctor);

        if (searchLower) {
          if (!docAllName.includes(searchLower)) {
            return false;
          }
        }

        if (nameLower) {
          if (!docAllName.includes(nameLower)) {
            return false;
          }
        }

        return true;
      } else {
        const clinic = item.data;

        if (sityID) {
          const hasCityDoctor = clinic.doctors?.some(
            (d) => d.city?.id === sityID
          );
          if (!hasCityDoctor) {
            return false;
          }
        }

        if (spesialityID) {
          const hasSpeciality = clinic.doctors?.some((doc) =>
            doc.speciality.some((sp) => sp.id === spesialityID)
          );
          if (!hasSpeciality) {
            return false;
          }
        }

        const clinicNameLower = (clinic.name || "").toLowerCase();

        if (searchLower) {
          const foundInClinicName = clinicNameLower.includes(searchLower);

          const foundInDoctors = clinic.doctors?.some((doc) => {
            const docAllName = getDoctorFullNameAllLang(doc);
            return docAllName.includes(searchLower);
          });

          if (!foundInClinicName && !foundInDoctors) {
            return false;
          }
        }

        if (nameLower) {
          const foundInClinicName = clinicNameLower.includes(nameLower);

          const foundInDoctors = clinic.doctors?.some((doc) => {
            const docAllName = getDoctorFullNameAllLang(doc);
            return docAllName.includes(nameLower);
          });

          if (!foundInClinicName && !foundInDoctors) {
            return false;
          }
        }
        return true;
      }
    });
  },
}));
