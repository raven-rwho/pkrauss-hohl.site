'use client';

import { Country } from '@/data/countriesData';

interface CountriesMapFallbackProps {
  visitedCountries: Country[];
  className?: string;
}

const COUNTRY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  // Europe
  'AT': { lat: 47.5162, lng: 14.5501 }, // Austria
  'DE': { lat: 51.1657, lng: 10.4515 }, // Germany
  'CH': { lat: 46.8182, lng: 8.2275 }, // Switzerland
  'FR': { lat: 46.6034, lng: 1.8883 }, // France
  'IT': { lat: 41.8719, lng: 12.5674 }, // Italy
  'ES': { lat: 40.4637, lng: -3.7492 }, // Spain
  'NL': { lat: 52.1326, lng: 5.2913 }, // Netherlands
  'BE': { lat: 50.5039, lng: 4.4699 }, // Belgium
  'GB': { lat: 55.3781, lng: -3.4360 }, // United Kingdom
  'CZ': { lat: 49.8175, lng: 15.4730 }, // Czech Republic
  'SI': { lat: 46.1512, lng: 14.9955 }, // Slovenia
  'HR': { lat: 45.1000, lng: 15.2000 }, // Croatia
  'HU': { lat: 47.1625, lng: 19.5033 }, // Hungary
  // North America
  'US': { lat: 37.0902, lng: -95.7129 }, // United States
};

export default function CountriesMapFallback({ visitedCountries, className }: CountriesMapFallbackProps) {
  return (
    <div className={className}>
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        {/* SVG World Map Outline */}
        <svg
          viewBox="0 0 1000 500"
          className="h-full w-full"
          style={{ filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))' }}
        >
          {/* Simple world map outline */}
          <defs>
            <pattern id="visited" patternUnits="userSpaceOnUse" width="4" height="4">
              <rect width="4" height="4" fill="#10b981" />
            </pattern>
          </defs>

          {/* Continents as simplified shapes */}
          {/* North America */}
          <path
            d="M 150 150 Q 200 100 300 120 Q 350 110 400 140 Q 420 160 400 200 Q 380 220 350 210 Q 300 215 250 200 Q 200 190 150 180 Z"
            fill={visitedCountries.some(c => c.code === 'US') ? "#10b981" : "#e5e7eb"}
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* Europe */}
          <path
            d="M 450 140 Q 500 130 550 140 Q 580 135 600 150 Q 590 170 570 165 Q 540 170 510 160 Q 480 155 450 150 Z"
            fill={visitedCountries.some(c => ['AT', 'DE', 'CH', 'FR', 'IT', 'ES', 'NL', 'BE', 'GB', 'CZ', 'SI', 'HR', 'HU'].includes(c.code)) ? "#10b981" : "#e5e7eb"}
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* Asia */}
          <path
            d="M 600 140 Q 700 120 800 130 Q 850 125 900 140 Q 920 160 900 180 Q 870 190 820 185 Q 770 188 720 180 Q 670 175 620 165 Q 600 155 600 145 Z"
            fill="#e5e7eb"
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* Africa */}
          <path
            d="M 480 200 Q 520 190 560 200 Q 580 220 570 260 Q 560 300 540 320 Q 520 330 500 320 Q 485 300 485 270 Q 480 240 480 210 Z"
            fill="#e5e7eb"
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* South America */}
          <path
            d="M 350 250 Q 380 240 400 260 Q 410 290 400 320 Q 390 350 380 380 Q 370 400 360 380 Q 355 350 355 320 Q 350 290 350 260 Z"
            fill="#e5e7eb"
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* Australia */}
          <path
            d="M 750 320 Q 800 315 850 325 Q 870 335 860 350 Q 840 355 800 350 Q 760 345 750 330 Z"
            fill="#e5e7eb"
            stroke="#ffffff"
            strokeWidth="1"
          />

          {/* Add markers for visited countries */}
          {visitedCountries.map((country) => {
            const coords = COUNTRY_COORDINATES[country.code];
            if (!coords) return null;

            // Convert lat/lng to SVG coordinates (rough approximation)
            const x = ((coords.lng + 180) / 360) * 1000;
            const y = ((90 - coords.lat) / 180) * 500;

            return (
              <g key={country.code}>
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#10b981"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </g>
            );
          })}
        </svg>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4 rounded-full bg-white/80 p-4 dark:bg-gray-800/80">
              <svg className="h-12 w-12 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Interactive World Map
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {visitedCountries.length} countries visited
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 shadow-lg dark:bg-gray-800/90">
          <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Legend</h4>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded bg-emerald-500"></div>
              <span className="text-xs text-gray-700 dark:text-gray-300">Visited</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded bg-gray-300 dark:bg-gray-600"></div>
              <span className="text-xs text-gray-700 dark:text-gray-300">Not visited</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 right-4 max-w-xs rounded-lg bg-white/90 p-3 shadow-lg dark:bg-gray-800/90">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Simplified world map visualization. Green areas and markers indicate visited regions.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">
              Add NEXT_PUBLIC_MAPBOX_TOKEN for full interactive map
            </p>
          )}
        </div>
      </div>
    </div>
  );
}