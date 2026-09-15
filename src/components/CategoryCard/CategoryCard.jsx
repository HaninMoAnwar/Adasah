import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category,icon }) {
    const {name,count} = category;
    return (
        <>  
            <Link to='blog' className="group bg-ink-900 border border-white/5 hover:border-orange-500/40 hover:bg-linear-to-tl from-yellow-300 to-orange-500 to transition duration-300 rounded-2xl p-6 text-right">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-6 group-hover:bg-white/8 ">
                    <i className={`fa-solid fa-${icon} w-6 h-6 text-orange-500 group-hover:text-white `}></i>
                </div>
                <p className="font-bold text-lg mb-1 group-hover:text-white">{name}</p>
                <p className="text-gray-500 text-sm group-hover:text-white">{count} مقالة</p>
            </Link>
        </>
    )
}
