"use client"

import * as React from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,216,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,216,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Registry Active
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                @arach
              </span>{" "}
              Registry
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Military-grade UI components and themes for shadcn/ui. 
              Tactical precision meets sophisticated design.
            </p>

            {/* Installation */}
            <div className="mt-12 space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider font-mono">
                Quick Install
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <code className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-sm text-cyan-400 font-mono text-sm">
                  npx shadcn@latest add @arach/terminal
                </code>
              </div>
              <p className="text-xs text-gray-600">
                or use direct URL: https://registry.arach.dev/r/terminal.json
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Items */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="border-l-2 border-cyan-500 pl-4">
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              Available Themes
            </h2>
            <p className="text-gray-400 mt-2">
              Production-ready themes with comprehensive component styling
            </p>
          </div>

          {/* Terminal Theme Card */}
          <div className="bg-gray-900 border-2 border-gray-800 border-l-4 border-l-cyan-500 rounded-sm p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Terminal Theme</h3>
                <p className="text-sm text-gray-400">
                  Complete design system with 550+ lines of tactical UI patterns
                </p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-sm bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 text-[10px] font-mono uppercase tracking-wider">
                    Style
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-sm bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 text-[10px] font-mono uppercase tracking-wider">
                    Production Ready
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 font-mono">v1.0.0</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Includes
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Complete color system with grayscale + tactical accents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Typography system with military precision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>40+ component styles (buttons, cards, inputs, tables)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Special effects (glows, scanlines, grids)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Utilities
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>cx() class combination utility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>getThemeValue() for nested values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Semantic aliases for common patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>CSS variables and animations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Installation Command */}
            <div className="border-t border-gray-800 pt-4">
              <div className="flex items-center justify-between">
                <code className="text-xs text-gray-500 font-mono">
                  npx shadcn@latest add @arach/terminal
                </code>
                <button 
                  onClick={() => navigator.clipboard.writeText('npx shadcn@latest add @arach/terminal')}
                  className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-900">
        <div className="space-y-8">
          <div className="border-l-2 border-cyan-500 pl-4">
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              Configuration
            </h2>
            <p className="text-gray-400 mt-2">
              Add the registry to your project
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-sm p-6">
            <p className="text-sm text-gray-400 mb-4">
              Add to your <code className="text-cyan-400">components.json</code>:
            </p>
            <pre className="bg-gray-950 border border-gray-800 rounded-sm p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{`{
  "registries": {
    "@arach": "https://registry.arach.dev/r/{name}.json"
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
              @arach/registry v1.0.0
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/arach/registry" 
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="/r/registry.json" 
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Registry JSON
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}