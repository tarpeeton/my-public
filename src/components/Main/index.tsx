import React from 'react';
import Header from '../Header';
import Filter from '../Filter/Filter';
import Advantages from "../Advantages/index"
import FAQ from '@/components/Faq/Faq';
import TopDoctos from "@/components/TopDoctors/TopDoctors"
import TopClinics from "@/components/TopClinics/TopClinics"
import SpecializationsCarousel from '../Specializations/Specialization';
import TelegramBanner from '../TelegramBot/TelegramBot';

const Main = () => {
    return (
        <div>
            <Header />
            <Filter />
            <TopDoctos />
            <SpecializationsCarousel />
            <TopClinics />
            <Advantages />
            <FAQ />
            <TelegramBanner />
        </div>
    );
};

export default Main;