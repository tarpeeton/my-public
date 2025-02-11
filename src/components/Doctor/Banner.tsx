import {useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/image/doctor_banner_image.png'

const Banner = () => {
    const t = useTranslations('Doctor')
    return (
        <div className=' px-4 md:px-10 py-4 relative'>
            <div className="bg-gradient-to-b from-[#379FF2] via-[#206BEF] to-[#0129E3] overflow-hidden p-5 md:p-16 xl:pb-24 rounded-[40px] flex flex-col xl:flex-row">
                <div className="w-full xl:w-[50%] text-white z-10">
                    <h1 className='text-[24px] md:text-[48px] xl:text-[56px] leading-10  md:leading-[60px] font-semibold'>{t('banner_title')}</h1>
                    <p className='text-[16px] md:text-[24px] font-medium mt-5'>{t('banner_desc')}</p>
                </div>
                <div className="relative w-full xl:w-[50%] top-10 xl:top-0 h-[250px] md:h-[450px] xl:h-auto">
                    <Image className='absolute md:-bottom-48 right-10 -bottom-24 transform w-[400px] md:w-full xl:w-[350px]' style={{ transform: "rotate(-30deg)" }}  width={250} src={bannerImage} alt='banner iamge'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;