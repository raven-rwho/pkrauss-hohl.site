'use client';

import dynamic from 'next/dynamic';
import { Country } from '@/data/countriesData';
import CountriesMapFallback from './CountriesMapFallback';

interface CountriesMapWrapperProps {
  visitedCountries: Country[];
  className?: string;
}

// Dynamically import the Mapbox component to avoid SSR issues
const CountriesMap = dynamic(() => import('./CountriesMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
      <div className="text-center">
        <div className="mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-primary-500"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading map...</p>
      </div>
    </div>
  ),
});

export default function CountriesMapWrapper({ visitedCountries, className = '' }: CountriesMapWrapperProps) {
  // Always use the real Mapbox implementation
  return <CountriesMap visitedCountries={visitedCountries} className={className} />;
}