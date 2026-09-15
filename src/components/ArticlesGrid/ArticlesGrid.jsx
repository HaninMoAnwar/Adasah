import React, { useState } from 'react'
import ArtSmallCard from '../ArtSmallCard/ArtSmallCard';
import ArtWideCard from '../ArtWideCard/ArtWideCard';

const articlesPerPage = 6;

export default function ArticlesGrid({ displayStyle, articles ,resetFilters}) {
    const pagesNumber = Math.ceil(articles.length / articlesPerPage);
    const [pageNumber, setPageNumber] = useState('1');
    const [activeButtonId, setActiveButtonId] = useState(0);

    function PaginationArrowsUpdate(pageCount) {
        if (pageCount > 0 && pageCount <= pagesNumber) {

            setPageNumber(pageCount);

            setActiveButtonId(pageCount - 1);
        }
    }
    if (articles.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-100 bg-[#0c0c0e] text-white p-6 text-center">

                {/* Sad Face Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6">
                    <i className="fa-regular fa-face-frown fa-2xl"></i>
                </div>

                {/* Main Title */}
                <h2 className="text-xl font-bold mb-2 tracking-wide">
                    لا توجد مقالات
                </h2>

                {/* Subtitle / Description */}
                <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
                    حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
                </p>

                {/* Reset Filters Button */}
                <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 bg-[#ff6b00] hover:bg-[#e05e00] text-white font-medium px-6 py-2.5 rounded-full transition active:scale-98 text-sm cursor-pointer"
                >
                    <i className="fa-solid fa-repeat"></i>
                    إعادة تعيين الفلاتر
                </button>

            </div>
        );
    }
    else {

        return (
            <>
                <section id="articles" className="relative max-w-6xl mx-auto px-6">

                    {/* <!-- ARTICLE GRID --> */}
                    {displayStyle === 'grid' &&
                        <div className="grid md:grid-cols-3 gap-6 mb-14">
                            {articles.slice(
                                (Number(pageNumber) - 1) * articlesPerPage, ((Number(pageNumber) - 1) * articlesPerPage + articlesPerPage))
                                .map((artcleItem) =>
                                    <ArtSmallCard articleItem={artcleItem} key={artcleItem.id} />)}
                        </div>
                    }
                    {

                        displayStyle === 'list' && <div className="space-y-6 mb-5">
                            {articles.slice(
                                (Number(pageNumber) - 1) * articlesPerPage, ((Number(pageNumber) - 1) * articlesPerPage + articlesPerPage))
                                .map((artcleItem) =>
                                    <ArtWideCard article={artcleItem} isFeatered={false} key={artcleItem.id} />)}
                        </div>


                    }
                    {/* <!-- PAGINATION --> */}
                    <div className="flex flex-col items-center gap-4 pb-20">
                        <div className="flex items-center gap-2">

                            <button onClick={() => { PaginationArrowsUpdate(Number(pageNumber) - 1) }} className="w-10 h-10 rounded-full bg-ink-900 border border-white/5 hover:border-white/15 transition flex items-center justify-center"><i className="fa-solid fa-chevron-right w-4 h-4"></i></button>
                            {[...Array(pagesNumber)].map(
                                (item, idx) =>
                                    <button
                                        key={idx}
                                        onClick={
                                            (event) => { setPageNumber(event.target.innerHTML); setActiveButtonId(idx) }}
                                        className={`w-10 h-10 rounded-full ${activeButtonId == idx ? `bg-orange-500 text-while` : ` bg-ink-900 border border-white/5 hover:border-white/15`} transition text-sm`}>{idx + 1}</button>
                            )}

                            <button onClick={() => { PaginationArrowsUpdate(Number(pageNumber) + 1) }} className="w-10 h-10 rounded-full bg-ink-900 border border-white/5 hover:border-white/15 transition flex items-center justify-center"><i className="fa-solid fa-chevron-left w-4 h-4"></i></button>
                        </div>
                        <p className="text-sm text-gray-500">صفحة {pageNumber} من {pagesNumber}</p>
                    </div>
                </section >
            </>
        )
    }

}
