import { breadcrambs } from '@/types';
import React, { Fragment } from 'react';
import { Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator, } from '../ui/breadcrumb';
import { Slash } from 'lucide-react';
import { useLocale } from 'next-intl';

interface Props{
    data: breadcrambs,
    page: {ru: string  , uz: string , en: string}
}

const BreacdCrambs = (props: Props) => {
    const locale = useLocale() as "ru" | "uz" | "en"

    return (
        <Breadcrumb className='mb-3'>
            <BreadcrumbList>
                    <Fragment>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${props.data.slug}`}>{props.data.title[locale]}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash/>
                        </BreadcrumbSeparator>
                    </Fragment>
                <BreadcrumbItem>
                    <BreadcrumbPage>{props.page[locale]}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    );
};

export default BreacdCrambs;