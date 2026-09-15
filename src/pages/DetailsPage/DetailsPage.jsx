import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import DetailHero from '../../components/DetailHero/DetailHero';
import DetailRelatedArt from '../../components/DetailRelatedArt/DetailRelatedArt';
import DetailContent from '../../components/DetailContent/DetailContent';
import posts from "../../assets/posts.json";
const { posts: articles } = posts;
export default function DetailsPage({ }) {

    const { slug } = useParams();
    
    const article = articles.find((articleItem) => articleItem.slug === slug);
    const relatedArticles =articles.filter((articleItem) => articleItem.category === article.category).slice(0,3);



    return (
        <>

            <div
                className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden pb-16 "
            >
                {/* 1. HERO HEADER BANNER */}
                <DetailHero article={article} />




                {/* 2. BODY CONTENT LAYOUT STRUCTURE MATRIX */}
                <DetailContent article={article} />


                {/* 6. BOTTOM RELATED ARTICLES SECTION */}
                <DetailRelatedArt relatedArticles={relatedArticles} />

            </div>
        </>
    )
}

