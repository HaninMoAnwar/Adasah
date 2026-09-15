import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailHero({ article }) {

    const { readTime, category, title, author, image, slug, date } = article;

    return (
        <>
            <section className="relative w-full h-112.5 lg:h-137.5 flex items-end pb-12 overflow-hidden">
                {/* Cinematic Backdrop Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt={slug}
                        className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity brightness-75 scale-105"
                    />
                    {/* Edge Ambient Smooth Fading Gradients */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-[#09090b]/40 via-transparent to-[#09090b]/40"></div>
                </div>

                {/* Hero Meta & Title Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    {/* Breadcrumb Path navigation map rows */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-6 bg-black/30 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/5">
                        {<Link to="blog" className="hover:text-white transition">المدونة</Link>}
                        <i className="fa-solid fa-angle-left text-neutral-600"></i>
                        {<span className="text-orange-500 font-medium">{category}</span>}
                    </div>

                    {/* Badges and Read Metrics */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold mb-4 text-neutral-300">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-orange-500/10">
                            {category}
                        </span>
                        <span className="flex items-center gap-1.5 opacity-80"><i className="fa-solid fa-calendar"></i>{date}</span>
                        <span className="flex items-center gap-1.5 opacity-80"><i className="fa-regular fa-clock"></i> {readTime}</span>
                    </div>

                    {/* Core Giant Title text display field */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black max-w-4xl leading-tight mb-8 drop-shadow-md text-white">
                        {title}
                    </h1>

                    {/* Small Floating Author Widget Profile Badge */}
                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 max-w-xs shadow-xl">
                        <img src={author.avatar} alt={author.name} className="w-11 h-11 rounded-xl object-cover ring-2 ring-orange-500/20" />
                        <div>
                            <h4 className="text-sm font-bold text-neutral-200">{author.name}</h4>
                            <p className="text-xs text-neutral-400">{author.role}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
