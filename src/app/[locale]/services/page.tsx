import { MainServices } from "@/components/Services/Main";
import axios from "axios";
import { IApiResponse } from "@/components/Services/types/service";

export default async function Home() {
  try {
    const { data: apiResponse } = await axios.get<IApiResponse>(
      "https://medyordam.result-me.uz/api/service-category"
    );
    return (
      <section>
        <MainServices data={apiResponse?.data || []}  totalElements={apiResponse.data.length}/>
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch professional data", error);
    throw new Error("Failed to fetch professional data");
  }
}
