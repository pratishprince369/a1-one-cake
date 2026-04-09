'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const collections = [
  { id: 1, title: 'Cookies', type: 'large', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Bread', type: 'small', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop' },
  { id: 3, title: 'Pastry', type: 'small', image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400&auto=format&fit=crop' },
  { id: 4, title: 'Custom Cakes', type: 'small', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop' },
];

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="relative z-10 py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Subtle overlay for text readability so video stays visible */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C8973A]" />
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
            Our Collections
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#C8973A]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left large column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
              <h3 className="text-white font-serif text-3xl font-bold tracking-wide">{collections[0].title}</h3>
            </div>
          </motion.div>

          {/* Right smaller columns */}
          <div className="flex flex-col gap-6">
            {collections.slice(1).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={item.id}
                className="relative h-[200px] md:h-auto md:flex-1 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-white font-serif text-2xl font-bold tracking-wide text-center w-full">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
