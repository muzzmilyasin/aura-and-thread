export default function Journal() {
    const articles = [
        {
            id: 1,
            title: "The Art of Minimalism",
            date: "October 12, 2025",
            excerpt: "Why less is more, and how to cultivate a wardrobe that brings you peace and clarity.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Fabric Care 101",
            date: "September 28, 2025",
            excerpt: "Extend the life of your garments with our guide to washing, drying, and storing natural fibers.",
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Summer Layering",
            date: "September 15, 2025",
            excerpt: "Transitioning your look from the heat of the day to the cool of the evening with style.",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-serif text-primary">The Journal</h1>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Thoughts on design, sustainability, and living well.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {articles.map((article) => (
                    <article key={article.id} className="flex flex-col group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-medium text-accent uppercase tracking-widest mb-2">{article.date}</p>
                            <h2 className="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-gray-500 font-light leading-relaxed text-sm">
                                {article.excerpt}
                            </p>
                        </div>
                        <div className="mt-6">
                            <button className="text-sm font-medium border-b border-primary/50 pb-0.5 hover:text-accent hover:border-accent transition-colors">
                                Read Article
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
