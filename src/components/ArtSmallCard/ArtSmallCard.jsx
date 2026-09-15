import React from 'react'
import { Link } from 'react-router-dom';

export default function ArtSmallCard({ articleItem }) {
    const { category, date, excerpt, image, readTime, title,slug } = articleItem;


    return (
        <>
            
                <Link  to={`/blog/${slug}`}  className="bg-ink-900 border border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-4 duration-500 flex flex-col">
                    <div className="relative h-52">
                        <img src={image} className="w-full h-full object-cover group-hover:scale-105 duration-500" alt={title} />
                        <span className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full">{category}</span>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                            <span>{date}</span> <span>•</span> <i className="fa-regular fa-clock w-3.5 h-3.5"></i> {readTime}
                        </div>
                        <h3 className="font-black text-lg mb-2 leading-snug group-hover:text-orange-500 duration-500">{title}</h3>
                        <p className="text-gray-400 text-sm">{excerpt}</p>
                    </div>
                </Link>
        </>
    )
}
