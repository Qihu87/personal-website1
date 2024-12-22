'use client';

import { useEffect, useState } from 'react';

export default function BackgroundImage() {
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // 计算滚动百分比（0-0.9之间，保留0.1的最小透明度）
      const scrollPercentage = Math.min(currentScrollY / maxScroll * 0.9, 0.9);
      
      // 根据滚动方向决定透明度
      if (currentScrollY > lastScrollY) {
        // 向上滚动，减少透明度，但保持最小0.1
        setOpacity(Math.max(1 - scrollPercentage, 0.1));
      } else {
        // 向下滚动，增加透明度
        setOpacity(Math.min(1 - scrollPercentage + 0.1, 1));
      }
      
      setLastScrollY(currentScrollY);
    };

    // 添加滚动监听器
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="background-container" style={{ opacity }}>
      <img src="/images/hero/bg3.png" alt="背景图片" />
    </div>
  );
} 