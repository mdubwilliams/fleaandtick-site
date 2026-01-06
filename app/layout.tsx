import React from 'react';
import './globals.css'; // This line is the magic key for styling

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}