import React from 'react'
import { Link } from 'react-router-dom';
import ArtSmallCard from '../ArtSmallCard/ArtSmallCard';

export default function DetailRelatedArt({relatedArticles}) {

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-white/5 pt-12">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-base">
                            <i className="fa-regular fa-images"></i>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-black">مقالات قد تعجبك</h2>
                            <p className="text-xs text-neutral-500 mt-0.5">استكشف المزيد من المحتوى المميز من المحتوى المميز</p>
                        </div>
                    </div>
                    <Link to="blog" className="text-sm font-semibold text-orange-500 hover:text-orange-400 flex items-center gap-1 transition group">
                        عرض الكل <i className="fa-solid fa-chevron-left text-[10px] transition-transform group-hover:-translate-x-0.5"></i>
                    </Link>
                </div>

                {/* 3-Column Grid Cards Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedArticles.map((item) => <ArtSmallCard articleItem={item} key={item.id}/>)}
                </div>
            </section>
        </>
    )
}
