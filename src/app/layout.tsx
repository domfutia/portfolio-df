import type { Metadata } from 'next';
import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Domenico Futia | Portfolio',
  description: 'Bilingual portfolio built with Next.js, MDX, and light/dark theme.'
};

const onceUiInitScript = `
(function () {
  try {
    const root = document.documentElement;
    const defaultTheme = 'light';

    root.setAttribute('data-theme', defaultTheme);
    root.setAttribute('data-neutral', 'slate');
    root.setAttribute('data-brand', 'blue');
    root.setAttribute('data-accent', 'indigo');
    root.setAttribute('data-solid', 'color');
    root.setAttribute('data-solid-style', 'flat');
    root.setAttribute('data-border', 'rounded');
    root.setAttribute('data-surface', 'filled');
    root.setAttribute('data-transition', 'all');
    root.setAttribute('data-scaling', '100');
    root.setAttribute('data-viz-style', 'categorical');

    const storedTheme = localStorage.getItem('theme');
    const storedDataTheme = localStorage.getItem('data-theme');

    root.setAttribute('data-theme', storedTheme || storedDataTheme || defaultTheme);

    const styleKeys = [
      'neutral',
      'brand',
      'accent',
      'solid',
      'solid-style',
      'viz-style',
      'border',
      'surface',
      'transition',
      'scaling'
    ];

    styleKeys.forEach((key) => {
      const value = localStorage.getItem('data-' + key);
      if (value) {
        root.setAttribute('data-' + key, value);
      }
    });
  } catch (error) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: onceUiInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}