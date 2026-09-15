import React, { useState } from 'react'
import posts from "../../assets/posts.json";
import Hero from '../../components/Hero/Hero'
import ArticlesNav from '../../components/ArticlesNav/ArticlesNav'
import ArticlesGrid from '../../components/ArticlesGrid/ArticlesGrid'
import { useOutletContext } from 'react-router-dom';
const { posts: articles } = posts;

const pageInfo = {
  pageName: 'blog',
  tag: 'مدونتنا',
  titleStart: 'استكشف',
  highlighted: 'مقالاتنا',
  titleRest: '',
  description: ' اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث'
}
export default function BlogPage() {
  const { activeCategory, setActiveCategory, searchArticles, displayedArticles, setDisplayedArticles } = useOutletContext();

  const [displayStyle, setDisplayStyle] = useState('grid')


  function resetFilters() {
    setDisplayedArticles(articles);
    setActiveCategory('all');
  }

  return (
    <>
      {/* HERO */}
      <Hero pageInfo={pageInfo} />


      {/* <!-- Articles Navbar --> */}
      <ArticlesNav setDisplayStyle={setDisplayStyle} searchArticles={searchArticles} activeCategory={activeCategory} setActiveCategory={setActiveCategory} resetFilters={resetFilters} articlesNumber={displayedArticles.length} />

      {/* Articles Grid  */}
      <ArticlesGrid displayStyle={displayStyle} articles={displayedArticles} resetFilters={resetFilters} />

    </>
  )
}
