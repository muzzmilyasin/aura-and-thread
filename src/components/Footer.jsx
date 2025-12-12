import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand & Socials */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="font-serif text-xl tracking-wide text-primary">Aura & Thread</h3>
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            Timeless essentials for the modern minimalist.
                            Crafted with care, designed to last.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="font-medium text-primary tracking-wider uppercase text-xs">Explore</h4>
                        <div className="flex flex-col space-y-2 items-center md:items-start text-sm text-gray-500">
                            <Link to="/shop" className="hover:text-primary transition-colors">Collection</Link>
                            <Link to="/about" className="hover:text-primary transition-colors">Our Story</Link>
                            <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
                            <a href="#" className="hover:text-primary transition-colors">Sustainability</a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="font-medium text-primary tracking-wider uppercase text-xs">Newsletter</h4>
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <div className="flex w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-50 border-b border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="text-xs uppercase tracking-widest font-medium ml-2 hover:text-accent transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; 2025 Aura & Thread. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
