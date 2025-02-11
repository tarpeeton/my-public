import React from 'react';
import Header from '../Header';
import Filter from '../Filter/Filter';
import Advantages from "../Advantages/index"
import FAQ from '@/components/Faq/Faq';
import TopDoctos from "@/components/TopDoctors/TopDoctors"
import TopClinics from "@/components/TopClinics/TopClinics"

const Main = () => {
    return (
        <div>
            <Header />
            <Filter />
            <TopDoctos />
            <TopClinics />
            <Advantages />
            <FAQ />

        </div>
    );
};

export default Main;