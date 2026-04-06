'use client';

import { motion } from 'motion/react';

const menuPacks = [
  {
    name: 'LIL PACK',
    donuts: '6 Mini Donuts',
    desc: 'Perfect for a solo treat or a quick snack. Six golden mini donuts with your choice of glaze and toppings.',
    price: 'From $5',
    badge: 'Starter',
    popular: false,
    icon: '🍩',
  },
  {
    name: 'PETITE PACK',
    donuts: '12 Mini Donuts',
    desc: 'Great for sharing or enjoying a variety of flavours. Twelve warm, fresh mini donuts customized just for you.',
    price: 'From $9',
    badge: 'Fan Favourite',
    popular: true,
    icon: '🍩🍩',
  },
  {
    name: 'JUMBO PACK',
    donuts: '24 Mini Donuts',
    desc: 'Perfect for groups, parties, or when you just can\'t stop at twelve. Full flavour experience, jumbo style.',
    price: 'From $16',
    badge: 'Best Value',
    popular: false,
    icon: '🍩🍩🍩',
  },
];

const flavours = [
  'Classic Glazed', 'Cinnamon Sugar', 'Chocolate Dip', 'Strawberry Cream', 
  'Cookies & Cream', 'Maple Drizzle', 'Caramel Swirl', 'Birthday Cake',
  'Nutella Drizzle', 'Matcha', 'Lemon Zest', 'Funnel Cake'
];

function PackCard({ pack, index }: { pack: typeof menuPacks[0]; index: number }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative group cursor-pointer"
    >
      <div
        className="relative p-8 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden"
        style={{
          background: pack.popular ? 'rgba(200,151,58,0.08)' : 'rgba(10,10,10,0.85)',
          borderColor: pack.popular ? 'rgba(200,151,58,0.5)' : 'rgba(200,151,58,0.15)',
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,151,58,0.12), transparent 70%)' }}
        />

        {/* Popular badge */}
        {pack.popular && (
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full font-sans text-[9px] font-bold tracking-[0.15em] uppercase"
            style={{ background: 'linear-gradient(135deg, #E4B863, #C8973A)', color: '#000' }}
          >
            ★ {pack.badge}
          </div>
        )}
        {!pack.popular && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full border border-[rgba(200,151,58,0.3)] font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-[#C8973A]">
            {pack.badge}
          </div>
        )}

        {/* Icon */}
        <div className="text-4xl mb-5">{pack.icon}</div>

        {/* Name */}
        <h3 className="font-serif text-[28px] md:text-[32px] font-black text-white mb-1 group-hover:text-[#E4B863] transition-colors duration-300">
          {pack.name}
        </h3>
        <p className="font-sans text-[12px] font-semibold text-[#C8973A] tracking-[0.12em] uppercase mb-4">{pack.donuts}</p>

        {/* Desc */}
        <p className="font-sans text-[13px] text-white/55 leading-relaxed mb-6">{pack.desc}</p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span
            className="font-serif text-[32px] font-black"
            style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {pack.price}
          </span>
          <a
            href="#order"
            className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black px-5 py-2.5 rounded-full transition-all duration-300 group-hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #E4B863, #C8973A)' }}
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function DripsSection() {
  return (
    <section
      id="menu"
      className="relative z-10 py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: 'rgba(0,0,0,0.82)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(200,151,58,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-[#C8973A]" />
          <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">Our Menu</span>
          <div className="w-8 h-[1px] bg-[#C8973A]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(36px,6vw,68px)] font-black text-white mb-4"
        >
          Choose Your{' '}
          <span style={{
            background: 'linear-gradient(135deg, #E4B863, #C8973A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Pack
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="font-sans text-[15px] font-light text-white/55 max-w-[480px] mx-auto leading-[1.85]"
        >
          Every pack is made fresh to order with your choice of flavours and toppings. No two orders are ever the same.
        </motion.p>
      </div>

      {/* Packs grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto relative z-10 mb-16">
        {menuPacks.map((pack, i) => (
          <PackCard key={pack.name} pack={pack} index={i} />
        ))}
      </div>

      {/* Flavours section */}
      <div className="max-w-[900px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-white mb-2">
            Flavour{' '}
            <span style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Selection
            </span>
          </h3>
          <p className="font-sans text-[13px] text-white/50">Pick your favourites from our rotating menu</p>
        </motion.div>

        <div className="flex flex-wrap gap-2.5 justify-center">
          {flavours.map((flavour, i) => (
            <motion.span
              key={flavour}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(200,151,58,0.6)' }}
              className="px-4 py-2 rounded-full font-sans text-[11px] font-semibold text-white/70 cursor-pointer transition-all duration-300"
              style={{ border: '1px solid rgba(200,151,58,0.22)', background: 'rgba(200,151,58,0.04)' }}
            >
              {flavour}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
