import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import posts from "../../assets/posts.json";

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const { posts: articles } = posts;

export default function Layout() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [displayedArticles, setDisplayedArticles] = useState(articles);

    function searchArticles(searchInput, isSearchByCategory) {
        let copyArticles = structuredClone(articles);
        if (isSearchByCategory) {
            copyArticles = copyArticles.filter((artcileItem) => artcileItem.category.includes(searchInput));

        }
        else {
            copyArticles = copyArticles.filter((artcileItem) => artcileItem.title.includes(searchInput) || artcileItem.excerpt.includes(searchInput))

        }
        setDisplayedArticles(copyArticles);

    }
    return (
        <>
            {/* Header */}
            <Header />

            {/* Outlet */}
            <Outlet context={{ activeCategory, setActiveCategory, searchArticles, displayedArticles, setDisplayedArticles }} />
            {/* Footer */}
            <Footer setActiveCategory={setActiveCategory} searchArticles={searchArticles} />
        </>
    )
}
