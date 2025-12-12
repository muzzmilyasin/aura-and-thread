import { useState } from 'react';
import { useCart } from '../context/CartContext';

const products = [
    {
        id: 1,
        name: "Classic Trench Coat",
        category: "Outerwear",
        price: "$280",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Silk Button Down",
        category: "Tops",
        price: "$180",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1963&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Pleated Linen Trousers",
        category: "Bottoms",
        price: "$145",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Cashmere Crewneck",
        category: "Tops",
        price: "$195",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Wool Overshirt",
        category: "Outerwear",
        price: "$220",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        name: "Tailored Blazer",
        category: "Outerwear",
        price: "$320",
        image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1935&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Cotton Chinos",
        category: "Bottoms",
        price: "$110",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Everyday Tee",
        category: "Tops",
        price: "$45",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop"
    }
];

const categories = ["All", "Tops", "Bottoms", "Outerwear"];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { addToCart } = useCart();

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">

            {/* Header & Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-3xl font-serif text-primary">The Collection</h1>
                    <p className="text-gray-500 text-sm mt-1">Ethically sourced, thoughtfully designed.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                                ? 'bg-primary text-white border-primary'
                                : 'bg-transparent text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-white/90 backdrop-blur-sm shadow-sm py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-base font-medium text-primary font-serif">{product.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                            </div>
                            <p className="text-sm font-medium text-primary">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-24 text-gray-400">
                    No products found in this category.
                </div>
            )}
        </div>
    );
}
