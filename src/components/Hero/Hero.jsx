import React from 'react'
import { Link } from 'react-router-dom'


export default function Hero({ pageInfo }) {
    const { pageName, tag, titleStart, highlighted, titleRest, description } = pageInfo;
    return (
        <>
            <section className="relative bg-grid overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 py-28 text-center flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs text-gray-300 mb-8">
                        {tag}<span className="badge-dot"></span><span className="badge-dot opacity-50"></span>
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-black leading-[1.15] mb-6">
                        {titleStart} <span className="text-orange-500">{highlighted}</span><br />
                        {titleRest}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl mb-10">
                        {description}
                    </p>
                    {(pageName === 'home' || pageName === 'about') &&
                        <>
                            <div className="flex flex-col sm:flex-row items-center gap-4 my-10">
                                <Link to="/blog" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-bold px-7 py-4 rounded-full">
                                    استكشف المقالات
                                    <i className="fa-solid fa-arrow-left w-4 h-4"></i>
                                </Link>
                                <Link to="/about" className="flex items-center gap-2 border border-white/15 hover:border-white/30 transition text-white text-sm font-bold px-7 py-4 rounded-full">
                                    اعرف المزيد
                                    <i className="fa-solid fa-info w-4 h-4 border rounded-full p-1"></i>
                                </Link>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className='bg-gray-400/9 w-full items-center border border-white/15 hover:border-white/30 transition text-orange-500 text-sm font-bold py-5 px-15 rounded-2xl hover:scale-102'>
                                    <i className="fa-solid fa-2xl fa-print my-2"></i>
                                    <p className='text-2xl'>+50</p>
                                    <span className='text-gray-500 text-sm'>مقالة</span>
                                </div>
                                <div className='bg-gray-400/9 w-full items-center border border-white/15 hover:border-white/30 transition text-orange-500 text-sm font-bold py-5 px-15 rounded-2xl hover:scale-102'>
                                    <i className="fa-solid fa-2xl fa-users my-2"></i>
                                    <p className='text-2xl'>+10ألف</p>
                                    <span className='text-gray-500 text-sm'>قارئ</span>
                                </div>
                                <div className='bg-gray-400/9 w-full items-center border border-white/15 hover:border-white/30 transition text-orange-500 text-sm font-bold py-5 px-15 rounded-2xl hover:scale-102'>
                                    <i className="fa-solid fa-2xl fa-file my-2"></i>
                                    <p className='text-2xl'>4</p>
                                    <span className='text-gray-500 text-sm'>تصنيفات</span>
                                </div>
                                <div className='bg-gray-400/9 w-full items-center border border-white/15 hover:border-white/30 transition text-orange-500 text-sm font-bold py-5 px-15 rounded-2xl hover:scale-102'>
                                    <i className="fa-solid fa-2xl fa-pen-nib my-2"></i>
                                    <p className='text-2xl'>6</p>
                                    <span className='text-gray-500 text-sm'>كاتب</span>
                                </div>
                            </div>
                        </>
                    }
                </div>

            </section>
        </>
    )
}
