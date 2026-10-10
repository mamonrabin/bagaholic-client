import About from '@/components/pages/home/About';
import Benefits from '@/components/pages/home/Benefits';
import BestSelles from '@/components/pages/home/BestSelles';
import Campaign from '@/components/pages/home/Campaign';
import Category from '@/components/pages/home/Category';
import Hero from '@/components/pages/home/Hero';
import NewProducts from '@/components/pages/home/NewProducts';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <Hero/>
            <Benefits/>
            <Category/>
            <BestSelles/>
            <About/>
            <NewProducts/>
            <Campaign/>
        </div>
    );
};

export default page;