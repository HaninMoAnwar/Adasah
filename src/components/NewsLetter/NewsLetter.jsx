import React from 'react'

export default function NewsLetter() {
    return (
        <>
            <section className="relative">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="bg-ink-900 border border-white/5 rounded-3xl px-8 py-14 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mx-auto mb-6">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <h2 className="text-3xl font-black mb-4">اشترك في نشرتنا الإخبارية</h2>
                        <p className="text-gray-400 mb-8">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
                        <form className="flex flex-col sm:flex-row-reverse gap-3 max-w-xl mx-auto mb-6">
                            <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-8 py-4 rounded-full shrink-0">اشترك الآن</button>
                            <input type="email" placeholder="أدخل بريدك الإلكتروني" className="flex-1 bg-ink-800 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
                        </form>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                            <span>إلغاء الاشتراك في أي وقت</span>
                            <span>•</span>
                            <span>بدون إزعاج</span>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <span>انضم لـ 10,000+ مصور</span>
                                <div className="flex -space-x-2 space-x-reverse">
                                    <div className="w-7 h-7 rounded-full bg-ink-700 border-2 border-ink-900"></div>
                                    <div className="w-7 h-7 rounded-full bg-ink-700 border-2 border-ink-900"></div>
                                    <div className="w-7 h-7 rounded-full bg-ink-700 border-2 border-ink-900"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
