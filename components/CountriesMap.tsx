'use client';

import { useCallback, useEffect, useState } from 'react';
import Map, {
  Marker,
  MapRef,
  ViewState
} from 'react-map-gl/mapbox';
import { Country } from '@/data/countriesData';

interface CountriesMapProps {
  visitedCountries: Country[];
  className?: string;
}

const INITIAL_VIEW_STATE: ViewState = {
  longitude: 0,
  latitude: 20,
  zoom: 1.2,
  bearing: 0,
  pitch: 0,
  padding: { top: 0, bottom: 0, left: 0, right: 0 }
};

export default function CountriesMap({ visitedCountries, className }: CountriesMapProps) {
  const [mapRef, setMapRef] = useState<MapRef | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  // Create a set of visited country codes for quick lookup
  const visitedCountryCodes = new Set(visitedCountries.map(c => c.code));

  // Country coordinates for markers
  const COUNTRY_COORDINATES: Record<string, { lat: number; lng: number }> = {
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
    'US': { lat: 37.0902, lng: -95.7129 }, // United States
    'CA': { lat: 56.1304, lng: -106.3468 }, // Canada
  };

  // Country data layer - this will color countries based on visited status
  const countryLayerStyle = {
    id: 'countries',
    type: 'fill' as const,
    paint: {
      'fill-color': [
        'case',
        ['in', ['get', 'id'], ['literal', Array.from(visitedCountryCodes)]],
        '#10b981', // Green for visited countries
        '#e5e7eb'  // Gray for unvisited countries
      ],
      'fill-opacity': 0.7
    }
  };

  const countryBorderStyle = {
    id: 'country-borders',
    type: 'line' as const,
    paint: {
      'line-color': '#ffffff',
      'line-width': 1
    }
  };

  const onMapLoad = useCallback(() => {
    // Source is already added via the Source component, no need to add here
  }, []);

  const onMouseEnter = useCallback((event: MapMouseEvent) => {
    if (event.features && event.features[0]) {
      const countryCode = event.features[0].properties?.iso_3166_1_alpha_2;
      if (countryCode) {
        setHoveredCountry(countryCode);
      }
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    setHoveredCountry(null);
  }, []);

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  return (
    <div className={className}>
      <Map
        ref={setMapRef}
        mapboxAccessToken={mapboxToken}
        initialViewState={INITIAL_VIEW_STATE}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        projection={{ name: 'mercator' }}
      >
        {/* Add markers for visited countries */}
        {visitedCountries.map((country) => {
          const coords = COUNTRY_COORDINATES[country.code];
          if (!coords) return null;

          return (
            <Marker
              key={country.code}
              longitude={coords.lng}
              latitude={coords.lat}
              anchor="center"
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '2px solid white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  cursor: 'pointer'
                }}
                title={country.name}
                onClick={() => setHoveredCountry(country.code)}
              />
            </Marker>
          );
        })}
      </Map>

      {/* Tooltip for hovered country */}
      {hoveredCountry && (
        <div className="absolute top-4 left-4 rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {visitedCountries.find(c => c.code === hoveredCountry)?.name || hoveredCountry}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {visitedCountryCodes.has(hoveredCountry) ? 'Visited ✅' : 'Not visited'}
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800">
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
      <div className="absolute bottom-4 right-4 max-w-xs rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Hover over countries to see details. Green countries have been visited.
        </p>
      </div>
    </div>
  );
}