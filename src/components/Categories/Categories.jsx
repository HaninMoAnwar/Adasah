import React from 'react'
import posts from '../../assets/posts.json'
import CategoryCard from '../CategoryCard/CategoryCard';
const {categories} = posts;

const categoryIcons = ['sliders','mountain','user ','zap','camera'];
export default function Categories() {
    return (
        <>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-6 py-24 text-center">
                    <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs text-gray-300 mb-6">
                        التصنيفات <span className="badge-dot"></span><span className="badge-dot opacity-50"></span>
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black mb-3">استكشف حسب الموضوع</h2>
                    <p className="text-gray-400 mb-14">اعثر على محتوى مصمم حسب اهتماماتك</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {categories.map((categoryItem,idx) => <CategoryCard  category={categoryItem} icon={categoryIcons[idx]} key={categoryItem.name}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}
