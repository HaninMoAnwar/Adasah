import React from 'react'
import { Link } from 'react-router-dom';

export default function ArtWideCard({ article, isFeatered }) {

    const { readTime, category, title, author, image, slug } = article;
    return (
        <>
            <Link to={`/blog/${slug}`} className='group grid md:grid-cols-2 bg-ink-900 border border-white/5 rounded-3xl overflow-hidden'>

                <div className="relative order-1 md:order-1 min-h-56 group-hover:scale-105 transition duration-300">
                    <img src={image} className="absolute inset-0 w-full h-full object-cover" alt={title} />


                    {(isFeatered && (
                        <span className="absolute top-5 left-5 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                            <i className="fa-solid fa-star w-3 h-3"></i> مميز
                        </span>
                    ))
                    }

                </div>
                <div className="group p-8 md:p-10 flex flex-col justify-center order-2 md:order-2 ">
                    <div className="flex items-center gap-3 mb-5 text-xs text-gray-400 ">
                        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{category}</span>
                        <i className="fa-regular fa-clock w-4 h-4"></i>{readTime}
                    </div>
                    <h3 className="text-2xl font-black mb-3 group-hover:text-orange-500">{title}</h3>
                    <p className="text-gray-400 mb-8">تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div>
                                <p className="text-sm font-bold">{author.name}</p>
                                <p className="text-xs text-gray-500">{author.role}</p>
                            </div>
                            <img className='w-10 h-10  bg-ink-700 flex items-center justify-center text-xs rounded-full' src={author.avatar} alt={author.name} />

                        </div>
                        <p className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:-translate-x-2 transition duration-300">
                            اقرأ المقال <i className="fa-solid fa-arrow-left w-4 h-4"></i>
                        </p>
                    </div>
                </div>
            </Link>

        </>
    )
}
