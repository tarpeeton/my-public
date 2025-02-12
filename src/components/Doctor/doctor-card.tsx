import Image from 'next/image';
import React from 'react';
import image from '@/assets/image/doctor_banner_image.png'
import Rating from './rating';
import { useTranslations } from 'next-intl';
import { MoveRight, Phone } from 'lucide-react';
import Link from 'next/link';
const DoctorCard = () => {
    const t = useTranslations('Doctor')
    return (
        <div className='shadow-md rounded-[20px] px-4 py-6 flex gap-6'>
            <div className="flex w-full xl:w-[70%] gap-10">
                <Image className='w-full md:w-[240px] md:h-[300px]' width={240} height={300} src={image} alt='doctor image'/>
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
            <div className="map w-full xl:w-[30%]">
                <div className="flex flex-col md:flex-row xl:flex-col">
                    <div className="">
                        <h2 className='text-[16px] md:text-[20px] font-medium'>Эндомед клиник в Ташкент </h2>
                        <p className='text-[16px] md:text-[20px] text-[#7C7C7C] font-medium'>ул. Ховос д. 22</p>
                    </div>
                    <Link className='text-[#0129E3] text-[14px] md:text-[16px] font-semibold flex items-center gap-x-3' href={''}>{t('map_open_text')} <MoveRight/></Link>
                </div>
                <div className="w-full">
                <iframe
                    src={`https://yandex.uz/map-widget/v1/?ll=${69.2401}%2C${41.2995}&z=12`}
                    width="100%"
                    height="230px"
                    style={{ border: 0, marginTop: "10px" }}
                    allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;