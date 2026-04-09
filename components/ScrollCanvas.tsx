'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Props {
  progress: number;
  onProgress?: (progress: number) => void;
}

// Total frames available
const TOTAL_FRAMES = 917;

function getFrameSrc(index: number): string {
  // index is 0-based
  const num = String(index + 1).padStart(4, '0');
  return `/frames/v1_frame_${num}.jpg?v=2`;
}

export default function ScrollCanvas({ progress, onProgress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all frames from local /frames/ folder
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    // Load in batches to avoid overwhelming the browser
    const BATCH_SIZE = 30;
    let batchStart = 0;

    const loadBatch = () => {
      const batchEnd = Math.min(batchStart + BATCH_SIZE, TOTAL_FRAMES);
      let batchLoaded = 0;

      for (let i = batchStart; i < batchEnd; i++) {
        const img = new Image();
        const idx = i;
        img.src = getFrameSrc(idx);

        const handleDone = () => {
          images[idx] = img;
          loadedCount++;
          batchLoaded++;

          const currentProgress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
          onProgress?.(currentProgress);

          if (loadedCount === TOTAL_FRAMES) {
            imagesRef.current = images;
            setImagesLoaded(true);
          } else if (batchLoaded === batchEnd - batchStart) {
            // Load next batch
            batchStart = batchEnd;
            if (batchStart < TOTAL_FRAMES) {
              requestAnimationFrame(loadBatch);
            }
          }
        };

        img.onload = handleDone;
        img.onerror = () => {
          // On error, still count as done to keep progress moving
          handleDone();
        };
      }
    };

    loadBatch();
  }, [onProgress]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const totalFrames = TOTAL_FRAMES;
    const frameIndex = Math.min(
      Math.floor(progress * (totalFrames - 1)),
      totalFrames - 1
    );
    const img = images[frameIndex];

    // Fallback to first available image
    let drawImg = img;
    if (!drawImg || !drawImg.complete || drawImg.naturalWidth === 0) {
      // Find nearest loaded frame
      for (let i = frameIndex; i >= 0; i--) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          drawImg = images[i];
          break;
        }
      }
    }

    if (drawImg && drawImg.complete && drawImg.naturalWidth > 0) {
      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      const vw = drawImg.naturalWidth;
      const vh = drawImg.naturalHeight;

      if (vw === 0 || vh === 0) return;

      // Cover fit — fill the canvas maintaining aspect ratio
      const scale = Math.max(cw / vw, ch / vh);
      const dw = vw * scale;
      const dh = vh * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.drawImage(drawImg, dx, dy, dw, dh);
    }
  }, [progress]);

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      render();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const timer = setTimeout(resizeCanvas, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(timer);
    };
  }, [render]);

  // Re-render when progress or loaded state changes
  useEffect(() => {
    requestAnimationFrame(render);
  }, [imagesLoaded, render]);

  return (
    <canvas
      id="scroll-canvas"
      ref={canvasRef}
      aria-label="Donut animation background"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
