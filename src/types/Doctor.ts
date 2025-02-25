export interface IDoctorFull {
    id: number;
    slug: string;
    name: {
      uz: string;
      ru: string;
      en: string;
    };
    surname: {
      uz: string;
      ru: string;
      en: string;
    };
    patronymic: {
      uz: string;
      ru: string;
      en: string;
    };
    quote: {
      uz: string | null;
      ru: string | null;
      en: string | null;
    };
    exp: number;
    rating: number | null;
    gender: string;
    phone: string;
    city: {
      id: number;
      name: {
        uz: string;
        ru: string;
        en: string;
      };
    };
    contact: {
      id: number;
      phone: string;
      instagram: string;
      telegram: string;
      facebook: string;
      youtube: string;
    };
    language: string[]; // предполагается массив строк
    achievement: {
      uz: string | null;
      ru: string | null;
      en: string | null;
    };
    photo: {
      id: number;
      url: string;
    };
    clinic: any[];
    education: any[];
    speciality: any[];
    training: any[];
    comment: any[];
    experience: any[];
    receptionTime: {
      id: number;
      days: {
        id: number;
        dayOfWeek: string;
        from: string | null;
        to: string | null;
      }[];
      clinicName: string;
      address: {
        uz: string;
        ru: string;
        en: string;
      };
      orientir: {
        uz: string;
        ru: string;
        en: string;
      };
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
      address: {
        uz: string;
        ru: string;
        en: string;
      };
      addressLink: string;
      phone: string;
      title: {
        uz: string;
        ru: string;
        en: string;
      };
      description: {
        uz: string;
        ru: string;
        en: string;
      };
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
        name: {
          uz: string;
          ru: string;
          en: string;
        };
      };
      price: number;
    }[];
  }
  