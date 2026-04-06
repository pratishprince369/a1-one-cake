'use client';

export default function TrustStrip() {
  return (
    <div className="relative z-10 border-t-2 border-[#C8973A] border-b border-[rgba(200,151,58,0.15)] overflow-hidden" style={{ background: 'rgba(0,0,0,0.88)' }}>
      <div className="h-[40px] md:h-[46px] flex items-center overflow-hidden border-b border-[rgba(200,151,58,0.12)]">
        <div className="flex items-center gap-8 md:gap-[52px] whitespace-nowrap font-sans text-[9px] md:text-[10px] font-semibold tracking-[0.22em] md:tracking-[0.26em] uppercase animate-marqLeft text-white/70">
          <span>Hot & Fresh Mini Donuts</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Halal Certified</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Made To Order</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Egg Free Options</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Event Catering</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Same Day Service</span><em className="text-[#C8973A] not-italic">✦</em>
          {/* Duplicate for seamless loop */}
          <span>Hot & Fresh Mini Donuts</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Halal Certified</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Made To Order</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Egg Free Options</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Event Catering</span><em className="text-[#C8973A] not-italic">✦</em>
          <span>Same Day Service</span><em className="text-[#C8973A] not-italic">✦</em>
        </div>
      </div>
      <div className="h-[40px] md:h-[46px] flex items-center overflow-hidden">
        <div className="flex items-center gap-8 md:gap-[52px] whitespace-nowrap font-sans text-[9px] md:text-[10px] font-semibold tracking-[0.22em] md:tracking-[0.26em] uppercase animate-marqRight text-[#C8973A]">
          <span>Lil Pack</span><em className="text-white/25 not-italic">◆</em>
          <span>Petite Pack</span><em className="text-white/25 not-italic">◆</em>
          <span>Jumbo Pack</span><em className="text-white/25 not-italic">◆</em>
          <span>Custom Flavours</span><em className="text-white/25 not-italic">◆</em>
          <span>Catering Events</span><em className="text-white/25 not-italic">◆</em>
          <span>Franchise Available</span><em className="text-white/25 not-italic">◆</em>
          {/* Duplicate */}
          <span>Lil Pack</span><em className="text-white/25 not-italic">◆</em>
          <span>Petite Pack</span><em className="text-white/25 not-italic">◆</em>
          <span>Jumbo Pack</span><em className="text-white/25 not-italic">◆</em>
          <span>Custom Flavours</span><em className="text-white/25 not-italic">◆</em>
          <span>Catering Events</span><em className="text-white/25 not-italic">◆</em>
          <span>Franchise Available</span><em className="text-white/25 not-italic">◆</em>
        </div>
      </div>
    </div>
  );
}
