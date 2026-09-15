import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export default function DetailContent({ article }) {
    const { readTime, author, excerpt, tags, content, date } = article;
    const contentMarkdownComponent = {
        h2: ({ node, ...props }) => (
            <>
                <div id={props.children} className='flex items-center gap-3 scroll-mt-24 scroll-smooth'>
                    <i className='fa-solid fa-camera fa-2xl border  border-orange-500 rounded-full text-orange-500 p-2'></i>
                    <h2 className='text-3xl font-extrabold text-white mt-4' {...props} />
                </div>
            </>
        ),
        p: ({ node, ...props }) => (
            <p className='leading-loose font-light text-xl' {...props} />
        ),
    };
    const titlesMarkdownComponent = {
        h2: ({ node, ...props }) => (
            <>
                <div className='flex items-center gap-3 p-2 rounded-2xl [counter-increment:h2-counter] hover:bg-orange-500/9 group duration-300'>
                    <div className="w-8 h-8 rounded-lg bg-white/5 text-neutral-400 flex items-center justify-center text-xs font-bold before:content-[counter(h2-counter)] shrink-0 group-hover:text-orange-500 duration-300"></div>
                    <a href={`#${props.children}`} className='text-l font-light text-white group-hover:text-orange-500 duration-300' {...props} />
                </div>
            </>
        ),
        p: ({ node, ...props }) => (
            <p className='hidden' {...props} />
        ),
    };
    return (
        <>
            <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* RIGHT COLUMN: CORE RICH TEXT ENGINE CONTENT (SPAN-8) */}
                    <main className="lg:col-span-8 space-y-8 order-2 lg:order-1">


                        {/* Top Introductory Callout Box Section Element */}
                        <div className="bg-[#121214] border-r-4 border-orange-500 rounded-xl p-5 text-neutral-200 text-xl leading-relaxed shadow-sm italic font-medium bg-linear-to-l from-orange-500/2 to-transparent">
                            "{excerpt}"
                        </div>

                        {/* Markdown Text Body Area Block Simulation fields */}
                        <div className="text-neutral-300 text-sm leading-relaxed space-y-10">

                            <ReactMarkdown components={contentMarkdownComponent}>{content}</ReactMarkdown>
                        </div>

                        {/* 3. TAGS PANEL CARD */}
                        <div className="bg-[#121214] border border-white/5 rounded-2xl p-5 space-y-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-neutral-400">
                                <i className="fa-solid fa-tags text-orange-500"></i>
                                <h3>الوسوم</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-white/2 hover:bg-white/5 border border-white/5 text-neutral-400 px-4 py-2 rounded-xl transition duration-200 select-none">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 4. SOCIAL MEDIA SHARE CARD */}
                        <div className="bg-[#121214] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                                <i className="fa-solid fa-share-nodes text-orange-500"></i>
                                <h3>شارك المقال</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-sm transition text-neutral-300 hover:text-white cursor-pointer"><i className="fa-brands fa-x-twitter"></i></button>
                                <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-sm transition text-neutral-300 hover:text-white cursor-pointer"><i className="fa-brands fa-linkedin-in"></i></button>
                                <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-sm transition text-neutral-300 hover:text-white cursor-pointer"><i className="fa-solid fa-link"></i></button>
                                <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-sm transition text-neutral-300 hover:text-white cursor-pointer"><i className="fa-regular fa-comment"></i></button>
                            </div>
                        </div>

                        {/* 5. DETAILED AUTHOR CARD PANEL */}
                        <div className="bg-[#121214] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                            <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-2xl object-cover ring-4 ring-orange-500/15" />
                            <div className="text-center sm:text-right space-y-1.5 w-full">
                                <span className="text-[10px] text-orange-500 font-bold bg-orange-500/10 px-2.5 py-1 rounded-md inline-block mb-1">كاتب المقال</span>
                                {<h3 className="text-lg font-extrabold text-white">{author.name}</h3>}
                                {<p className="text-xs text-neutral-400 font-medium">{author.role}</p>}
                            </div>
                        </div>
                    </main>

                    {/* LEFT COLUMN: THE ACCESSIBLE PERSISTENT SIDEBAR BADGES PANELS (SPAN-4) */}
                    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-6 order-1 lg:order-2">

                        {/* Table of Contents Wrapper Card */}
                        <div className="bg-[#121214] border border-white/5 rounded-2xl p-5 shadow-sm">
                            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                <h3 className="text-base font-bold text-neutral-200">محتويات المقال</h3>
                            </div>
                            <ul className="space-y-1 [counter-reset:h2-counter]">

                                <ReactMarkdown components={titlesMarkdownComponent}>{content}</ReactMarkdown>
                            </ul>
                        </div>

                        {/* Metrics Dual Floating Square Cards Panel Component */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#121214] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:border-orange-500/20 transition">
                                <i className="fa-regular fa-clock fa-2xl mb-1 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] text-orange-500"></i>
                                {<span className="text-sm font-bold text-neutral-200">{readTime}</span>}
                                <span className="text-xs text-neutral-500 mt-0.5">وقت القراءة</span>
                            </div>
                            <div className="bg-[#121214] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:border-orange-500/20 transition">

                                <i className="fa-solid fa-calendar fa-2xl mb-1 text-orange-500"></i>
                                <span className="text-sm font-bold text-neutral-200">{date}</span>
                                <span className="text-xs text-neutral-500 mt-0.5">تاريخ النشر</span>
                            </div>
                        </div>

                        {/* Newsletter Side Action Signup Box Card */}
                        <div className="bg-linear-to-br from-[#121214] via-[#121214] to-orange-500/3 border border-white/5 rounded-2xl p-5 text-center relative overflow-hidden">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4 text-xl">
                                ✉️
                            </div>
                            <h4 className="text-base font-bold mb-1">لا تفوت جديدنا</h4>
                            <p className="text-xs text-neutral-400 mb-4 max-w-50 mx-auto leading-relaxed">اشترك للحصول على أحدث المقالات والنصائح الاحترافية.</p>
                            <Link to='blog'><button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-xl text-xs transition shadow-md shadow-orange-500/10 cursor-pointer">
                                تصفح المزيد
                            </button></Link>
                        </div>

                    </aside>

                </div>
            </section>
        </>
    )
}
