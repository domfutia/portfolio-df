'use client';

import { useEffect, useState } from 'react';
import { ThemeSwitcher } from '@once-ui-system/core';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="themeTogglePlaceholder" aria-hidden="true" />;
  }

  return (
    <ThemeSwitcher
      value={resolvedTheme === 'dark' ? 'dark' : 'light'}
      onValueChange={(value: string) => setTheme(value)}
    />
  );
}