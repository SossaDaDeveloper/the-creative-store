import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

const PRODUCTS = [
  { id: 1, name: 'Rainbow Wordmark Tee', price: 20, image: 'https://picsum.photos/seed/product1/800/800' },
  { id: 2, name: 'Logo Dad Hat', price: 20, image: 'https://picsum.photos/seed/product2/800/800' },
  { id: 3, name: 'Dimensions Tech Tee', price: 25, image: 'https://picsum.photos/seed/product3/800/800' },
  { id: 4, name: 'Hug Contents Tee', price: 20, image: 'https://picsum.photos/seed/product4/800/800' },
  { id: 5, name: 'Elevated Workflows Tee', price: 25, image: 'https://picsum.photos/seed/product5/800/800' },
  { id: 6, name: 'Arrow Pattern Socks', price: 10, image: 'https://picsum.photos/seed/product6/800/800' },
  { id: 7, name: 'System Logo Hoodie', price: 45, image: 'https://picsum.photos/seed/product7/800/800' },
  { id: 8, name: 'Classic Symbol Tee', price: 18, image: 'https://picsum.photos/seed/product8/800/800' },
  { id: 9, name: 'Detach Instance Tee', price: 20, image: 'https://picsum.photos/seed/product9/800/800' },
  { id: 10, name: 'Bezier Logo Crew', price: 25, image: 'https://picsum.photos/seed/product10/800/800' },
  { id: 11, name: 'Browser Interface Tee', price: 25, image: 'https://picsum.photos/seed/product11/800/800' },
  { id: 12, name: 'Wordmark Longsleeve', price: 18, image: 'https://picsum.photos/seed/product12/800/800' },
];

export default function App() {
  const [cartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFC500] border-b border-black/10">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="px-4 py-1 border border-black rounded-full text-xs font-semibold hover:bg-black hover:text-white transition-colors">SHOP</button>
            <button className="px-4 py-1 border border-black rounded-full text-xs font-semibold hover:bg-black hover:text-white transition-colors">ABOUT</button>
            <Search className="w-4 h-4 cursor-pointer" />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 font-display text-xl font-bold tracking-tighter sm:text-2xl">
            THE CREATIVE STORE
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-black rounded-full text-xs font-semibold cursor-pointer">
              UNITED STATES <ChevronDown className="w-3 h-3" />
            </div>
            <div className="px-4 py-1 border border-black rounded-full text-xs font-semibold flex items-center gap-2">
              CART <span className="bg-black text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]">{cartCount}</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FFC500] pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative pt-10 h-[500px] flex items-center justify-center">
            {/* Geometric Frames */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] h-[70%] bg-white/10 rounded-r-full overflow-hidden blur-sm" />
            
            <div className="relative z-10 w-full max-w-4xl h-full flex gap-4 items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-1/2 h-[90%] rounded-[40px] overflow-hidden border-2 border-black"
              >
                <img 
                  src="https://picsum.photos/seed/lifestyle1/800/1000" 
                  alt="Lifestyle" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-1/2 h-[90%] rounded-full overflow-hidden border-2 border-black"
              >
                <img 
                  src="https://picsum.photos/seed/detail1/800/1000" 
                  alt="Detail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Floating Donated Badge */}
            <motion.div 
              initial={{ rotate: 12, scale: 0 }}
              animate={{ rotate: 12, scale: 1 }}
              transition={{ type: 'spring', delay: 0.5 }}
              className="absolute bottom-4 right-10 md:right-20 z-20 group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-2 border-black flex flex-col items-center justify-center p-2 text-center text-[9px] font-black leading-tight group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <div className="uppercase tracking-tighter">Donated 100%</div>
                <div className="text-2xl my-0.5">🤝</div>
                <div className="uppercase tracking-tighter">Of Profits</div>
              </div>
            </motion.div>
          </div>

          {/* Large Animated Marquee Text */}
          <div className="mt-20 overflow-hidden select-none">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 pr-10 font-display text-5xl md:text-8xl font-black tracking-tighter uppercase text-black">
                  <span>Creative's</span>
                  <span className="text-4xl text-[#A5A5FF]">✦</span>
                  <span>Collection</span>
                  <span className="text-4xl text-[#FF5014]">⧖</span>
                  <span>Of</span>
                  <span className="relative">
                    Layers
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-black"></span>
                  </span>
                  <span className="text-4xl text-[#00D066]">⚡</span>
                  <span>And</span>
                  <span className="relative">
                    Components
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-black/30"></span>
                  </span>
                  <span className="text-4xl text-[#FFC500] stroke-black stroke-2">✶</span>
                  <span>For You</span>
                  <span className="text-4xl text-[#A5A5FF]">◌</span>
                  <span>And</span>
                  <span className="text-4xl text-[#FF5014]">⌇</span>
                  <span>Your</span>
                  <span className="text-4xl text-[#00D066]">▲</span>
                  <span>Friends</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-4 border border-transparent group-hover:border-black/10 transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-semibold text-sm leading-tight text-black/80">{product.name}</h3>
                  <span className="font-bold text-sm text-black">${product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFC500] pt-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-32 h-16 bg-[#A5A5FF] border border-black flex items-center justify-center font-display font-bold text-lg">THE</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-32 bg-[#A5A5FF] border border-black flex items-center justify-center [writing-mode:vertical-rl] rotate-180 font-display font-bold text-lg uppercase tracking-widest">Creative</div>
                <div className="w-32 h-16 bg-[#A5A5FF] border border-black flex items-center justify-center font-display font-bold text-lg">STORE</div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tighter leading-none mb-4">
                Objects<br />That Inspire.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider">
              <a href="#" className="hover:underline">Privacy & Terms</a>
              <a href="#" className="hover:underline">Contact Us</a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                <a href="#" className="flex items-center gap-1 hover:underline">Creative <ArrowUpRight className="w-3 h-3" /></a>
                <a href="#" className="flex items-center gap-1 hover:underline">Twitter <ArrowUpRight className="w-3 h-3" /></a>
                <a href="#" className="flex items-center gap-1 hover:underline">Instagram <ArrowUpRight className="w-3 h-3" /></a>
                <a href="#" className="flex items-center gap-1 hover:underline">Youtube <ArrowUpRight className="w-3 h-3" /></a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex justify-end">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="bg-white border-y border-black py-4 select-none">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 pr-10 font-display text-xs font-bold uppercase tracking-[0.2em]">
                <span>Creative's</span>
                <span className="text-lg">↝</span>
                <span>Marvelously</span>
                <span className="text-lg">●</span>
                <span>Considered</span>
                <span className="text-lg">◑</span>
                <span>Collection</span>
                <span className="text-lg">⧖</span>
                <span>Of</span>
                <span className="text-lg">◆</span>
                <span>Objects</span>
                <span className="text-lg">⬢</span>
                <span>For</span>
                <span className="text-lg">⌇</span>
                <span>Our</span>
                <span className="text-lg">◌</span>
                <span>Time</span>
                <span className="text-lg">↝</span>
                <span>On</span>
                <span className="text-lg">↝</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
