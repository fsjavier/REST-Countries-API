import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SearchField from "./SearchField";
import SelectFilter from "./SelectFilter";

export interface Country {
  name: {
    common: string;
  };
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  capital?: string[];
}

export default function CountriesList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [regions, setRegions] = useState<string[]>([]);
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setCountries(data);
      const uniqueRegions: string[] = Array.from(
        new Set(data.map((country: Country) => country.region))
      );
      setRegions(uniqueRegions);
    }
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter ? country.region === regionFilter : true;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="flex flex-col container mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between p-8">
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SelectFilter
          options={regions}
          setFilter={setRegionFilter}
          value={regionFilter}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 self-center">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}
