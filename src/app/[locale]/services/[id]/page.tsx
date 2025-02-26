import axios from "axios";
import { ServiceItemMain } from "@/components/Services/[item]/Main";

interface PageProps {
  params: {
    id: number; 
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  try {
    const { data } = await axios.get(
      `https://medyordam.result-me.uz/api/service?categoryId=${id}`
    );

    return (
      <div>
        <ServiceItemMain
          totalElements={data?.pagination?.totalElements || 0}
          serviceData={data.data}
        />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data for slug:", id, error);
    throw new Error("Failed to fetch data");
  }
}