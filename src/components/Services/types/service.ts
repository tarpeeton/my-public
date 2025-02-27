

export interface ServiceData {
    id: number;
    categoryId?: number;
    slug: string;
    price?: string,
    name: {
      uz: string;
      ru: string;
      en: string;
    };
    categorySlug: string
  }
  export interface IPagination {
    currentPage?: number;
    totalPages?: number;
    totalElements?: number;
    pageSize?: number;
  }
  export interface IApiResponse {
    message: string | null;
    data: ServiceData[];
    status: number;
    pagination: IPagination;
  }