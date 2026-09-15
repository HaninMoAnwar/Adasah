import React from 'react'
import { Link } from 'react-router-dom'

import posts from "../../assets/posts.json";
const { social } = posts.siteInfo;
const { categories } = posts;

export default function Footer({ setActiveCategory, searchArticles }) {
    return (
        <>
            <footer className="border-t border-white/5 mt-8">
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center font-black">ع</span>
                            <span className="font-extrabold text-lg">عدسة</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-6">مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
                        <div className="flex items-center gap-3">
                            <a href={social.youtube} target="_blank" className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"><i className="fa-brands fa-xl fa-youtube w-4 h-4"></i></a>
                            <a href={social.linkedin} className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"><i className="fa-brands fa-xl fa-linkedin w-4 h-4"></i></a>
                            <a href={social.github} className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"><i className="fa-brands fa-xl fa-github w-4 h-4"></i></a>
                            <a href={social.twitter} className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"><i className="fa-brands fa-xl fa-twitter w-4 h-4"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-1">استكشف</h4>
                        <div className="w-8 h-0.5 bg-orange-500 mb-5"></div>
                        <ul className="space-y-4 text-sm text-gray-400 ">
                            <li><Link to='' className="hover:text-orange-500 transition">الرئيسية</Link></li>
                            <li><Link to='blog' className="hover:text-orange-500 transition">المدونة</Link></li>
                            {<li><Link to='about' className="hover:text-orange-500 transition">من نحن</Link></li>}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-1">التصنيفات</h4>
                        <div className="w-8 h-0.5 bg-orange-500 mb-5"></div>
                        <div className="space-y-1 text-sm text-gray-400 flex flex-col gap-2 w-full">
                            {categories.map((categoryItem) => <button className= 'text-right' key={categoryItem.name} onClick={() => { setActiveCategory(categoryItem.name); searchArticles(categoryItem.name, true) }}><Link to='blog' className="hover:text-orange-500 transition">{categoryItem.name}</Link></button>)}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-1">ابقَ على اطلاع</h4>
                        <div className="w-8 h-0.5 bg-orange-500 mb-5"></div>
                        <p className="text-gray-500 text-sm mb-5">اشترك للحصول على أحدث المقالات والتحديثات.</p>
                        <input type="email" placeholder="أدخل بريدك الإلكتروني" className="w-full bg-ink-800 border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-gray-500 mb-3 focus:outline-none focus:border-orange-500" />
                        <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-3.5 rounded-full">اشترك</button>
                    </div>


                </div>
                <div className="border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                        <p>© 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-orange-500 transition">شروط الخدمة</a>
                            <a href="#" className="hover:text-orange-500 transition">سياسة الخصوصية</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
