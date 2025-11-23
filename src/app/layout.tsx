"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

export default function ThemeToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <html lang="en">
      <body>
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>

        {/* Header */}
        <header className="w-full bg-white shadow-md p-4">
          <h1 className="text-xl font-bold text-gray-800 text-center">
            My Product Store
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
