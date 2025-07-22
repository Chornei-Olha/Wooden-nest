import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "Дерев'яне гніздо",
  description: 'Котеджне містечко з власним озером в віковому лісі',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbohdansa8200back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.5"
        ></script>
      </body>
    </html>
  );
}
