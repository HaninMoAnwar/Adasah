import React from 'react'

export default function CategoryFilterBtn({categoryItem,searchArticles,activeCategory,setActiveCategory}) {
    
    return (
        <>
            <button onClick={()=>{searchArticles(categoryItem.name,true);setActiveCategory(categoryItem.name)}} className={`${activeCategory === categoryItem.name ? 'bg-orange-500 text-white' : 'bg-ink-900 text-gray-300'} border border-white/5 hover:border-white/15 transition  text-sm px-5 py-2.5 rounded-full`}>{categoryItem.name}</button>

        </>
    )
}
