import Image from 'next/image';
import React from 'react';
import image from '@/assets/image/doctor_banner_image.png'
import Rating from './rating';
import { useTranslations } from 'next-intl';
import { Phone } from 'lucide-react';
const DoctorCard = () => {
    const t = useTranslations('Doctor')
    return (
        <div className='shadow-md rounded-[20px] px-4 py-6 '>
            <div className="flex">
                <Image className='w-full md:w-[40%] xl:w-[240px] xl:h-[300px]' width={240} height={300} src={image} alt='doctor image'/>
                <div className="flex flex-col space-y-3">
                    <h3 className='text-[20px] md:text-[24px] xl:text-[32px] font-semibold'>Мирзаев Батыр Бахрамович </h3>
                    <div className="flex items-center gap-x-3 md:gap-x-5">
                        <span className='bg-[#0129E30D] p-2 px-5 rounded-full text-[#0129E3] text-[12px] md:text-[14px] xl:text-[20px] font-medium'>Гастроэнтеролог</span>
                        <span className='bg-[#0129E30D] p-2 px-5 rounded-full text-[#0129E3] text-[12px] md:text-[14px] xl:text-[20px] font-medium'>Гастроэнтеролог</span>
                        <span className='bg-[#0129E30D] p-2 px-5 rounded-full text-[#0129E3] text-[12px] md:text-[14px] xl:text-[20px] font-medium'>Гастроэнтеролог</span>
                    </div>
                    <p className='text-[13px] md:text-[15px] xl:text-[16px] font-normal'>Алголог, вертебролог, гериатр (геронтолог), детский вертебролог, детский невролог, детский реабилитолог,</p>
                    <Rating rating={4}/>
                    <h4 className="text-[16px] font-medium text-[#7C7C7C]">
                        <span className='font-bold text-black'>{t('experens')}: </span> 10 {t('year')}
                    </h4>
                    <h3 className='text-[16px] font-semibold text-black'>{t('connection')}</h3>
                    <div className="flex gap-x-6 items-center">
                        <Phone className='text-[#0129E3] bg-[#0129E31A] p-2 rounded-full' size={40}/>
                        <p className='text-[20px] font-medium'>+ 998 (99) 838 80 78</p>
                    </div>
                </div>
            </div>
            <div className="map">
                
            </div>
        </div>
    );
};

export default DoctorCard;