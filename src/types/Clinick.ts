export interface IServicesResponse extends Array<{
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
    useCount: number | null;
    categorySlug: string;
  };
  price: number;
}> {}



export interface IClinicFull {
      id: number;
      name: string;
      phone: string;
      phone2: string;
      rating: number;
      logo: {
        id: number;
        url: string;
      };
      slug: string;
      workFrom: string;
      workTo: string;
      address: {
        id: string;
        name: {
          uz: string;
          ru: string;
          en: string;
        };
      }[];
      photos: {
        id: number;
        url: string;
      }[];
      certificates: {
        id: number;
        url: string;
      }[];
      services: IServicesResponse ;
      promotions: {
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
      clinicComments: any[];
      receptionTimes: {
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
      doctors: {
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
          phone: string | null;
          instagram: string | null;
          telegram: string | null;
          facebook: string | null;
          youtube: string | null;
        };
        language: {
          id: number;
          code: string;
          value: string;
        }[];
        achievement: {
          uz: any;
          ru: any;
          en: any;
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
        receptionTime: any[];
        documents: any[];
        promotionList: any[];
        serviceList: any[];
      }[];
      aboutUs: {
        id: string;
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
      }[];
      experience: string;
      mainPhoto: {
        id: number;
        url: string;
      };
    };