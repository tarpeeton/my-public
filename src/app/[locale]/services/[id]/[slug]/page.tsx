import { MainServiceIdSlug } from "@/components/Services/[item]/[slug]/Main";
import { IMultiLang } from "@/types/Doctor";
import { Axios } from "@/axios/Axios";

interface PageProps {
  params: {
    slug: string;
  };
}

export type ApiResponseServiceCategory = {
  message: string | null;
  data: {
    id: number;
    categoryId: number;
    slug: string;
    name: IMultiLang;
    useCount: number;
    categorySlug: string;
  };
  status: number;
  pagination: unknown | null;
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  try {
    const response = await Axios.get(`/service/${slug}`);
    const fetchedData: ApiResponseServiceCategory = response.data;
    return (
      <main>
        <MainServiceIdSlug
          totalElements={fetchedData.data.useCount || 0}
          serviceData={fetchedData.data}
        />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch data for slug:", slug, error);
    throw new Error("Failed to fetch data");
  }
}
