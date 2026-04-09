'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const bestSellers = [
  { id: 1, label: 'Breads', title: 'Choco Lava', price: '$12.00', oldPrice: '$15.00', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=400&auto=format&fit=crop' },
  { id: 2, label: 'Dessert', title: 'Strawberry Cake', price: '$45.00', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop' },
  { id: 3, label: 'Cakes', title: 'Vegan Cake', price: '$35.00', oldPrice: '$40.00', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop' },
  { id: 4, label: 'Cookies', title: 'Nut Cookies', price: '$10.00', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop' },
];

export default function BestSellersSection() {
  return (
    <section
      id="best-sellers"
      className="relative z-10 py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">
              Our Best Items
            </span>
          </div>
          <h2
            className="font-serif text-[clamp(36px,5vw,50px)] font-bold mb-3 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #E4B863 0%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.8))'
            }}
          >
            Best Sellers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={item.id}
              className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group flex flex-col"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#C8973A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-white mb-4">{item.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    {item.oldPrice && <span className="text-white/40 text-sm line-through">{item.oldPrice}</span>}
                    <span className="text-[#C8973A] font-bold text-lg">{item.price}</span>
                  </div>
                  <button className="bg-[#C8973A] hover:bg-[#E4B863] text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
