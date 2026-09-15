import React from 'react'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import FeaturedArt from '../../components/FeaturedArt/FeaturedArt'
import LatestArt from '../../components/LatestArt/LatestArt'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const pageInfo  = {
    pageName:'home',
    tag:' مرحباً بك في عدسة ',
    titleStart:'اكتشف',
    highlighted:'فن',
    titleRest:' التصوير الفوتوغرافي',
    description:' انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.'
}
export default function HomePage() {
    return (
        <>

            {/* HERO */}
            <Hero pageInfo={pageInfo}/>

            {/* FEATURED ARTICLES */}
            <FeaturedArt />

            {/* CATEGORIES */}
            <Categories />

            {/* LATEST ARTICLES */}
            <LatestArt />
            
            {/* NEWSLETTER */}
            <NewsLetter />


        </>
    )
}
