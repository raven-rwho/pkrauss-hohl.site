export interface Country {
  name: string;
  code: string; // ISO 3166-1 alpha-2 code
  visited: boolean;
  continent: string;
}

// Total: 195 UN member states
export const countriesData: Country[] = [
  // Europe
  { name: 'Austria', code: 'AT', visited: true, continent: 'Europe' },
  { name: 'Germany', code: 'DE', visited: true, continent: 'Europe' },
  { name: 'Switzerland', code: 'CH', visited: true, continent: 'Europe' },
  { name: 'France', code: 'FR', visited: true, continent: 'Europe' },
  { name: 'Italy', code: 'IT', visited: true, continent: 'Europe' },
  { name: 'Spain', code: 'ES', visited: true, continent: 'Europe' },
  { name: 'Netherlands', code: 'NL', visited: true, continent: 'Europe' },
  { name: 'Belgium', code: 'BE', visited: true, continent: 'Europe' },
  { name: 'United Kingdom', code: 'GB', visited: true, continent: 'Europe' },
  { name: 'Czech Republic', code: 'CZ', visited: true, continent: 'Europe' },
  { name: 'Slovenia', code: 'SI', visited: false, continent: 'Europe' },
  { name: 'Croatia', code: 'HR', visited: true, continent: 'Europe' },
  { name: 'Hungary', code: 'HU', visited: true, continent: 'Europe' },
  { name: 'Poland', code: 'PL', visited: true, continent: 'Europe' },
  { name: 'Denmark', code: 'DK', visited: true, continent: 'Europe' },
  { name: 'Sweden', code: 'SE', visited: true, continent: 'Europe' },
  { name: 'Norway', code: 'NO', visited: false, continent: 'Europe' },
  { name: 'Finland', code: 'FI', visited: false, continent: 'Europe' },
  { name: 'Estonia', code: 'EE', visited: false, continent: 'Europe' },
  { name: 'Latvia', code: 'LV', visited: false, continent: 'Europe' },
  { name: 'Lithuania', code: 'LT', visited: false, continent: 'Europe' },
  { name: 'Russia', code: 'RU', visited: false, continent: 'Europe' },
  { name: 'Ukraine', code: 'UA', visited: false, continent: 'Europe' },
  { name: 'Belarus', code: 'BY', visited: false, continent: 'Europe' },
  { name: 'Moldova', code: 'MD', visited: false, continent: 'Europe' },
  { name: 'Romania', code: 'RO', visited: true, continent: 'Europe' },
  { name: 'Bulgaria', code: 'BG', visited: false, continent: 'Europe' },
  { name: 'Serbia', code: 'RS', visited: true, continent: 'Europe' },
  { name: 'Montenegro', code: 'ME', visited: false, continent: 'Europe' },
  { name: 'Bosnia and Herzegovina', code: 'BA', visited: false, continent: 'Europe' },
  { name: 'North Macedonia', code: 'MK', visited: false, continent: 'Europe' },
  { name: 'Albania', code: 'AL', visited: false, continent: 'Europe' },
  { name: 'Greece', code: 'GR', visited: true, continent: 'Europe' },
  { name: 'Portugal', code: 'PT', visited: true, continent: 'Europe' },
  { name: 'Luxembourg', code: 'LU', visited: false, continent: 'Europe' },
  { name: 'Monaco', code: 'MC', visited: false, continent: 'Europe' },
  { name: 'Andorra', code: 'AD', visited: false, continent: 'Europe' },
  { name: 'San Marino', code: 'SM', visited: false, continent: 'Europe' },
  { name: 'Vatican City', code: 'VA', visited: true, continent: 'Europe' },
  { name: 'Malta', code: 'MT', visited: false, continent: 'Europe' },
  { name: 'Cyprus', code: 'CY', visited: false, continent: 'Europe' },
  { name: 'Iceland', code: 'IS', visited: false, continent: 'Europe' },
  { name: 'Ireland', code: 'IE', visited: false, continent: 'Europe' },
  { name: 'Slovakia', code: 'SK', visited: false, continent: 'Europe' },

  // North America
  { name: 'United States', code: 'US', visited: true, continent: 'North America' },
  { name: 'Canada', code: 'CA', visited: true, continent: 'North America' },
  { name: 'Mexico', code: 'MX', visited: false, continent: 'North America' },
  { name: 'Guatemala', code: 'GT', visited: false, continent: 'North America' },
  { name: 'Belize', code: 'BZ', visited: false, continent: 'North America' },
  { name: 'El Salvador', code: 'SV', visited: false, continent: 'North America' },
  { name: 'Honduras', code: 'HN', visited: false, continent: 'North America' },
  { name: 'Nicaragua', code: 'NI', visited: false, continent: 'North America' },
  { name: 'Costa Rica', code: 'CR', visited: false, continent: 'North America' },
  { name: 'Panama', code: 'PA', visited: false, continent: 'North America' },
  { name: 'Cuba', code: 'CU', visited: false, continent: 'North America' },
  { name: 'Jamaica', code: 'JM', visited: false, continent: 'North America' },
  { name: 'Haiti', code: 'HT', visited: false, continent: 'North America' },
  { name: 'Dominican Republic', code: 'DO', visited: false, continent: 'North America' },
  { name: 'Bahamas', code: 'BS', visited: false, continent: 'North America' },
  { name: 'Barbados', code: 'BB', visited: false, continent: 'North America' },
  { name: 'Saint Lucia', code: 'LC', visited: false, continent: 'North America' },
  { name: 'Grenada', code: 'GD', visited: false, continent: 'North America' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', visited: false, continent: 'North America' },
  { name: 'Antigua and Barbuda', code: 'AG', visited: false, continent: 'North America' },
  { name: 'Dominica', code: 'DM', visited: false, continent: 'North America' },
  { name: 'Saint Kitts and Nevis', code: 'KN', visited: false, continent: 'North America' },
  { name: 'Trinidad and Tobago', code: 'TT', visited: false, continent: 'North America' },

  // South America
  { name: 'Brazil', code: 'BR', visited: false, continent: 'South America' },
  { name: 'Argentina', code: 'AR', visited: false, continent: 'South America' },
  { name: 'Chile', code: 'CL', visited: false, continent: 'South America' },
  { name: 'Peru', code: 'PE', visited: false, continent: 'South America' },
  { name: 'Colombia', code: 'CO', visited: false, continent: 'South America' },
  { name: 'Venezuela', code: 'VE', visited: false, continent: 'South America' },
  { name: 'Ecuador', code: 'EC', visited: false, continent: 'South America' },
  { name: 'Bolivia', code: 'BO', visited: false, continent: 'South America' },
  { name: 'Paraguay', code: 'PY', visited: false, continent: 'South America' },
  { name: 'Uruguay', code: 'UY', visited: false, continent: 'South America' },
  { name: 'Guyana', code: 'GY', visited: false, continent: 'South America' },
  { name: 'Suriname', code: 'SR', visited: false, continent: 'South America' },

  // Asia
  { name: 'China', code: 'CN', visited: false, continent: 'Asia' },
  { name: 'Japan', code: 'JP', visited: false, continent: 'Asia' },
  { name: 'South Korea', code: 'KR', visited: true, continent: 'Asia' },
  { name: 'North Korea', code: 'KP', visited: false, continent: 'Asia' },
  { name: 'India', code: 'IN', visited: false, continent: 'Asia' },
  { name: 'Pakistan', code: 'PK', visited: false, continent: 'Asia' },
  { name: 'Bangladesh', code: 'BD', visited: false, continent: 'Asia' },
  { name: 'Sri Lanka', code: 'LK', visited: false, continent: 'Asia' },
  { name: 'Nepal', code: 'NP', visited: false, continent: 'Asia' },
  { name: 'Bhutan', code: 'BT', visited: false, continent: 'Asia' },
  { name: 'Maldives', code: 'MV', visited: false, continent: 'Asia' },
  { name: 'Thailand', code: 'TH', visited: true, continent: 'Asia' },
  { name: 'Vietnam', code: 'VN', visited: false, continent: 'Asia' },
  { name: 'Cambodia', code: 'KH', visited: false, continent: 'Asia' },
  { name: 'Laos', code: 'LA', visited: false, continent: 'Asia' },
  { name: 'Myanmar', code: 'MM', visited: false, continent: 'Asia' },
  { name: 'Malaysia', code: 'MY', visited: true, continent: 'Asia' },
  { name: 'Singapore', code: 'SG', visited: true, continent: 'Asia' },
  { name: 'Indonesia', code: 'ID', visited: false, continent: 'Asia' },
  { name: 'Philippines', code: 'PH', visited: false, continent: 'Asia' },
  { name: 'Brunei', code: 'BN', visited: false, continent: 'Asia' },
  { name: 'East Timor', code: 'TL', visited: false, continent: 'Asia' },
  { name: 'Mongolia', code: 'MN', visited: false, continent: 'Asia' },
  { name: 'Kazakhstan', code: 'KZ', visited: false, continent: 'Asia' },
  { name: 'Kyrgyzstan', code: 'KG', visited: false, continent: 'Asia' },
  { name: 'Tajikistan', code: 'TJ', visited: false, continent: 'Asia' },
  { name: 'Turkmenistan', code: 'TM', visited: false, continent: 'Asia' },
  { name: 'Uzbekistan', code: 'UZ', visited: false, continent: 'Asia' },
  { name: 'Afghanistan', code: 'AF', visited: false, continent: 'Asia' },
  { name: 'Iran', code: 'IR', visited: false, continent: 'Asia' },
  { name: 'Iraq', code: 'IQ', visited: false, continent: 'Asia' },
  { name: 'Turkey', code: 'TR', visited: true, continent: 'Asia' },
  { name: 'Syria', code: 'SY', visited: false, continent: 'Asia' },
  { name: 'Lebanon', code: 'LB', visited: false, continent: 'Asia' },
  { name: 'Jordan', code: 'JO', visited: false, continent: 'Asia' },
  { name: 'Israel', code: 'IL', visited: true, continent: 'Asia' },
  { name: 'Palestine', code: 'PS', visited: false, continent: 'Asia' },
  { name: 'Saudi Arabia', code: 'SA', visited: false, continent: 'Asia' },
  { name: 'Yemen', code: 'YE', visited: false, continent: 'Asia' },
  { name: 'Oman', code: 'OM', visited: false, continent: 'Asia' },
  { name: 'United Arab Emirates', code: 'AE', visited: false, continent: 'Asia' },
  { name: 'Qatar', code: 'QA', visited: false, continent: 'Asia' },
  { name: 'Bahrain', code: 'BH', visited: false, continent: 'Asia' },
  { name: 'Kuwait', code: 'KW', visited: false, continent: 'Asia' },
  { name: 'Georgia', code: 'GE', visited: false, continent: 'Asia' },
  { name: 'Armenia', code: 'AM', visited: false, continent: 'Asia' },
  { name: 'Azerbaijan', code: 'AZ', visited: false, continent: 'Asia' },

  // Africa
  { name: 'Nigeria', code: 'NG', visited: false, continent: 'Africa' },
  { name: 'Ethiopia', code: 'ET', visited: false, continent: 'Africa' },
  { name: 'Egypt', code: 'EG', visited: false, continent: 'Africa' },
  { name: 'Democratic Republic of the Congo', code: 'CD', visited: false, continent: 'Africa' },
  { name: 'Tanzania', code: 'TZ', visited: true, continent: 'Africa' },
  { name: 'South Africa', code: 'ZA', visited: false, continent: 'Africa' },
  { name: 'Kenya', code: 'KE', visited: false, continent: 'Africa' },
  { name: 'Uganda', code: 'UG', visited: false, continent: 'Africa' },
  { name: 'Algeria', code: 'DZ', visited: false, continent: 'Africa' },
  { name: 'Sudan', code: 'SD', visited: false, continent: 'Africa' },
  { name: 'Morocco', code: 'MA', visited: false, continent: 'Africa' },
  { name: 'Angola', code: 'AO', visited: false, continent: 'Africa' },
  { name: 'Mozambique', code: 'MZ', visited: false, continent: 'Africa' },
  { name: 'Ghana', code: 'GH', visited: false, continent: 'Africa' },
  { name: 'Madagascar', code: 'MG', visited: false, continent: 'Africa' },
  { name: 'Cameroon', code: 'CM', visited: false, continent: 'Africa' },
  { name: 'Côte d\'Ivoire', code: 'CI', visited: false, continent: 'Africa' },
  { name: 'Niger', code: 'NE', visited: false, continent: 'Africa' },
  { name: 'Burkina Faso', code: 'BF', visited: false, continent: 'Africa' },
  { name: 'Mali', code: 'ML', visited: false, continent: 'Africa' },
  { name: 'Malawi', code: 'MW', visited: false, continent: 'Africa' },
  { name: 'Zambia', code: 'ZM', visited: false, continent: 'Africa' },
  { name: 'Senegal', code: 'SN', visited: false, continent: 'Africa' },
  { name: 'Somalia', code: 'SO', visited: false, continent: 'Africa' },
  { name: 'Chad', code: 'TD', visited: false, continent: 'Africa' },
  { name: 'Guinea', code: 'GN', visited: false, continent: 'Africa' },
  { name: 'Rwanda', code: 'RW', visited: false, continent: 'Africa' },
  { name: 'Benin', code: 'BJ', visited: false, continent: 'Africa' },
  { name: 'Burundi', code: 'BI', visited: false, continent: 'Africa' },
  { name: 'Tunisia', code: 'TN', visited: false, continent: 'Africa' },
  { name: 'South Sudan', code: 'SS', visited: false, continent: 'Africa' },
  { name: 'Togo', code: 'TG', visited: false, continent: 'Africa' },
  { name: 'Sierra Leone', code: 'SL', visited: false, continent: 'Africa' },
  { name: 'Libya', code: 'LY', visited: false, continent: 'Africa' },
  { name: 'Liberia', code: 'LR', visited: false, continent: 'Africa' },
  { name: 'Central African Republic', code: 'CF', visited: false, continent: 'Africa' },
  { name: 'Mauritania', code: 'MR', visited: false, continent: 'Africa' },
  { name: 'Eritrea', code: 'ER', visited: false, continent: 'Africa' },
  { name: 'Gambia', code: 'GM', visited: false, continent: 'Africa' },
  { name: 'Botswana', code: 'BW', visited: false, continent: 'Africa' },
  { name: 'Namibia', code: 'NA', visited: false, continent: 'Africa' },
  { name: 'Gabon', code: 'GA', visited: false, continent: 'Africa' },
  { name: 'Lesotho', code: 'LS', visited: false, continent: 'Africa' },
  { name: 'Guinea-Bissau', code: 'GW', visited: false, continent: 'Africa' },
  { name: 'Equatorial Guinea', code: 'GQ', visited: false, continent: 'Africa' },
  { name: 'Mauritius', code: 'MU', visited: false, continent: 'Africa' },
  { name: 'Eswatini', code: 'SZ', visited: false, continent: 'Africa' },
  { name: 'Djibouti', code: 'DJ', visited: false, continent: 'Africa' },
  { name: 'Comoros', code: 'KM', visited: false, continent: 'Africa' },
  { name: 'Cape Verde', code: 'CV', visited: false, continent: 'Africa' },
  { name: 'São Tomé and Príncipe', code: 'ST', visited: false, continent: 'Africa' },
  { name: 'Seychelles', code: 'SC', visited: false, continent: 'Africa' },

  // Oceania
  { name: 'Australia', code: 'AU', visited: false, continent: 'Oceania' },
  { name: 'Papua New Guinea', code: 'PG', visited: false, continent: 'Oceania' },
  { name: 'New Zealand', code: 'NZ', visited: false, continent: 'Oceania' },
  { name: 'Fiji', code: 'FJ', visited: false, continent: 'Oceania' },
  { name: 'Solomon Islands', code: 'SB', visited: false, continent: 'Oceania' },
  { name: 'Vanuatu', code: 'VU', visited: false, continent: 'Oceania' },
  { name: 'Samoa', code: 'WS', visited: false, continent: 'Oceania' },
  { name: 'Micronesia', code: 'FM', visited: false, continent: 'Oceania' },
  { name: 'Tonga', code: 'TO', visited: false, continent: 'Oceania' },
  { name: 'Kiribati', code: 'KI', visited: false, continent: 'Oceania' },
  { name: 'Palau', code: 'PW', visited: false, continent: 'Oceania' },
  { name: 'Marshall Islands', code: 'MH', visited: false, continent: 'Oceania' },
  { name: 'Tuvalu', code: 'TV', visited: false, continent: 'Oceania' },
  { name: 'Nauru', code: 'NR', visited: false, continent: 'Oceania' },
];

export const getVisitedCountries = (): Country[] => {
  return countriesData.filter(country => country.visited);
};

export const getVisitedCountriesByContinent = (): Record<string, Country[]> => {
  const visited = getVisitedCountries();
  return visited.reduce((acc, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {} as Record<string, Country[]>);
};

export const getTotalCountries = (): number => {
  return countriesData.length;
};

export const getVisitedCountriesCount = (): number => {
  return getVisitedCountries().length;
};

export const getVisitedPercentage = (): number => {
  return Math.round((getVisitedCountriesCount() / getTotalCountries()) * 100 * 100) / 100;
};

export const getContinentStats = (): Record<string, { visited: number; total: number; percentage: number }> => {
  const continentStats: Record<string, { visited: number; total: number; percentage: number }> = {};

  countriesData.forEach(country => {
    if (!continentStats[country.continent]) {
      continentStats[country.continent] = { visited: 0, total: 0, percentage: 0 };
    }
    continentStats[country.continent].total++;
    if (country.visited) {
      continentStats[country.continent].visited++;
    }
  });

  Object.keys(continentStats).forEach(continent => {
    const stats = continentStats[continent];
    stats.percentage = Math.round((stats.visited / stats.total) * 100 * 100) / 100;
  });

  return continentStats;
};