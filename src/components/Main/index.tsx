import React from 'react';
import Header from '../Header';
import Filter from '../Doctor/Filter';
import Advantages from "../Advantages/index"
import FAQ from '@/components/Faq/Faq';
import TopDoctos from "@/components/TopDoctors/TopDoctors"

const Main = () => {
    return (
        <div>
            <Header />
            <Filter />
            <TopDoctos />
            <Advantages />
            <FAQ />

        </div>
    );
};

export default Main;