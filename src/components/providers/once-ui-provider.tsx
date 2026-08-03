'use client';

import {
  DataThemeProvider,
  IconProvider,
  LayoutProvider,
  ThemeProvider as OnceThemeProvider,
  ToastProvider
} from '@once-ui-system/core';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function OnceUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      themes={['light', 'dark']}
    >
      <OnceThemeProvider>
        <LayoutProvider>
          <DataThemeProvider>
            <ToastProvider>
              <IconProvider>{children}</IconProvider>
            </ToastProvider>
          </DataThemeProvider>
        </LayoutProvider>
      </OnceThemeProvider>
    </NextThemesProvider>
  );
}