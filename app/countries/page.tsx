'use client';

import {
  countriesData,
  getVisitedCountries,
  getVisitedCountriesCount,
  getTotalCountries,
  getVisitedPercentage,
  getContinentStats
} from '@/data/countriesData';
import PageTitle from '@/components/PageTitle';
import CountriesMapWrapper from '@/components/CountriesMapWrapper';

export default function CountriesPage() {
  const visitedCountries = getVisitedCountries();
  const visitedCount = getVisitedCountriesCount();
  const totalCount = getTotalCountries();
  const visitedPercentage = getVisitedPercentage();
  const continentStats = getContinentStats();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <PageTitle>Countries I've Visited</PageTitle>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A visual representation of my travel journey around the world
        </p>
      </div>

      {/* Overall Statistics */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Global Statistics</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{visitedCount}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Countries Visited</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{totalCount}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">{visitedPercentage}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">World Coverage</div>
          </div>
        </div>
      </div>

      {/* Interactive World Map */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">World Map</h2>
        <CountriesMapWrapper
          visitedCountries={visitedCountries}
          className="h-96 w-full rounded-lg overflow-hidden"
        />
      </div>

      {/* Continent Statistics */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">By Continent</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(continentStats)
            .sort(([, a], [, b]) => b.percentage - a.percentage)
            .map(([continent, stats]) => (
              <div key={continent} className="rounded-lg border border-gray-100 p-4 dark:border-gray-600">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{continent}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {stats.visited} / {stats.total}
                  </span>
                  <span className="font-medium text-primary-600 dark:text-primary-400">
                    {stats.percentage}%
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-600">
                  <div
                    className="h-2 rounded-full bg-primary-500"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Visited Countries List */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Visited Countries ({visitedCount})
        </h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visitedCountries
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((country) => (
              <div
                key={country.code}
                className="flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-700 dark:bg-green-900/20"
              >
                <span className="text-2xl">{getFlagEmoji(country.code)}</span>
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{country.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{country.continent}</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Bucket List */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Next Destinations</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Some countries I'm planning to visit next...
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: 'Japan', code: 'JP', continent: 'Asia' },
            { name: 'New Zealand', code: 'NZ', continent: 'Oceania' },
            { name: 'Norway', code: 'NO', continent: 'Europe' },
            { name: 'Iceland', code: 'IS', continent: 'Europe' },
            { name: 'Canada', code: 'CA', continent: 'North America' },
            { name: 'Brazil', code: 'BR', continent: 'South America' }
          ].map((country) => (
            <div
              key={country.code}
              className="flex items-center space-x-3 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-700 dark:bg-blue-900/20"
            >
              <span className="text-2xl">{getFlagEmoji(country.code)}</span>
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{country.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{country.continent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function to get flag emoji from country code
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}