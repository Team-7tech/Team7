import React, { useEffect, useRef } from 'react';

const badgeImgUrl = '/assets/hero-background.webp';

interface ParticleScratch {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  width: number;
}

export const GlobalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Load actual Team7 Badge visual reference image via Vite imported URL
    const bgImage = new Image();
    bgImage.src = badgeImgUrl;
    let isImageLoaded = false;
    bgImage.onload = () => {
      isImageLoaded = true;
    };

    // Check prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = reducedMotionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    reducedMotionQuery.addEventListener('change', handleMotionChange);

    // Page Visibility API optimization
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Diagonal Particle Streaks System (Rain / Scratch Effect)
    let streakParticles: ParticleScratch[] = [];

    const initCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      // Responsive particle count
      const isMobile = width < 768;
      const streakCount = isMobile ? 50 : 100;

      streakParticles = [];
      for (let i = 0; i < streakCount; i++) {
        streakParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * 26 + 10,
          angle: Math.PI / 3 + (Math.random() - 0.5) * 0.15, // ~60 degree diagonal rain
          speed: Math.random() * 1.8 + 0.6,
          opacity: Math.random() * 0.45 + 0.15,
          width: Math.random() * 1.4 + 0.6
        });
      }
    };

    initCanvas();

    const handleResize = () => {
      initCanvas();
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += prefersReducedMotion ? 0.1 : 1;

      // STEP 1: Clear Canvas with solid pure dark black background
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.fillStyle = '#030304';
      ctx.fillRect(0, 0, width, height);

      // STEP 2: Render Team7 Badge Image (DRAWN BEFORE RAIN & VIGNETTE)
      const isMobile = width < 768;
      const floatOffsetY = prefersReducedMotion ? 0 : Math.sin(time * 0.02) * 4;

      if (isImageLoaded && bgImage.width > 0) {
        const aspect = bgImage.width / bgImage.height;

        // Size badge image prominently behind the hero
        let targetHeight = Math.min(height * 0.78, isMobile ? 480 : 680);
        let targetWidth = targetHeight * aspect;

        if (targetWidth > width * 0.95) {
          targetWidth = width * 0.95;
          targetHeight = targetWidth / aspect;
        }

        const imgX = (width - targetWidth) / 2;
        const imgY = (height - targetHeight) / 2 + floatOffsetY - (isMobile ? 15 : 0);

        // Draw image crisp and bright
        ctx.globalAlpha = 0.95;
        ctx.drawImage(bgImage, imgX, imgY, targetWidth, targetHeight);
        ctx.globalAlpha = 1.0;
      }

      // STEP 3: Draw Animated Diagonal Rain / Scratch Particle Streaks ON TOP of badge image
      ctx.strokeStyle = '#ffffff';
      ctx.lineCap = 'round';

      for (let i = 0; i < streakParticles.length; i++) {
        const p = streakParticles[i];

        if (!prefersReducedMotion) {
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;

          if (p.x > width + 60 || p.y > height + 60) {
            p.x = Math.random() * width - 100;
            p.y = -50;
          }
        }

        ctx.beginPath();
        ctx.lineWidth = p.width;
        ctx.globalAlpha = p.opacity;

        const x2 = p.x + Math.cos(p.angle) * p.length;
        const y2 = p.y + Math.sin(p.angle) * p.length;

        ctx.moveTo(p.x, p.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // STEP 4: Soft Edge Vignette to blend screen borders cleanly (WITHOUT washing out the badge image)
      ctx.globalAlpha = 1.0;
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.85
      );
      vignette.addColorStop(0, 'rgba(3, 3, 4, 0)');
      vignette.addColorStop(0.7, 'rgba(3, 3, 4, 0.45)');
      vignette.addColorStop(1, 'rgba(3, 3, 4, 0.85)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#030304'
      }}
    />
  );
};
