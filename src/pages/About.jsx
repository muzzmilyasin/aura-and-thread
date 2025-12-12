export default function About() {
    return (
        <div className="w-full flex flex-col md:flex-row min-h-[90vh]">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-screen overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&auto=format&fit=crop"
                    alt="Fabric texture and nature"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex items-center bg-[#F9F9F7] px-6 py-16 md:p-24 lg:p-32">
                <div className="max-w-xl space-y-8">
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium tracking-widest uppercase text-accent">Since 2025</h4>
                        <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                            Craftsmanship <br /> & Consciousness
                        </h1>
                    </div>

                    <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                        <p>
                            Aura & Thread was born from a desire to slow down. In a world of fast fashion and fleeting trends, we chose a different path—one of intention, quality, and timeless elegance.
                        </p>
                        <p>
                            We believe that luxury lies in the details. From the ethically sourced organic cotton to the hand-finished seams, every piece is a testament to the art of tailoring. Our collections are designed to be cherished, worn, and loved for years to come.
                        </p>
                    </div>

                    <div className="pt-4 flex space-x-12">
                        <div>
                            <p className="font-serif text-3xl text-primary">100%</p>
                            <p className="text-sm text-gray-500 mt-1">Sustainable Materials</p>
                        </div>
                        <div>
                            <p className="font-serif text-3xl text-primary">0%</p>
                            <p className="text-sm text-gray-500 mt-1">Plastic Packaging</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
