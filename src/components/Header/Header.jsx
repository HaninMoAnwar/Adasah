import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import posts from "../../assets/posts.json"
const {name,tagline} = posts.siteInfo;

export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-ink-950/90 backdrop-blur border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between gap-6">
                    <Link to='' className="flex items-center gap-3 shrink-0">
                        <div className="w-11 h-11 rounded-full border-2 border-orange-500 flex items-center justify-center">
                            <i className="fa-solid fa-camera  text-orange-500"></i>
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold leading-tight">{name}</p>
                            <p className="text-[11px] text-orange-500 leading-tight">{tagline}</p>
                        </div>
                        
                    </Link>

                    <nav className="hidden md:flex items-center gap-2 bg-white/5 rounded-full p-1.5">
                        <NavLink to='' className={({isActive})=>`px-5 py-2.5 rounded-full text-sm ${isActive ? "font-bold bg-orange-500 text-white" : "text-gray-300 hover:text-white transition"}`}>الرئيسية</NavLink>
                        <NavLink to='blog' className={({isActive})=>`px-5 py-2.5 rounded-full text-sm ${isActive ? "font-bold bg-orange-500 text-white" : "text-gray-300 hover:text-white transition"}`}>المدونة</NavLink>
                        {<NavLink to='about' className={({isActive})=>`px-5 py-2.5 rounded-full text-sm ${isActive ? "font-bold bg-orange-500 text-white" : "text-gray-300 hover:text-white transition"}`}>من نحن</NavLink>}
                    </nav>

                    <div className="flex items-center gap-4 shrink-0">
                        <button aria-label="بحث" className="text-gray-300 hover:text-white transition">
                            <i className="fa-solid fa-search w-5 h-5"></i>
                        </button>
                        <Link to='blog' className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-bold px-6 py-3 rounded-full">ابدأ القراءة</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
