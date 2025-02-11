import { breadcrambs } from '@/types';
import React, { Fragment } from 'react';
import { Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator, } from './ui/breadcrumb';
import { Slash } from 'lucide-react';

interface Props{
    data: breadcrambs[],
    page: string
}

const BreacdCrambs = (props: Props) => {

    return (
        <Breadcrumb className='mb-3'>
            <BreadcrumbList>
                {props.data.map(el => (
                    <Fragment key={el.slug}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${el.slug}`}>{el.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash/>
                        </BreadcrumbSeparator>
                    </Fragment>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{props.page}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    );
};

export default BreacdCrambs;