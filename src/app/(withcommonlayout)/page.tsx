import About from '@/components/pages/home/About';
import Benefits from '@/components/pages/home/Benefits';
import BestSelles from '@/components/pages/home/BestSelles';
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
        </div>
    );
};

export default page;