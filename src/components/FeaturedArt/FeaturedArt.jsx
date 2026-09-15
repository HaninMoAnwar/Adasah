import React from 'react'
import { Link } from 'react-router-dom'
import ArtWideCard from '../ArtWideCard/ArtWideCard';
import posts from "../../assets/posts.json";
const { posts: articles } = posts;

export default function FeaturedArt() {
    return (
        <>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-6 py-16 text-2xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs text-gray-300 mb-6">
                                مميز <span className="badge-dot"></span><span className="badge-dot opacity-50"></span>
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black mb-3">مقالات مختارة</h2>
                            <p className="text-gray-400">محتوى منتقى لبدء رحلة تعلمك</p>
                        </div>
                        <Link to="blog" className="shrink-0 inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-orange-500 transition text-white text-sm font-bold px-6 py-3.5 rounded-full">
                            عرض الكل
                            <i className="fa-solid fa-chevron-left w-4 h-4"></i>
                        </Link>
                    </div>

                    <div className="space-y-6">
                        {
                            articles.filter((articleItem) => articleItem.featured).map((articleItem) => <ArtWideCard isFeatered={true} article={articleItem} key={articleItem.id}/>)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
