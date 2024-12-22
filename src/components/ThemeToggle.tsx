'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 获取保存的主题
    const savedTheme = localStorage.getItem('theme') || 'system';
    // 立即设置主题，避免闪烁
    document.documentElement.setAttribute('data-theme', savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // 获取主题切换按钮的位置
    const ripple = document.querySelector('.theme-ripple') as HTMLElement;
    if (ripple) {
      ripple.classList.remove('active', 'to-light', 'to-dark');
      // 强制重绘
      void ripple.offsetWidth;
      
      // 添加新的动画类
      ripple.classList.add('active', newTheme === 'light' ? 'to-light' : 'to-dark');
      
      // 立即切换主题并保存
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      
      // 动画结束后清理
      setTimeout(() => {
        ripple.classList.remove('active');
        setIsAnimating(false);
      }, 800);
    }
  };

  // 在组件挂载前不渲染任何内容
  if (!mounted) return null;

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
      <div className="theme-ripple" />
    </>
  );
} 