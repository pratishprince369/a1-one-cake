'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop' },
  { id: 2, src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop' },
  { id: 3, src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop' },
  { id: 4, src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop' },
  { id: 5, src: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=600&auto=format&fit=crop' },
  { id: 6, src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&auto=format&fit=crop' },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative z-10 py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

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
              color: '#FFFFFF',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.8))'
            }}
          >
            Our Gallery
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#C8973A]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {galleryImages.map((img, index) => (
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               viewport={{ once: true }}
               key={img.id}
               className="relative aspect-square w-full sm:w-[90%] md:w-[85%] mx-auto bg-white/5 backdrop-blur-md rounded-[40px] overflow-hidden border border-white/10 group"
             >
               <Image
                 src={img.src}
                 alt={`Gallery Image ${img.id}`}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                 unoptimized
               />
               {/* Hover overlay */}
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full border border-white/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-50 group-hover:scale-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
