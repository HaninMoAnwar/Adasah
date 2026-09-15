import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div
            className="min-h-screen bg-grid text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none">
            {/* Background Radial Glow Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">

                {/* Giant 404 Title */}
                <h1 className="text-[120px] sm:text-[150px] font-black text-orange-500 leading-none tracking-tighter mb-2 drop-shadow-[0_0_30px_rgba(234,88,12,0.15)]">
                    404
                </h1>

                {/* Circular Sad Face Container */}
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-8 relative">
                    {/* Accent dot element floating */}
                    <div className="absolute -top-4 right-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <i className="fa-regular fa-face-frown fa-2xl w-8 h-8 text-orange-500"></i>
                </div>

                {/* Main Error Heading Text */}
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-wide text-white">
                    عفواً! الصفحة غير موجودة
                </h2>

                {/* Explanatory Paragraph Description */}
                <p className="text-sm sm:text-base text-neutral-400 max-w-md mb-10 leading-relaxed font-light px-4">
                    الصفحة التي تبحث عنها غير موجودة أو تم نقلها، دعنا نعيدك إلى المسار الصحيح.
                </p>

                {/* Action Button Layout Rows */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">

                    {/* Primary Action Button: Back to Home */}
                    <Link
                        to=""
                        className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition duration-200 active:scale-95 text-sm w-full sm:w-auto shadow-lg shadow-orange-500/10 cursor-pointer">
                        <i className="fa-regular fa-home fa-xl w-8 h-8 text-white"></i>
                        الذهاب للرئيسية
                    </Link>

                    {/* Secondary Action Button: Browse Articles */}
                    <Link
                        to="/blog"
                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-200 font-semibold px-8 py-3 rounded-full transition duration-200 active:scale-95 text-sm w-full sm:w-auto cursor-pointer">
                        <i className="fa-solid fa-book-open fa-xl w-8 h-8 text-white"></i>
                        تصفح المقالات
                    </Link>

                </div>
            </div>
        </div >
    );
}

