import React from 'react'
import posts from "../../assets/posts.json";
import ArtSmallCard from '../ArtSmallCard/ArtSmallCard';
const { posts: articles } = posts;
const latestArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

export default function LatestArt() {

    return (
        <>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs text-gray-300 mb-6">
                                الأحدث <span className="badge-dot"></span><span className="badge-dot opacity-50"></span>
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black mb-3">أحدث المقالات</h2>
                            <p className="text-gray-400">محتوى جديد طازج من المطبعة</p>
                        </div>
                        <a href="blog.html" className="shrink-0 inline-flex items-center gap-2 text-white text-sm font-bold">
                            عرض جميع المقالات
                            <i className="fa-solid fa-arrow-left w-4 h-4"></i>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-14">
                        {latestArticles.map((article) => <ArtSmallCard articleItem={article} key={article.id} />)}
                    </div>



                    {/* <article className="bg-ink-900 border border-white/5 rounded-2xl overflow-hidden">
                            <div className="relative h-52">
                                <img src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="قواعد التكوين الفوتوغرافي" />
                                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full">تقنيات</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                    <span>٥ يناير ٢٠٢٦</span> <span>•</span> <i className="fa-regular fa-clock w-3.5 h-3.5"></i> 9 دقائق للقراءة
                                </div>
                                <h3 className="font-black text-lg mb-2 leading-snug">قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية</h3>
                                <p className="text-gray-400 text-sm">تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.</p>
                            </div>
                        </article>

                        <article className="bg-ink-900 border border-white/5 rounded-2xl overflow-hidden">
                            <div className="relative h-52">
                                <img src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="أساسيات إعدادات الكاميرا" />
                                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full">تقنيات</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                    <span>٨ يناير ٢٠٢٦</span> <span>•</span> <i className="fa-regular fa-clock w-3.5 h-3.5"></i> 7 دقائق للقراءة
                                </div>
                                <h3 className="font-black text-lg mb-2 leading-snug">أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي</h3>
                                <p className="text-gray-400 text-sm">افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.</p>
                            </div>
                        </article> */}

                </div>
            </section>
        </>
    )
}
