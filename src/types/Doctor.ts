export interface IMultiLang {
  ru: string;
  uz: string;
  en: string;
}

interface IEducation {
  id?: number | null;
  name: IMultiLang;
  faculty: IMultiLang;
  fromYear: string;
  toYear: string;
  direction?: string;
}

interface ISpecialty {
  id: number;
  name: IMultiLang;
}



interface IWorkExperience {
  id?: number | null;
  name: IMultiLang;
  city: IMultiLang;
  fromYear: string;
  toYear: string;
  position: {
    ru: string[];
    uz: string[];
    en: string[];
  };
}


export interface IDoctorFull {
    id: number;
    slug: string;
    name: IMultiLang;
    surname: IMultiLang
    patronymic: IMultiLang
    quote: IMultiLang
    exp: number;
    rating: number | null;
    gender: string;
    phone: string;
    city: {
      id: number;
      name: IMultiLang
    };
    contact: {
      id: number;
      phone: string;
      instagram: string;
      telegram: string;
      facebook: string;
      youtube: string;
    };
    language: string[];
    achievement: IMultiLang
    photo: {
      id: number;
      url: string;
    };
 
    education: IEducation[];
    speciality: ISpecialty[];
    experience: IWorkExperience[];
    receptionTime: {
      id: number;
      days: {
        id: number;
        dayOfWeek: string;
        from: string | null;
        to: string | null;
      }[];
      clinicName: string;
      address: IMultiLang
      orientir: IMultiLang
      price: number;
      addressLink: string;
      latitude: number;
      longitude: number;
    }[];
    documents: {
      id: number;
      type: string;
      file: {
        id: number;
        url: string;
      };
    }[];
    promotionList: {
      id: number;
      address: IMultiLang;
      addressLink: string;
      phone: string;
      title: IMultiLang
      description: IMultiLang
      percent: number;
      photo: {
        id: number;
        url: string;
      };
    }[];
    serviceList: {
      id: number;
      service: {
        id: number;
        categoryId: number;
        slug: string;
        name: IMultiLang
      };
      price: number;
    }[];
  }