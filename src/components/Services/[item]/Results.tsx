"use client";
import { useEffect } from "react";
import axios from "axios";
import { useDoctorStore } from "@/store/Doctors";
import { IDoctorFull } from "@/types/Doctor";

interface IDoctorResponse {
  data: IDoctorFull[];
}

export const Result = () => {
  const { setDoctors } = useDoctorStore();


  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get<IDoctorResponse>(
          "https://medyordam.result-me.uz/api/doctor",
          { headers: { "Accept-Language": "" } }
        );
        setDoctors(res.data.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchAllDoctors();
  }, []);



  return <div>salom</div>;
};
