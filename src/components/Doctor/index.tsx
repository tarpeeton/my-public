import React from 'react';
import Banner from './Banner';
import Filter from './Filter';

const DoctorMain = () => {
    return (
        <div className='px-4 md:px-10 py-4'>
            <Banner/>
            <Filter/>
        </div>
    );
};

export default DoctorMain;