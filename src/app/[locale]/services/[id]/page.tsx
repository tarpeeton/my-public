import { ServiceItemMain } from "@/components/Services/[item]/Main";
import { IMultiLang } from "@/types/Doctor";
import { Axios } from "@/axios/Axios";

interface PageProps {
  params: {
    id: string;
  };
}

export type ApiResponseServiceCategory = {
  message: string | null;
  data: {
    id: number;
    slug: string;
    name: IMultiLang;
    useCount: number;
  };
  status: number;
  pagination: unknown | null;
};

export default async function Page({ params }: PageProps) {
  const { id } = params;
  try {
    const response = await Axios.get(`/service-category/${id}`);
    const fetchedData: ApiResponseServiceCategory = response.data;
    return (
      <main>
        <ServiceItemMain
          totalElements={fetchedData?.data.useCount || 0}
          serviceData={fetchedData.data}
        />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch data for slug:", id, error);
    throw new Error("Failed to fetch data");
  }
}
