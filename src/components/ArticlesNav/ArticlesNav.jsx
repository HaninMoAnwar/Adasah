import React, { useState } from 'react'
import posts from "../../assets/posts.json";
import CategoryFilterBtn from '../CategoryFilterBtn/CategoryFilterBtn';
const { categories } = posts;


export default function ArticlesNav({ setDisplayStyle,searchArticles,resetFilters,activeCategory,setActiveCategory,articlesNumber}) {
    const [styleActiveButtonId, setStyleActiveButtonId] = useState(0);

    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-10">
                        <div className="relative w-full lg:w-72">
                            <i className="fa-solid fa-search w-4 h-4 text-gray-500 absolute top-1/2 -translate-y-1/2 right-4"></i>
                            <input onInput={(event)=> searchArticles(event.target.value,false)
                            } type="text" placeholder="ابحث في المقالات..." className="w-full bg-ink-900 border border-white/5 rounded-full pr-11 pl-5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <button onClick={()=>{resetFilters(); setActiveCategory('all')}} className={`${activeCategory === 'all' ?  'bg-orange-500 text-white' : 'bg-ink-900 text-gray-300'} text-sm font-bold px-5 py-2.5 rounded-full`}>جميع المقالات</button>
                            {categories.map((category) => <CategoryFilterBtn categoryItem={category} searchArticles={searchArticles} activeCategory={activeCategory} setActiveCategory={setActiveCategory} key={category.name} />)}
                        </div>

                    </div>

                    <div className="flex items-center justify-between pb-8 border-b border-white/5 mb-10">
                        <p className="text-sm text-gray-400">عرض {articlesNumber} مقالات</p>
                        <div className="flex items-center gap-2">
                            <button onClick={() => { setDisplayStyle('grid'); setStyleActiveButtonId(0); }} className={`${styleActiveButtonId === 0 ? ` bg-orange-500 ` : `bg-ink-900  `}w-10 h-10 rounded-lg flex border  border-white/5 items-center justify-center`}><i className="fa-solid fa-grip w-4 h-4 text-white"></i></button>
                            <button onClick={() => { setDisplayStyle('list'); setStyleActiveButtonId(1); }} className={`${styleActiveButtonId === 1 ? ` bg-orange-500 ` : `bg-ink-900 `}w-10 h-10 rounded-lg flex border border-white/5   items-center justify-center`}><i className="fa-solid fa-list w-4 h-4 text-gray-400"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
