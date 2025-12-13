import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();

    const featured = [
        {
            id: 1,
            name: "The Classic Trench",
            price: "$280",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Cashmere Knit",
            price: "$195",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Linen Trousers",
            price: "$145",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop"
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section - Single Image with Smooth Animation */}
            <section className="relative min-h-screen w-full overflow-hidden">
                {/* Animated Background Image */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 animate-ken-burns">
                        <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&auto=format&fit=crop&q=80"
                            alt="Fashion Collection"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* Gradient Overlays for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl space-y-8 animate-fade-in">
                            {/* Accent Line with Animation */}
                            <div className="w-20 h-0.5 bg-accent animate-expand-width" />

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
                                    Timeless
                                    <span className="block text-white/90 italic mt-2">Elegance</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-xl">
                                    Where sustainable luxury meets minimalist design. Curated pieces that transcend seasons.
                                </p>
                            </div>

                            {/* Stats - Subtle Animation */}
                            <div className="flex gap-12 py-6 border-t border-white/20">
                                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                    <p className="text-4xl font-serif text-white">100%</p>
                                    <p className="text-sm text-white/60 mt-1 uppercase tracking-wider">Sustainable</p>
                                </div>
                                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                    <p className="text-4xl font-serif text-white">8+</p>
                                    <p className="text-sm text-white/60 mt-1 uppercase tracking-wider">Collections</p>
                                </div>
                                <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                                    <p className="text-4xl font-serif text-white">2025</p>
                                    <p className="text-sm text-white/60 mt-1 uppercase tracking-wider">Est.</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="group relative bg-white text-primary px-10 py-5 text-sm uppercase tracking-widest font-medium overflow-hidden transition-all duration-500 hover:bg-accent hover:text-white"
                                >
                                    <span className="relative z-10">Explore Collection</span>
                                    <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                                <button
                                    onClick={() => navigate('/about')}
                                    className="border-2 border-white text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    Our Story
                                </button>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="hidden md:flex items-center gap-3 pt-12 text-white/60 animate-bounce-slow">
                                <div className="w-px h-16 bg-white/40" />
                                <span className="text-xs uppercase tracking-widest">Scroll to discover</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-serif text-primary">Curated Selection</h2>
                    <button
                        onClick={() => navigate('/shop')}
                        className="hidden md:flex items-center text-sm font-medium hover:text-accent transition-colors"
                    >
                        View All <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featured.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigate('/shop')}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </div>
                            <h3 className="text-lg font-serif text-primary">{item.name}</h3>
                            <p className="text-gray-500 font-light mt-1">{item.price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button
                        onClick={() => navigate('/shop')}
                        className="flex items-center justify-center mx-auto text-sm font-medium hover:text-accent transition-colors"
                    >
                        View All <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </section>

            {/* Manifesto / Slow Fashion Snippet */}
            <section className="bg-[#F2F2F0] py-24 px-4 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-primary italic">
                        "Beauty in simplicity."
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-light">
                        We believe in slow fashion—pieces designed to last a lifetime, not just a season.
                        Our commitment to sustainability and craftsmanship ensures that every garment tells a story of quality and care.
                    </p>
                    <button
                        onClick={() => navigate('/about')}
                        className="text-sm border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors uppercase tracking-widest mt-4"
                    >
                        Read Our Story
                    </button>
                </div>
            </section>
        </div>
    );
}
