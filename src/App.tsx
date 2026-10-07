/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans-body selection:bg-amber-400 selection:text-neutral-950">
      {/* Top 3-Zone Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Full-Screen Scroll-Driven Hero Section */}
        <Hero />

        {/* Section 2: Introduction & Aerodynamic Philosophy */}
        <About />

        {/* Section 3: Engineering Features & Specifications Cards */}
        <Features />

        {/* Interactive Kinetic Rig & Technical Dossier Capture */}
        <InteractiveShowcase />
      </main>

      {/* Quiet Minimal Footer */}
      <Footer />
    </div>
  );
}
