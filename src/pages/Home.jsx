import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();
    // Mock data for featured collection
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
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2070&auto=format&fit=crop"
                        alt="Hero Background"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-6xl lb:text-7xl font-serif text-white tracking-wide">
                            Timeless Essentials
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-light tracking-wider max-w-xl mx-auto">
                            Elevate your everyday with sustainable luxury and minimalist design.
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => navigate('/shop')}
                                className="bg-white text-primary px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-background transition-colors duration-300"
                            >
                                Shop Now
                            </button>
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
