import { create } from "zustand";
import { ISpesiality, ISity } from "@/types/Speciality";
import { Axios } from "@/axios/Axios";
import { IDoctorFull, IMultiLang } from "@/types/Doctor";
import { IClinicFull } from "@/types/Clinick";

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
    const {
      doctors,
      clinick,
      sityID,
      spesialityID,
      searchingName,
      name,
    } = get();

    // Приводим к нижнему регистру, чтобы искать без учёта регистра
    const searchLower = searchingName.trim().toLowerCase();

    // name может быть либо string, либо объект IMultiLang
    // Если это строка — берём её в lowerCase,
    // если IMultiLang — например, используем "ru" (или любой нужный язык)
    let nameLower = "";
    if (typeof name === "string") {
      nameLower = name.trim().toLowerCase();
    } else {
      // если у нас IMultiLang, то берём ru (или уз, или все сразу - на ваше усмотрение)
      nameLower = (name?.ru ?? "").trim().toLowerCase();
    }

    // Общий массив: врачи + клиники
    const combined: TDoctorClinic[] = [
      ...doctors.map((doc) => ({ type: "doctor" as const, data: doc })),
      ...clinick.map((cl) => ({ type: "clinic" as const, data: cl })),
    ];

    return combined.filter((item) => {
      if (item.type === "doctor") {
        const doctor = item.data;

        // 1) Фильтр по городу
        if (sityID && doctor.city.id !== sityID) {
          return false;
        }

        // 2) Фильтр по специальности
        if (
          spesialityID &&
          !doctor.speciality.some((sp) => sp.id === spesialityID)
        ) {
          return false;
        }

        // 3) Фильтр по searchingName
        if (searchLower) {
          // Собираем ФИО (ru) в одну строку (можно расширить для uz/en)
          const docRuName = [
            doctor.name?.ru ?? "",
            doctor.surname?.ru ?? "",
            doctor.patronymic?.ru ?? "",
          ]
            .join(" ")
            .toLowerCase();

          // Если вообще не нашли поисковую строку — не подходит
          if (!docRuName.includes(searchLower)) {
            return false;
          }
        }

        // 4) Фильтр по name (строка или IMultiLang)
        if (nameLower) {
          // Аналогично проверим то же ФИО
          const docRuName = [
            doctor.name?.ru ?? "",
            doctor.surname?.ru ?? "",
            doctor.patronymic?.ru ?? "",
          ]
            .join(" ")
            .toLowerCase();

          if (!docRuName.includes(nameLower)) {
            return false;
          }
        }

        return true;
      } else {
        // item.type === 'clinic'
        const clinic = item.data;

        // === 1) Фильтр по городу ===
        // У клиники нет поля "city.id", поэтому если хотим фильтровать 
        // по sityID, нужно решить как:
        // Допустим, «город клиники» — это город одного из её докторов (пример):
        if (sityID) {
          const hasCityDoctor = clinic.doctors?.some(
            (d) => d.city?.id === sityID
          );
          if (!hasCityDoctor) {
            return false;
          }
        }

        // === 2) Фильтр по специальности ===
        // Аналогично проверим, есть ли хотя бы один доктор с нужным specialityID
        if (spesialityID) {
          const hasSpeciality = clinic.doctors?.some((doc) =>
            doc.speciality.some((sp) => sp.id === spesialityID)
          );
          if (!hasSpeciality) {
            return false;
          }
        }

        // === 3) Фильтр по searchingName ===
        // Предположим, мы хотим искать по clinic.name (string) 
        // ИЛИ искать среди имён докторов, если нужно. 
        // Ниже пример только по clinic.name:
        const clinicNameLower = (clinic.name || "").toLowerCase();

        if (searchLower) {
          // Если название клиники не содержит поисковой строки, 
          // попробуем искать в докторах этой клиники (по ФИО)
          const foundInClinicName = clinicNameLower.includes(searchLower);
          const foundInDoctors = clinic.doctors?.some((doc) => {
            const docRuName = [
              doc.name?.ru ?? "",
              doc.surname?.ru ?? "",
              doc.patronymic?.ru ?? "",
            ]
              .join(" ")
              .toLowerCase();
            return docRuName.includes(searchLower);
          });

          // Если не нашли ни в названии, ни в докторах — отсекаем
          if (!foundInClinicName && !foundInDoctors) {
            return false;
          }
        }

        if (nameLower) {
          const foundInClinicName = clinicNameLower.includes(nameLower);

          const foundInDoctors = clinic.doctors?.some((doc) => {
            const docRuName = [
              doc.name?.ru ?? "",
              doc.surname?.ru ?? "",
              doc.patronymic?.ru ?? "",
            ]
              .join(" ")
              .toLowerCase();
            return docRuName.includes(nameLower);
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
