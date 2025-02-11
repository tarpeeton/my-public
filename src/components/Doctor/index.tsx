import React from 'react';
import Banner from './Banner';
import Filter from './Filter';
import Doctor from './Doctor';

const DoctorMain = () => {
    return (
        <div className='px-4 md:px-10 py-4'>
            <Banner/>
            <Filter/>
            <Doctor/>
        </div>
    );
};

export default DoctorMain;