'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('meta');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button className="themeToggle" aria-label="Toggle theme" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      className="themeToggle"
      aria-label={t('themeToggle')}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
    >
      {isDark ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  );
}
